'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useElements } from "..";
export const PaymentElement = ({ id, className, options, onPayment }) => {
    const ctx = useElements();
    const elements = ctx && 'elements' in ctx ? ctx.elements : null;
    const node = useRef(null);
    useEffect(() => {
        let mounted = true;
        if (mounted) {
            document.addEventListener('purchase', () => {
                // TODO(mihok): Add in validation logic
                onPayment && onPayment();
            });
        }
        return () => { mounted = false; };
    }, []);
    useLayoutEffect(() => {
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
    return _jsx("div", { id: id, className: className, ref: node });
};
