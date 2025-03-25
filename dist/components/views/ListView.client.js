"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { DataTable } from "../ui/data-table/data-table";
const formatDate = (dateString)=>{
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });
};
export default function ClientListView({ items, collectionSlug, collectionLabel, totalDocs, canCreate, columnState }) {
    console.log("items", items);
    console.log("columnState", columnState);
    const columns = useMemo(()=>{
        if (!columnState) return [];
        const baseColumns = [
            {
                id: "select",
                header: ({ table })=>_jsx(Checkbox, {
                        checked: table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected() && "indeterminate",
                        onCheckedChange: (value)=>table.toggleAllPageRowsSelected(!!value),
                        "aria-label": "Select all"
                    }),
                cell: ({ row })=>_jsx(Checkbox, {
                        checked: row.getIsSelected(),
                        onCheckedChange: (value)=>row.toggleSelected(!!value),
                        "aria-label": "Select row"
                    }),
                enableSorting: false,
                enableHiding: false
            }
        ];
        const payloadColumns = columnState.map((col)=>({
                accessorKey: col.accessor,
                header: ({ column })=>{
                    return _jsxs(Button, {
                        variant: "ghost",
                        onClick: ()=>column.toggleSorting(column.getIsSorted() === "asc"),
                        children: [
                            col.field?.label || col.accessor,
                            _jsx(ArrowUpDown, {
                                className: "ml-2 h-4 w-4"
                            })
                        ]
                    });
                },
                cell: ({ row })=>{
                    const value = row.getValue(col.accessor);
                    if (value === null || value === undefined) {
                        return "-";
                    }
                    if (typeof value === "boolean") {
                        return value ? "Yes" : "No";
                    }
                    if (typeof value === "object") {
                        if (col.accessor === "breadcrumbs" && Array.isArray(value)) {
                            return value.map((crumb)=>crumb.label).join(" > ");
                        }
                        return JSON.stringify(value);
                    }
                    if (col.accessor === "updatedAt" || col.accessor === "createdAt") {
                        return new Date(value).toLocaleDateString();
                    }
                    return String(value);
                }
            }));
        return [
            ...baseColumns,
            ...payloadColumns
        ];
    }, [
        columnState
    ]);
    console.log("columns", columns);
    return _jsx("div", {
        className: "p-4",
        children: _jsx(DataTable, {
            columns: columns,
            collectionLabel: collectionLabel,
            collectionSlug: collectionSlug,
            data: items || [],
            onRowClick: (row)=>{
                window.location.href = `/admin/collections/${collectionSlug}/${row.id}`;
            }
        })
    });
}

//# sourceMappingURL=ListView.client.js.map