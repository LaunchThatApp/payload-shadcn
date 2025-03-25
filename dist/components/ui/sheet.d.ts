import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
declare function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>): import("react/jsx-runtime").JSX.Element;
declare function SheetTrigger({ ...props }: React.ComponentProps<typeof SheetPrimitive.Trigger>): import("react/jsx-runtime").JSX.Element;
declare function SheetClose({ ...props }: React.ComponentProps<typeof SheetPrimitive.Close>): import("react/jsx-runtime").JSX.Element;
declare function SheetContent({ className, children, side, ...props }: React.ComponentProps<typeof SheetPrimitive.Content> & {
    side?: "top" | "right" | "bottom" | "left";
}): import("react/jsx-runtime").JSX.Element;
declare function SheetHeader({ className, ...props }: React.ComponentProps<"div">): import("react/jsx-runtime").JSX.Element;
declare function SheetFooter({ className, ...props }: React.ComponentProps<"div">): import("react/jsx-runtime").JSX.Element;
declare function SheetTitle({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Title>): import("react/jsx-runtime").JSX.Element;
declare function SheetDescription({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Description>): import("react/jsx-runtime").JSX.Element;
export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, };
//# sourceMappingURL=sheet.d.ts.map