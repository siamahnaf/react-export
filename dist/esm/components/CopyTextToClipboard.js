"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
const CopyTextToClipboard = ({ children, text, onCopied, onFailed, resetDuration = 3000 }) => {
    //State
    const [isCopied, setIsCopied] = useState(false);
    //Handler
    const handleCopy = () => {
        navigator.clipboard.writeText(text).then(() => {
            onCopied === null || onCopied === void 0 ? void 0 : onCopied();
            setIsCopied(true);
        }).catch(() => {
            onFailed === null || onFailed === void 0 ? void 0 : onFailed();
            setIsCopied(false);
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
    return _jsx(React.Fragment, { children: children === null || children === void 0 ? void 0 : children({
            onClick: handleCopy,
            isCopied
        }) });
};
export default CopyTextToClipboard;
//# sourceMappingURL=CopyTextToClipboard.js.map