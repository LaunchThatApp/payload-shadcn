# @payloadcmsdirectory/shadcn-ui

A PayloadCMS plugin that adds Shadcn UI components to your PayloadCMS admin panel.

## Features

- Adds Shadcn UI components to your PayloadCMS admin panel
- Configurable per collection
- Easy integration with PayloadCMS
- Supports all Shadcn UI components

## Installation

```bash
npm install @payloadcmsdirectory/shadcn-ui
# or
yarn add @payloadcmsdirectory/shadcn-ui
# or
pnpm add @payloadcmsdirectory/shadcn-ui
```

## Usage

### Register the plugin in your PayloadCMS config

```typescript
// payload.config.ts
import { shadcnPlugin } from "@payloadcmsdirectory/shadcn-ui";
import { buildConfig } from "payload/config";

export default buildConfig({
  plugins: [
    shadcnPlugin({
      // Enable for all collections
      enableAll: true,

      // Or enable for specific collections
      listView: {
        collections: ["posts", "categories"],
      },
    }),
  ],
  // ... rest of your config
});
```

### Using Shadcn UI components in custom components

To use Shadcn UI components in your custom components, import them from the client entrypoint:

```typescript
// Your custom component
'use client';

import { Button } from '@payloadcmsdirectory/shadcn-ui/client';

const MyComponent = () => {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
};

export default MyComponent;
```

## Adding new Shadcn UI components

The plugin is designed to work with the standard Shadcn UI components structure. If you want to add more components:

1. Use the shadcn CLI to add components to the src/components/ui directory:

```bash
cd payload-plugins/payload-shadcn
npx shadcn-ui@latest add button
```

2. The plugin will automatically add the necessary 'use client' directive and handle path aliases.

3. After adding new components, rebuild the plugin:

```bash
pnpm build
```

## Configuration Options

```typescript
interface ShadcnPluginOptions {
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
```

## Troubleshooting

If you encounter import errors with Shadcn UI components, check that:

1. All UI components have the 'use client' directive at the top
2. Path aliases (@/lib/utils, @/components/ui/button) are correctly resolved
3. The components are being properly built by SWC

Run the `add-use-client.sh` script to ensure all components have the necessary directive:

```bash
cd payload-plugins/payload-shadcn
./add-use-client.sh
```

## Using with PayloadCMS Directory CLI

You can easily add this plugin to your PayloadCMS project using the PayloadCMS Directory CLI:

```bash
# Using npx (recommended)
npx @payloadcmsdirectory/cli add @payloadcmsdirectory/shadcn-ui

# Or if you have the CLI installed globally
payloadcli add @payloadcmsdirectory/shadcn-ui
```

The CLI will automatically add the plugin to your `payloadcmsdirectory.config.js` file and install the necessary dependencies.

## License

MIT
