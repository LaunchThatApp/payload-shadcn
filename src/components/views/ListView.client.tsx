"use client";

import { useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Column, LabelFunction, ListViewServerProps } from "payload";

import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { DataTable } from "../ui/data-table/data-table";

// Define a type that only includes serializable data
// type PayloadAdminLayoutProps = {
//   // Only include serializable fields from the original props
//   items: any[];
//   collectionSlug?: string;
//   collectionLabel?: string;
//   totalDocs?: number;
//   canCreate?: boolean;
// };

// Simple date formatter function
const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

type Document = {
  id: string;
  [key: string]: any;
};

interface PayloadColumn {
  accessor: string;
  active: boolean;
  field?: {
    name: string;
    label?: string;
  };
}

// Client component that only receives serializable data
export default function ClientListView({
  items,
  collectionSlug,
  collectionLabel,
  totalDocs,
  canCreate,
  columnState,
}: {
  items: any;
  collectionSlug: string;
  collectionLabel: string;
  totalDocs: any;
  canCreate: boolean;
  columnState: Column[];
}) {
  console.log("items", items);

  console.log("columnState", columnState);
  // This function is defined in the client component, not passed from server
  // Transform PayloadCMS columns into shadcn table columns
  const columns = useMemo<ColumnDef<Document>[]>(() => {
    if (!columnState) return [];

    const baseColumns: ColumnDef<Document>[] = [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
    ];

    // Transform PayloadCMS columns into shadcn table columns
    const payloadColumns: ColumnDef<Document>[] = (
      columnState as PayloadColumn[]
    ).map((col) => ({
      accessorKey: col.accessor,
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {col.field?.label || col.accessor}
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const value = row.getValue(col.accessor);

        // Handle different value types
        if (value === null || value === undefined) {
          return "-";
        }

        if (typeof value === "boolean") {
          return value ? "Yes" : "No";
        }

        if (typeof value === "object") {
          if (col.accessor === "breadcrumbs" && Array.isArray(value)) {
            return value
              .map((crumb: { label: string }) => crumb.label)
              .join(" > ");
          }
          return JSON.stringify(value);
        }

        // Format dates
        if (col.accessor === "updatedAt" || col.accessor === "createdAt") {
          return new Date(value as string).toLocaleDateString();
        }

        return String(value);
      },
    }));

    return [...baseColumns, ...payloadColumns];
  }, [columnState]);
  console.log("columns", columns);

  return (
    <div className="p-4">
      <DataTable
        columns={columns}
        collectionLabel={collectionLabel}
        collectionSlug={collectionSlug}
        data={items || []}
        onRowClick={(row) => {
          window.location.href = `/admin/collections/${collectionSlug}/${row.id}`;
        }}
      />
    </div>
  );
}
