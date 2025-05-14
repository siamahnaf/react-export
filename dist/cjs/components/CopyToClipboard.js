"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const CopyToClipboard = ({ children, data, headers, onCopied, onFailed, resetDuration = 3000 }) => {
    //State
    const [isCopied, setIsCopied] = (0, react_1.useState)(false);
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
    (0, react_1.useEffect)(() => {
        if (isCopied) {
            const timeout = setTimeout(() => {
                setIsCopied(false);
            }, resetDuration);
            return () => clearTimeout(timeout);
        }
    }, [isCopied, resetDuration]);
    return (0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: children === null || children === void 0 ? void 0 : children({
            onClick: handleCopy,
            isCopied
        }) });
};
exports.default = CopyToClipboard;
//# sourceMappingURL=CopyToClipboard.js.map