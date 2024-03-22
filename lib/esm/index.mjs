import React from "react";
import { ElementsContext } from "./components/Elements";
export { Elements } from "./components/Elements";
export { PaymentElement } from "./components/PaymentElement";
export const useElements = () => {
    const elementsContext = React.useContext(ElementsContext);
    return elementsContext;
};
