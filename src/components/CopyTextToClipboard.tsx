"use client"
import React, { useState, useEffect } from "react";

//Interface
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

const CopyTextToClipboard = ({ children, text, onCopied, onFailed, resetDuration = 3000 }: Props) => {
    //State
    const [isCopied, setIsCopied] = useState(false);

    //Handler
    const handleCopy = () => {
        navigator.clipboard.writeText(text).then(() => {
            onCopied?.()
            setIsCopied(true)
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

export default CopyTextToClipboard;