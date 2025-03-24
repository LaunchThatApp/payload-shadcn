import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
declare function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>): React.JSX.Element;
declare function SheetTrigger({ ...props }: React.ComponentProps<typeof SheetPrimitive.Trigger>): React.JSX.Element;
declare function SheetClose({ ...props }: React.ComponentProps<typeof SheetPrimitive.Close>): React.JSX.Element;
declare function SheetContent({ className, children, side, ...props }: React.ComponentProps<typeof SheetPrimitive.Content> & {
    side?: "top" | "right" | "bottom" | "left";
}): React.JSX.Element;
declare function SheetHeader({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function SheetFooter({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function SheetTitle({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Title>): React.JSX.Element;
declare function SheetDescription({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Description>): React.JSX.Element;
export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, };
//# sourceMappingURL=sheet.d.ts.map