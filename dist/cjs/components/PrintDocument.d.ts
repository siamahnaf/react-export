import React from "react";
import { Color, CellWidthType, RowInput } from "jspdf-autotable";
interface ChildrenProps {
    onClick: () => void;
}
interface StylesDefs {
    font?: "helvetica" | "times" | "courier";
    fontStyle?: "normal" | "bold" | "italic" | "italic";
    overflow?: "linebreak" | "ellipsize" | "visible" | "hidden";
    fillColor?: Color | undefined;
    textColor?: Color;
    cellWidth?: CellWidthType;
    minCellWidth?: number;
    minCellHeight?: number;
    halign?: "left" | "center" | "right";
    valign?: "top" | "middle" | "bottom";
    fontSize?: number;
    cellPadding?: number;
    lineColor?: Color;
    lineWidth?: number;
}
interface Spacing {
    top?: number;
    right?: number;
    left?: number;
    bottom?: number;
}
interface Props {
    children: (props: ChildrenProps) => React.ReactNode;
    data: Array<any>;
    headers: string[];
    foot?: RowInput;
    title?: string;
    theme?: "striped" | "grid" | "plain";
    styles?: StylesDefs;
    headerStyles?: StylesDefs;
    footerStyles?: StylesDefs;
    margin?: Spacing;
    orientation?: "landscape" | "portrait" | "l" | "p";
}
declare const PrintDocument: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default PrintDocument;
