const defaultConfig = {
  plugins: {
    "@tailwindcss/postcss": {
      // Base configuration for shadcn components
      content: [
        // Include shadcn component paths in node_modules
        "./node_modules/@launchthat.apps/payload-shadcn/dist/components/**/*.{js,jsx,ts,tsx}",
        // Include PayloadCMS admin paths where your components might be used
        "./node_modules/@launchthat.apps/payload-shadcn/dist/**/*.{js,jsx,ts,tsx}",
        // Include RSC components
        "./src/app/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {},
      },
    },
  },
};

module.exports = (userConfig = {}) => {
  // Get content paths from user config or empty array
  const userContentPaths = userConfig.content || [];

  // Create merged config
  const mergedConfig = {
    plugins: {
      "@tailwindcss/postcss": {
        ...defaultConfig.plugins["@tailwindcss/postcss"],
        ...userConfig,
        // Ensure content paths are properly merged
        content: [
          ...defaultConfig.plugins["@tailwindcss/postcss"].content,
          ...userContentPaths,
        ],
        theme: {
          ...defaultConfig.plugins["@tailwindcss/postcss"].theme,
          extend: {
            ...(defaultConfig.plugins["@tailwindcss/postcss"].theme?.extend ||
              {}),
            ...(userConfig.theme?.extend || {}),
          },
        },
      },
    },
  };

  return mergedConfig;
};
