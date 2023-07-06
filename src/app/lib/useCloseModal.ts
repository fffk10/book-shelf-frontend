import { useRef } from "react";

// elementRefの外側の領域をタップしたときに、closeActionを実行
export const useCloseModal = (closeAction: () => void) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const handleCloseModal = (element: HTMLDivElement) => {
    if (elementRef.current && !elementRef.current.contains(element)) {
      closeAction();
    }
  }

  return { elementRef, handleCloseModal };
}