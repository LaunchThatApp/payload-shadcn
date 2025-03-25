import fs from "fs";
import path from "path";
import { type Config } from "payload";

// We'll define a simplified type for AdminViewComponent
// since we can't import it from payload/config
type AdminViewComponent = React.ComponentType<any>;

export interface ShadcnPluginOptions {
  /**
   * Enable or disable the plugin
   * @default true
   */
  enabled?: boolean;

  /**
   * Enable all shadcn component overrides
   * This will override all supported views and components with shadcn versions
   * @default false
   */
  enableAll?: boolean;

  /**
   * Configure which collections should use the shadcn list view
   * If enableAll is true, this is ignored and all collections will use shadcn list view
   * @example ["posts", "users"]
   * @default []
   */
  listView?: {
    collections: string[];
  };

  /**
   * Configure which collections should use the shadcn edit view
   * If enableAll is true, this is ignored and all collections will use shadcn edit view
   * @example ["posts", "users"]
   * @default []
   */
  editView?: {
    collections: string[];
  };

  /**
   * Additional CSS to inject into the admin panel
   * This will be injected via a style tag in the beforeDashboard component
   * @default ""
   */
  customCSS?: string;

  /**
   * Path to the custom.scss file where styles should be imported
   * @example "app/(payload)/custom.scss"
   */
  customScssPath?: string;

  /**
   * Whether to automatically inject the shadcn styles import into custom.scss
   * @default true
   */
  injectStyles?: boolean;
}

/**
 * Injects the shadcn styles import into the custom.scss file
 */
const injectStylesImport = (customScssPath: string) => {
  try {
    // Ensure the directory exists
    const dir = path.dirname(customScssPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // The import statement to add
    const importStatement =
      '@import "@launchthat.apps/payload-shadcn/styles.css";';

    // Read existing content or create new file
    let content = "";
    if (fs.existsSync(customScssPath)) {
      content = fs.readFileSync(customScssPath, "utf-8");
      // Check if import already exists
      if (content.includes(importStatement)) {
        return;
      }
    }

    // Add import at the beginning of the file
    const newContent = `${importStatement}\n${content}`;
    fs.writeFileSync(customScssPath, newContent);

    console.log(
      `✨ Successfully injected shadcn styles import into ${customScssPath}`,
    );
  } catch (error) {
    console.error(`Error injecting styles import: ${error}`);
  }
};

/**
 * PayloadCMS Shadcn UI Plugin
 * Replaces default PayloadCMS components with shadcn UI components
 */
export const shadcnPlugin =
  (options: ShadcnPluginOptions = {}) =>
  (incomingConfig: Config): Config => {
    // Set defaults
    const opts: Required<ShadcnPluginOptions> = {
      enabled: options.enabled ?? true,
      enableAll: options.enableAll ?? false,
      listView: {
        collections: options.listView?.collections ?? [],
      },
      editView: {
        collections: options.editView?.collections ?? [],
      },
      customCSS: options.customCSS ?? "",
      customScssPath: options.customScssPath ?? "app/(payload)/custom.scss",
      injectStyles: options.injectStyles ?? true,
    };

    // If plugin is disabled, return unmodified config
    if (!opts.enabled) return incomingConfig;

    // Inject styles if enabled
    if (opts.injectStyles && opts.customScssPath) {
      injectStylesImport(opts.customScssPath);
    }

    // Clone the config to avoid mutating the original
    const config = {
      ...incomingConfig,
      collections: [...(incomingConfig.collections || [])],
      admin: {
        ...(incomingConfig.admin || {}),
        components: {
          ...(incomingConfig.admin?.components || {}),
          // Inject dynamic styles through a component
          beforeDashboard: [
            ...(incomingConfig.admin?.components?.beforeDashboard || []),
            {
              Component: () => ({
                __html: `<style>${opts.customCSS}</style>`,
              }),
              memoize: false,
            },
          ],
        },
      },
    };

    // Loop through all collections and modify their admin configuration
    if (config.collections && Array.isArray(config.collections)) {
      config.collections = config.collections.map((collection) => {
        // Skip if collection has no slug
        if (!collection.slug) return collection;

        // Determine if this collection should use shadcn components
        const shouldUseListView =
          opts.enableAll || opts.listView.collections.includes(collection.slug);

        // If no views should be overridden for this collection, return it unchanged
        if (!shouldUseListView) return collection;

        return {
          ...collection,
          admin: {
            ...collection.admin,
            components: {
              ...collection.admin?.components,
              views: {
                ...collection.admin?.components?.views,
                ...(shouldUseListView && {
                  list: {
                    Component: "@launchthat.apps/payload-shadcn/rsc#ListView",
                  },
                }),
              },
            },
          },
        };
      });
    }

    // Set up onInit hook to log plugin initialization
    const existingOnInit = config.onInit;
    config.onInit = async (payload) => {
      // Call existing onInit if it exists
      if (existingOnInit) {
        await existingOnInit(payload);
      }

      // Log which features are enabled
      if (opts.enableAll) {
        payload.logger.info(
          "✨ Payload Shadcn UI Plugin: All components enabled",
        );
      } else {
        if (opts.listView.collections.length > 0) {
          payload.logger.info(
            `✨ Payload Shadcn UI Plugin: List view enabled for collections: ${opts.listView.collections.join(", ")}`,
          );
        }
        if (opts.editView.collections.length > 0) {
          payload.logger.info(
            `✨ Payload Shadcn UI Plugin: Edit view enabled for collections: ${opts.editView.collections.join(", ")}`,
          );
        }
      }
    };

    return config;
  };

export default shadcnPlugin;
