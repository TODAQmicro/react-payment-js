"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elements = exports.ElementsContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const payment_js_1 = require("@todaqmicro/payment-js");
exports.ElementsContext = react_1.default.createContext(null);
exports.Elements = (({ publicKey, options = { apiVersion: "main" }, children, }) => {
    const [ctx, setContext] = react_1.default.useState(() => ({
        elements: null,
    }));
    react_1.default.useEffect(() => {
        let mounted = true;
        if (!ctx.elements) {
            (0, payment_js_1.loadMicroPayments)(publicKey, options)
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
    (0, jsx_runtime_1.jsx)(exports.ElementsContext.Provider, { value: ctx, children: children }));
});
