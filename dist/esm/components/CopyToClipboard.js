"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
const CopyToClipboard = ({ children, data, headers, onCopied, onFailed, resetDuration = 3000 }) => {
    //State
    const [isCopied, setIsCopied] = useState(false);
    //Handler
    const handleCopy = () => {
        const tableData = data.map((item) => {
            const keys = Object.keys(item);
            const values = keys.map((key) => item[key]);
            return values;
        });
        const tableString = headers.join("\t") + "\n" + tableData.map(row => row.join("\t")).join("\n");
        navigator.clipboard.writeText(tableString).then(() => {
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
export default CopyToClipboard;
//# sourceMappingURL=CopyToClipboard.js.map