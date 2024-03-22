import React, { FunctionComponent, PropsWithChildren } from "react";
import { MicroElements, MicroOptions } from "@todaqmicro/payment-js";
export interface ElementsContextValue {
    elements: MicroElements | null;
}
export declare const ElementsContext: React.Context<ElementsContextValue | null>;
interface ElementsProps {
    publicKey: string;
    options: MicroOptions;
}
export declare const Elements: FunctionComponent<PropsWithChildren<ElementsProps>>;
export {};
//# sourceMappingURL=Elements.d.ts.map