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
}

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
    };

    // If plugin is disabled, return unmodified config
    if (!opts.enabled) return incomingConfig;

    // Clone the config to avoid mutating the original
    const config = {
      ...incomingConfig,
      collections: [...(incomingConfig.collections || [])],
      admin: {
        ...(incomingConfig.admin || {}),
        components: {
          ...(incomingConfig.admin?.components || {}),
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
        // const shouldUseEditView = opts.enableAll || opts.editView.collections.includes(collection.slug);

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
                    Component:
                      "@acme/payload-shadcn/components/views/ListView#ListView",
                  },
                }),
                // Add edit view override when implemented
                // ...(shouldUseEditView && {
                //   edit: {
                //     Component: "@acme/payload-shadcn/components/views/EditView#EditView",
                //   },
                // }),
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
