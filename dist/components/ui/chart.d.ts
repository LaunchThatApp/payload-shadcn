import * as React from "react";
import * as RechartsPrimitive from "recharts";
declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};
export type ChartConfig = {
    [k in string]: {
        label?: React.ReactNode;
        icon?: React.ComponentType;
    } & ({
        color?: string;
        theme?: never;
    } | {
        color?: never;
        theme: Record<keyof typeof THEMES, string>;
    });
};
declare function ChartContainer({ id, className, children, config, ...props }: React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
}): import("react/jsx-runtime").JSX.Element;
declare const ChartStyle: ({ id, config }: {
    id: string;
    config: ChartConfig;
}) => import("react/jsx-runtime").JSX.Element | null;
declare const ChartTooltip: typeof RechartsPrimitive.Tooltip;
declare function ChartTooltipContent({ active, payload, className, indicator, hideLabel, hideIndicator, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey, }: React.ComponentProps<typeof RechartsPrimitive.Tooltip> & React.ComponentProps<"div"> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: "line" | "dot" | "dashed";
    nameKey?: string;
    labelKey?: string;
}): import("react/jsx-runtime").JSX.Element | null;
declare const ChartLegend: typeof RechartsPrimitive.Legend;
declare function ChartLegendContent({ className, hideIcon, payload, verticalAlign, nameKey, }: React.ComponentProps<"div"> & Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
    hideIcon?: boolean;
    nameKey?: string;
}): import("react/jsx-runtime").JSX.Element | null;
export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle, };
//# sourceMappingURL=chart.d.ts.map