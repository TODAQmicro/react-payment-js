import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { loadMicroPayments } from "@todaqmicro/payment-js";
export const ElementsContext = React.createContext(null);
export const Elements = (({ publicKey, options = { apiVersion: "main" }, children, }) => {
    const [ctx, setContext] = React.useState(() => ({
        elements: null,
    }));
    React.useEffect(() => {
        let mounted = true;
        if (!ctx.elements) {
            loadMicroPayments(publicKey, options)
                .then((engine) => {
                if (mounted) {
                    setContext((ctx) => {
                        if (ctx.elements)
                            return ctx;
                        return {
                            elements: engine.elements(),
                        };
                    });
                }
            });
        }
        return () => { mounted = false; };
    }, [ctx]);
    return (
    // @ts-ignore
    _jsx(ElementsContext.Provider, { value: ctx, children: children }));
});
