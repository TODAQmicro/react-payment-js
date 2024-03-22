import {FunctionComponent, useLayoutEffect, useRef} from "react";
import {useElements} from "..";
import {MicroElement} from "@todaqmicro/payment-js";

export interface ElementProps {
  id?: string;
  className?: string;
  options?: any; // TODO(mihok): Type this properly.
}

export const PaymentElement: FunctionComponent<ElementProps> = ({ id, className, options }) => {
  const ctx = useElements();
  const elements = ctx && 'elements' in ctx ? ctx.elements : null;
  const node = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (node.current !== null && elements) {
      let element: MicroElement | null = null;
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

  return <div id={id} className={className} ref={node} />
}
