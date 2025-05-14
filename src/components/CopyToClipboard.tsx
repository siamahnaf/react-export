"use client"
import React, { useState, useEffect } from "react";

//Interface
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

const CopyToClipboard = ({ children, data, headers, onCopied, onFailed, resetDuration = 3000 }: Props) => {
    //State
    const [isCopied, setIsCopied] = useState(false);

    //Handler
    const handleCopy = () => {
        const tableData = data.map((item: { [key: string]: any }) => {
            const keys = Object.keys(item);
            const values = keys.map((key) => item[key]);
            return values;
        });
        const tableString = headers.join("\t") + "\n" + tableData.map(row => row.join("\t")).join("\n");
        navigator.clipboard.writeText(tableString).then(() => {
            onCopied?.()
            setIsCopied(true);
        }).catch(() => {
            onFailed?.()
            setIsCopied(false)
        });
    };

    useEffect(() => {
        if (isCopied) {
            const timeout = setTimeout(() => {
                setIsCopied(false);
            }, resetDuration);
            return () => clearTimeout(timeout);
        }
    }, [isCopied, resetDuration]);

    return <React.Fragment>
        {children?.({
            onClick: handleCopy,
            isCopied
        })}
    </React.Fragment>
};

export default CopyToClipboard;