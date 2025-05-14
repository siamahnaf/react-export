import React from "react";
interface ChildrenProps {
    onClick: () => void;
    isCopied: boolean;
}
interface Props {
    children: (props: ChildrenProps) => React.ReactNode;
    data: Array<any>;
    headers: string[];
    onCopied?: () => void;
    onFailed?: () => void;
    resetDuration?: number;
}
declare const CopyToClipboard: ({ children, data, headers, onCopied, onFailed, resetDuration }: Props) => import("react/jsx-runtime").JSX.Element;
export default CopyToClipboard;
