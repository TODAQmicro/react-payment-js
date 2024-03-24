'use client';

import React, { FunctionComponent, PropsWithChildren } from "react";
import { MicroElements, MicroOptions, loadMicroPayments } from "@todaqmicro/payment-js";

export interface ElementsContextValue {
  elements: MicroElements | null;
}

export const ElementsContext = React.createContext<ElementsContextValue | null>(
  null
);

interface ElementsProps {
  publicKey: string;
  options?: MicroOptions;
}

export const Elements: FunctionComponent<PropsWithChildren<ElementsProps>> = (({
  publicKey,
  options = { apiVersion: "main" },
  children,
}) => {
  const [ctx, setContext] = React.useState<ElementsContextValue>(() => ({
    elements: null,
  }));

  React.useEffect(() => {
    let mounted = true;

    if (!ctx.elements) {
    loadMicroPayments(publicKey, options)
      .then((engine) => {
        if (mounted) {
          setContext((ctx) => {
            if (ctx.elements) return ctx;
            return {
              elements: engine.elements(),
            };
          }); 
        }
      });
    }   

    return () => { mounted = false };
  }, [ctx])

  return (
    // @ts-ignore
    <ElementsContext.Provider value={ctx}>
      {children}
    </ElementsContext.Provider>
  );
}) as FunctionComponent<PropsWithChildren<ElementsProps>>;
