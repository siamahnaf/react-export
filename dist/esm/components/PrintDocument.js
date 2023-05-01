import { jsx as _jsx } from "react/jsx-runtime";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
const PrintDocument = (props) => {
    const { children, data, headers, title, theme = "grid", styles, headerStyles, footerStyles, foot, margin } = props;
    const onPrint = () => {
        const doc = new jsPDF();
        const body = data.map((item) => {
            const keys = Object.keys(item);
            const values = keys.map((key) => item[key]);
            return values;
        });
        if (title) {
            const titleWidth = doc.getTextDimensions(title).w;
            const pageWidth = doc.internal.pageSize.getWidth();
            const x = (pageWidth - titleWidth) / 2;
            doc.text(title, x, 20);
        }
        if (foot) {
            autoTable(doc, {
                theme: theme,
                head: [headers],
                headStyles: headerStyles,
                margin: Object.assign(Object.assign({}, margin), { top: title ? ((margin === null || margin === void 0 ? void 0 : margin.top) || 30) : margin === null || margin === void 0 ? void 0 : margin.top }),
                styles: styles,
                footStyles: footerStyles,
                body: body,
                foot: [foot]
            });
        }
        else {
            autoTable(doc, {
                theme: theme,
                head: [headers],
                headStyles: headerStyles,
                margin: Object.assign(Object.assign({}, margin), { top: title ? ((margin === null || margin === void 0 ? void 0 : margin.top) || 30) : margin === null || margin === void 0 ? void 0 : margin.top }),
                styles: styles,
                footStyles: footerStyles,
                body: body
            });
        }
        const pdfBlob = doc.output('blob');
        const pdfUrl = URL.createObjectURL(pdfBlob);
        const pdfWindow = window.open(pdfUrl, '_blank');
        if (!pdfWindow) {
            alert('Please enable popups for this website');
        }
        else {
            pdfWindow.addEventListener('load', () => {
                pdfWindow.print();
                URL.revokeObjectURL(pdfUrl);
            });
        }
    };
    return _jsx("span", Object.assign({ onClick: onPrint }, { children: children }));
};
export default PrintDocument;
//# sourceMappingURL=PrintDocument.js.map