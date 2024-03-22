"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useElements = exports.PaymentElement = exports.Elements = void 0;
const react_1 = __importDefault(require("react"));
const Elements_1 = require("./components/Elements");
var Elements_2 = require("./components/Elements");
Object.defineProperty(exports, "Elements", { enumerable: true, get: function () { return Elements_2.Elements; } });
var PaymentElement_1 = require("./components/PaymentElement");
Object.defineProperty(exports, "PaymentElement", { enumerable: true, get: function () { return PaymentElement_1.PaymentElement; } });
const useElements = () => {
    const elementsContext = react_1.default.useContext(Elements_1.ElementsContext);
    return elementsContext;
};
exports.useElements = useElements;
