import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
declare function Drawer({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>): React.JSX.Element;
declare function DrawerTrigger({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Trigger>): React.JSX.Element;
declare function DrawerPortal({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Portal>): React.JSX.Element;
declare function DrawerClose({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Close>): React.JSX.Element;
declare function DrawerOverlay({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Overlay>): React.JSX.Element;
declare function DrawerContent({ className, children, ...props }: React.ComponentProps<typeof DrawerPrimitive.Content>): React.JSX.Element;
declare function DrawerHeader({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function DrawerFooter({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function DrawerTitle({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Title>): React.JSX.Element;
declare function DrawerDescription({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Description>): React.JSX.Element;
export { Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription, };
//# sourceMappingURL=drawer.d.ts.map