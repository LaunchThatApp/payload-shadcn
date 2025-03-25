"use server";
import { jsx as _jsx } from "react/jsx-runtime";
import { Gutter } from "@payloadcms/ui";
import ClientListView from "./ListView.client";
export async function ListView(props) {
    console.log("props", props.collectionConfig.labels.singular);
    const serializedData = {
        items: props.data?.docs || [],
        collectionSlug: props.collectionSlug,
        collectionLabel: String(props.collection?.labels?.plural || props.collectionConfig.labels.singular || ""),
        totalDocs: props.data?.totalDocs || 0,
        canCreate: props.hasCreatePermission || false,
        columnState: props.columnState
    };
    console.log("Server component processing data for: ", serializedData.collectionLabel);
    return _jsx("div", {
        children: _jsx(Gutter, {
            children: _jsx(ClientListView, {
                ...serializedData
            })
        })
    });
}

//# sourceMappingURL=ListView.js.map