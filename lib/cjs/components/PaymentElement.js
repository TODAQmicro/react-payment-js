"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentElement = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const __1 = require("..");
const PaymentElement = ({ id, className, options }) => {
    const ctx = (0, __1.useElements)();
    const elements = ctx && 'elements' in ctx ? ctx.elements : null;
    const node = (0, react_1.useRef)(null);
    (0, react_1.useLayoutEffect)(() => {
        if (node.current !== null && elements) {
            let element = null;
            if (elements) {
                elements.create('payment', options)
                    .then((el) => {
                    if (el) {
                        element = el;
                        if (node.current !== null) {
                            element.mount(node.current);
                        }
                    }
                });
            }
        }
    }, [elements]);
    return (0, jsx_runtime_1.jsx)("div", { id: id, className: className, ref: node });
};
exports.PaymentElement = PaymentElement;
