export const getShadcnContent = ()=>[
        "./node_modules/@launchthat.apps/payload-shadcn/dist/components/**/*.{js,jsx,ts,tsx}",
        "./node_modules/@launchthat.apps/payload-shadcn/dist/**/*.{js,jsx,ts,tsx}"
    ];
export const getShadcnTheme = ()=>({});
const defaultConfig = {
    content: getShadcnContent(),
    theme: {
        extend: getShadcnTheme()
    }
};
export default defaultConfig;

//# sourceMappingURL=tailwind.js.map