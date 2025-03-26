/**
 * Returns an array of content paths for Tailwind to scan for shadcn components
 *
 * @returns Array of glob patterns for shadcn components
 */
export function getShadcnContent() {
  return [
    // shadcn components
    "./node_modules/@launchthat.apps/payload-shadcn/dist/components/**/*.{js,jsx,ts,tsx}",
    // PayloadCMS admin customizations
    "./node_modules/@launchthat.apps/payload-shadcn/dist/**/*.{js,jsx,ts,tsx}",
  ];
}

export default getShadcnContent;
