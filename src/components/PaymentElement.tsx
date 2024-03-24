'use client';

import { FunctionComponent, useEffect, useLayoutEffect, useRef } from "react";
import { MicroElement } from "@todaqmicro/payment-js";

import { useElements } from "..";

export interface ElementProps {
  id?: string;
  className?: string;
  options?: any; // TODO(mihok): Type this properly.
  onPayment?: () => void;
}

export const PaymentElement: FunctionComponent<ElementProps> = ({ id, className, options, onPayment }) => {
  const ctx = useElements();
  const elements = ctx && 'elements' in ctx ? ctx.elements : null;
  const node = useRef<HTMLDivElement | null>(null);

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
