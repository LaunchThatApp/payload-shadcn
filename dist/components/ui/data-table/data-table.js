"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useRouter } from "next/navigation";
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";
import { Button } from "../button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "../dropdown-menu";
import { Input } from "../input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../table";
export function DataTable({ collectionLabel, collectionSlug, columns, data, onRowClick }) {
    const router = useRouter();
    const [sorting, setSorting] = React.useState([]);
    const [columnFilters, setColumnFilters] = React.useState([]);
    const [columnVisibility, setColumnVisibility] = React.useState({});
    const [rowSelection, setRowSelection] = React.useState({});
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnFiltersChange: setColumnFilters,
        onSortingChange: setSorting,
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection
        }
    });
    return _jsxs("div", {
        className: "w-full",
        children: [
            _jsxs("div", {
                className: "flex items-center justify-between py-4",
                children: [
                    _jsx(Input, {
                        placeholder: "Filter...",
                        value: table.getColumn("title")?.getFilterValue() ?? "",
                        onChange: (event)=>table.getColumn("title")?.setFilterValue(event.target.value),
                        className: "max-w-sm"
                    }),
                    _jsxs("div", {
                        children: [
                            _jsxs(Button, {
                                variant: "destructive",
                                onClick: ()=>router.push(`/admin/collections/${collectionSlug}/create`),
                                children: [
                                    "Add New ",
                                    collectionLabel
                                ]
                            }),
                            _jsxs(DropdownMenu, {
                                children: [
                                    _jsx(DropdownMenuTrigger, {
                                        asChild: true,
                                        children: _jsxs(Button, {
                                            variant: "outline",
                                            className: "ml-auto",
                                            children: [
                                                "Columns ",
                                                _jsx(ChevronDown, {
                                                    className: "ml-2 h-4 w-4"
                                                })
                                            ]
                                        })
                                    }),
                                    _jsx(DropdownMenuContent, {
                                        align: "end",
                                        children: table.getAllColumns().filter((column)=>column.getCanHide()).map((column)=>{
                                            return _jsx(DropdownMenuCheckboxItem, {
                                                className: "capitalize",
                                                checked: column.getIsVisible(),
                                                onCheckedChange: (value)=>column.toggleVisibility(!!value),
                                                children: column.id
                                            }, column.id);
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            _jsx("div", {
                className: "rounded-md border",
                children: _jsxs(Table, {
                    children: [
                        _jsx(TableHeader, {
                            children: table.getHeaderGroups().map((headerGroup)=>_jsx(TableRow, {
                                    children: headerGroup.headers.map((header)=>_jsx(TableHead, {
                                            children: header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())
                                        }, header.id))
                                }, headerGroup.id))
                        }),
                        _jsx(TableBody, {
                            children: table.getRowModel().rows?.length ? table.getRowModel().rows.map((row)=>_jsx(TableRow, {
                                    "data-state": row.getIsSelected() && "selected",
                                    onClick: ()=>onRowClick?.(row.original),
                                    className: onRowClick ? "cursor-pointer" : "",
                                    children: row.getVisibleCells().map((cell)=>_jsx(TableCell, {
                                            children: flexRender(cell.column.columnDef.cell, cell.getContext())
                                        }, cell.id))
                                }, row.id)) : _jsx(TableRow, {
                                children: _jsx(TableCell, {
                                    colSpan: columns.length,
                                    className: "h-24 text-center",
                                    children: "No results."
                                })
                            })
                        })
                    ]
                })
            }),
            _jsxs("div", {
                className: "flex items-center justify-end space-x-2 py-4",
                children: [
                    _jsxs("div", {
                        className: "flex-1 text-sm text-muted-foreground",
                        children: [
                            table.getFilteredSelectedRowModel().rows.length,
                            " of",
                            " ",
                            table.getFilteredRowModel().rows.length,
                            " row(s) selected."
                        ]
                    }),
                    _jsxs("div", {
                        className: "space-x-2",
                        children: [
                            _jsx(Button, {
                                variant: "outline",
                                size: "sm",
                                onClick: ()=>table.previousPage(),
                                disabled: !table.getCanPreviousPage(),
                                children: "Previous"
                            }),
                            _jsx(Button, {
                                variant: "outline",
                                size: "sm",
                                onClick: ()=>table.nextPage(),
                                disabled: !table.getCanNextPage(),
                                children: "Next"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

//# sourceMappingURL=data-table.js.map