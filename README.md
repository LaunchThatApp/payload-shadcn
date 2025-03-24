# PayloadCMS Shadcn UI Plugin

A plugin for PayloadCMS that replaces default admin UI components with [shadcn/ui](https://ui.shadcn.com/) components.

## Installation

```bash
pnpm install @launchthat.apps/payload-shadcn
```

## Usage

Add the plugin to your PayloadCMS configuration:

```typescript
import { shadcnPlugin } from "@launchthat.apps/payload-shadcn";
import { buildConfig } from "payload";

export default buildConfig({
  plugins: [
    shadcnPlugin({
      // options
    }),
  ],
});
```

## Configuration Options

The plugin can be configured with the following options:

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
}
```

### Examples

#### Enable All Components

To enable shadcn components for all collections:

```typescript
shadcnPlugin({
  enableAll: true,
});
```

#### Enable for Specific Collections

To enable shadcn components only for specific collections:

```typescript
shadcnPlugin({
  listView: {
    collections: ["posts", "users", "categories"],
  },
});
```

#### Disable the Plugin

To disable the plugin entirely:

```typescript
shadcnPlugin({
  enabled: false,
});
```

## Features

Currently supported features:

- List View: A modern data table with sorting, filtering, and pagination
  - Supports all collection types
  - Maintains PayloadCMS field configurations
  - Enhanced UI/UX with shadcn components

Coming soon:

- Edit View
- Custom field components
- Additional admin UI components

## Development

To contribute to this plugin:

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Build the plugin: `pnpm build`
4. Link the plugin to your PayloadCMS project for testing

## License

MIT
