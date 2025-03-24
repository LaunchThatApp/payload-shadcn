import { type Config } from "payload";
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
export declare const shadcnPlugin: (options?: ShadcnPluginOptions) => (incomingConfig: Config) => Config;
export default shadcnPlugin;
//# sourceMappingURL=shadcnPlugin.d.ts.map