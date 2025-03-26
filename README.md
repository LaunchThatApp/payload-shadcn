# PayloadCMS Shadcn UI Plugin

![PayloadCMS Shadcn UI Plugin](https://raw.githubusercontent.com/payloadcmsdirectory/shadcn-ui/main/public/images/posts-shadcn.png)
![PayloadCMS Shadcn UI Plugin](https://raw.githubusercontent.com/payloadcmsdirectory/shadcn-ui/main/public/images/categories-shadcn.png)

A plugin that integrates Shadcn UI components with PayloadCMS, providing a modern and accessible UI toolkit for your admin panel.

## Features

- 🎨 Modern UI components based on Radix UI
- 🌗 Dark mode support
- ♿ Accessible components
- 🎯 Type-safe with TypeScript
- 📱 Responsive design
- 🔧 Highly customizable

## Installation

```bash
npm install @payloadcmsdirectory/shadcn-ui
# or
yarn add @payloadcmsdirectory/shadcn-ui
# or
pnpm add @payloadcmsdirectory/shadcn-ui
```

## Usage

Add the plugin to your Payload config:

```typescript
import shadcnPlugin from "@payloadcmsdirectory/shadcn-ui";
import { buildConfig } from "payload/config";

export default buildConfig({
  plugins: [
    shadcnPlugin({
      // Plugin options
      enableAll: true, // Enable all components
    }),
  ],
});
```

## Components

The plugin includes all the components from Shadcn UI, pre-configured for use with PayloadCMS:

- Accordion
- Alert Dialog
- Avatar
- Button
- Calendar
- Card
- Checkbox
- Collapsible
- Command
- Context Menu
- Dialog
- Dropdown Menu
- Form
- Hover Card
- Input
- Label
- Menubar
- Navigation Menu
- Popover
- Progress
- Radio Group
- ScrollArea
- Select
- Separator
- Sheet
- Slider
- Switch
- Table
- Tabs
- Textarea
- Toast
- Toggle
- Tooltip

## Configuration

You can customize which components to enable and their default styles:

```typescript
shadcnPlugin({
  // Enable specific components
  components: {
    button: true,
    input: true,
    select: true,
    // ...
  },

  // Customize theme
  theme: {
    extend: {
      colors: {
        // Your custom colors
      },
    },
  },
});
```

## Contributing

Please read our [Contributing Guide](CONTRIBUTING.md) before submitting a Pull Request to the project.

## Support

- [Documentation](https://github.com/payloadcmsdirectory/shadcn-ui#readme)
- [Issues](https://github.com/payloadcmsdirectory/shadcn-ui/issues)
- [Discussions](https://github.com/payloadcmsdirectory/shadcn-ui/discussions)

## License

MIT © [PayloadCMS Directory](https://payloadcms.directory)
