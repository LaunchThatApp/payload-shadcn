import * as React from "react";
declare function Breadcrumb({ ...props }: React.ComponentProps<"nav">): React.JSX.Element;
declare function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">): React.JSX.Element;
declare function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">): React.JSX.Element;
declare function BreadcrumbLink({ asChild, className, ...props }: React.ComponentProps<"a"> & {
    asChild?: boolean;
}): React.JSX.Element;
declare function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">): React.JSX.Element;
declare function BreadcrumbSeparator({ children, className, ...props }: React.ComponentProps<"li">): React.JSX.Element;
declare function BreadcrumbEllipsis({ className, ...props }: React.ComponentProps<"span">): React.JSX.Element;
export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis, };
//# sourceMappingURL=breadcrumb.d.ts.map