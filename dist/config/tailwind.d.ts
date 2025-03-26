/**
 * Helper function to get content paths for shadcn components in Tailwind config
 */
export declare const getShadcnContent: () => string[];
/**
 * Helper function to extend the Tailwind theme with shadcn variables and configurations
 */
export declare const getShadcnTheme: () => Record<string, unknown>;
/**
 * Default configuration that can be spread into a tailwind config
 */
declare const defaultConfig: {
    content: string[];
    theme: {
        extend: Record<string, unknown>;
    };
};
export default defaultConfig;
//# sourceMappingURL=tailwind.d.ts.map