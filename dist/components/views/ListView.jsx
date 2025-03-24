"use server";
import { Gutter } from "@payloadcms/ui";
import ClientListView from "./ListView.client";
export async function ListView(props) {
    console.log("props", props.collectionConfig.labels.singular);
    // Extract only serializable data from the props
    const serializedData = {
        // Data items
        items: props.data?.docs || [],
        // Collection info
        collectionSlug: props.collectionSlug,
        collectionLabel: String(props.collection?.labels?.plural ||
            props.collectionConfig.labels.singular ||
            ""),
        // Pagination info
        totalDocs: props.data?.totalDocs || 0,
        // Permissions
        canCreate: props.hasCreatePermission || false,
        columnState: props.columnState,
    };
    // Log on server side for debugging if needed
    console.log("Server component processing data for: ", serializedData.collectionLabel);
    return (<div>
      <Gutter>
        {/* Pass only serializable data to the client component */}
        <ClientListView {...serializedData}/>
        {/* <PayloadAdminLayout {...serializedData} /> */}
      </Gutter>
    </div>);
}
//# sourceMappingURL=ListView.jsx.map