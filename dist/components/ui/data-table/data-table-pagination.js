"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../button";
export function DataTablePagination({ table }) {
    return _jsxs("div", {
        className: "flex items-center justify-between px-2",
        children: [
            _jsxs("div", {
                className: "text-muted-foreground flex-1 text-sm",
                children: [
                    table.getFilteredRowModel().rows.length,
                    " row(s) total."
                ]
            }),
            _jsxs("div", {
                className: "flex items-center space-x-6 lg:space-x-8",
                children: [
                    _jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            _jsx("p", {
                                className: "text-sm font-medium",
                                children: "Rows per page"
                            }),
                            _jsx("select", {
                                value: table.getState().pagination.pageSize,
                                onChange: (e)=>{
                                    table.setPageSize(Number(e.target.value));
                                },
                                className: "border-input focus:ring-primary h-8 w-[70px] rounded-md border bg-transparent px-2 py-1 text-sm focus:ring-1 focus:outline-none",
                                children: [
                                    10,
                                    20,
                                    30,
                                    40,
                                    50
                                ].map((pageSize)=>_jsx("option", {
                                        value: pageSize,
                                        children: pageSize
                                    }, pageSize))
                            })
                        ]
                    }),
                    _jsxs("div", {
                        className: "flex w-[100px] items-center justify-center text-sm font-medium",
                        children: [
                            "Page ",
                            table.getState().pagination.pageIndex + 1,
                            " of",
                            " ",
                            table.getPageCount()
                        ]
                    }),
                    _jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            _jsxs(Button, {
                                variant: "outline",
                                className: "h-8 w-8 p-0",
                                onClick: ()=>table.previousPage(),
                                disabled: !table.getCanPreviousPage(),
                                children: [
                                    _jsx("span", {
                                        className: "sr-only",
                                        children: "Go to previous page"
                                    }),
                                    _jsx(ChevronLeft, {
                                        className: "h-4 w-4"
                                    })
                                ]
                            }),
                            _jsxs(Button, {
                                variant: "outline",
                                className: "h-8 w-8 p-0",
                                onClick: ()=>table.nextPage(),
                                disabled: !table.getCanNextPage(),
                                children: [
                                    _jsx("span", {
                                        className: "sr-only",
                                        children: "Go to next page"
                                    }),
                                    _jsx(ChevronRight, {
                                        className: "h-4 w-4"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

//# sourceMappingURL=data-table-pagination.js.map