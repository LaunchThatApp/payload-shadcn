import { ListViewServerProps, ServerProps } from "payload";
type Props = ListViewServerProps & ServerProps & {
    collection?: {
        labels?: {
            plural?: string;
        };
    };
};
export declare function ListView(props: Props): Promise<import("react/jsx-runtime").JSX.Element>;
export {};
//# sourceMappingURL=ListView.d.ts.map