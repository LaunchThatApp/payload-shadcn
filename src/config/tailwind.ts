/**
 * Helper function to get content paths for shadcn components in Tailwind config
 */
export const getShadcnContent = (): string[] => [
  // shadcn components
  "./node_modules/@launchthat.apps/payload-shadcn/dist/components/**/*.{js,jsx,ts,tsx}",
  // PayloadCMS admin customizations
  "./node_modules/@launchthat.apps/payload-shadcn/dist/**/*.{js,jsx,ts,tsx}",
];

/**
 * Helper function to extend the Tailwind theme with shadcn variables and configurations
 */
export const getShadcnTheme = (): Record<string, unknown> => ({
  // Core shadcn theme extensions would go here
  // This is just a placeholder - you'd add your actual theme extensions
});

/**
 * Default configuration that can be spread into a tailwind config
 */
const defaultConfig = {
  content: getShadcnContent(),
  theme: {
    extend: getShadcnTheme(),
  },
};

export default defaultConfig;
