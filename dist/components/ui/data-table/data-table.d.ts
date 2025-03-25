import { ColumnDef } from "@tanstack/react-table";
interface DataTableProps<TData, TValue> {
    collectionLabel: string;
    collectionSlug: string;
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    onRowClick?: (row: TData) => void;
}
export declare function DataTable<TData, TValue>({ collectionLabel, collectionSlug, columns, data, onRowClick, }: DataTableProps<TData, TValue>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=data-table.d.ts.map