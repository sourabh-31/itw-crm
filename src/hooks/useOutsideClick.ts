import { useEffect, useRef } from "react";

import { useChartStore } from "@/store/useChartStore";

type Handler = () => void;

export function useOutsideClick(
  handler: Handler,
  listenCapturing: boolean = true
) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { resetSelectedNode } = useChartStore();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
        resetSelectedNode();
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler, listenCapturing, resetSelectedNode]);

  return ref;
}
