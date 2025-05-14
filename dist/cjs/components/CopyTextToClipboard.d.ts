import React from "react";
interface ChildrenProps {
    onClick: () => void;
    isCopied: boolean;
}
interface Props {
    children: (props: ChildrenProps) => React.ReactNode;
    text: string;
    onCopied?: () => void;
    onFailed?: () => void;
    resetDuration?: number;
}
declare const CopyTextToClipboard: ({ children, text, onCopied, onFailed, resetDuration }: Props) => import("react/jsx-runtime").JSX.Element;
export default CopyTextToClipboard;
