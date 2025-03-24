import * as React from "react";
import { Button } from "@/components/ui/button";
declare function Pagination({ className, ...props }: React.ComponentProps<"nav">): React.JSX.Element;
declare function PaginationContent({ className, ...props }: React.ComponentProps<"ul">): React.JSX.Element;
declare function PaginationItem({ ...props }: React.ComponentProps<"li">): React.JSX.Element;
type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> & React.ComponentProps<"a">;
declare function PaginationLink({ className, isActive, size, ...props }: PaginationLinkProps): React.JSX.Element;
declare function PaginationPrevious({ className, ...props }: React.ComponentProps<typeof PaginationLink>): React.JSX.Element;
declare function PaginationNext({ className, ...props }: React.ComponentProps<typeof PaginationLink>): React.JSX.Element;
declare function PaginationEllipsis({ className, ...props }: React.ComponentProps<"span">): React.JSX.Element;
export { Pagination, PaginationContent, PaginationLink, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis, };
//# sourceMappingURL=pagination.d.ts.map