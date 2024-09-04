import { createPortal } from "react-dom";
import { ReactElement, useCallback, useEffect, useRef, useState } from "react";

export interface ModalProps {
  className?: string;
  show?: boolean;
  hasCloseButton?: boolean;
  onClose?: () => void;
  children?: ReactElement;
  size?:
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "full";
  bgClassname?: string;
  containerElementId?: string;
  disableCloseOnOutsideCLick?: boolean;
}

export const Modal = ({
  show,
  hasCloseButton,
  onClose,
  children,
  size,
  containerElementId,
  className,
  bgClassname,
  disableCloseOnOutsideCLick,
}: ModalProps) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  const ref = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(
    (event: React.MouseEvent) => {
      if (
        ref.current?.isEqualNode(event.currentTarget) &&
        !disableCloseOnOutsideCLick
      ) {
        onClose?.();
      }
    },
    [ref, onClose, disableCloseOnOutsideCLick]
  );

  useEffect(() => {
    const modalContainerElement = containerElementId
      ? document.getElementById(containerElementId)
      : document.body;
    setElement(modalContainerElement);
  }, [containerElementId]);

  if (!show || !element) return null;

  return createPortal(
    <div
      ref={ref}
      onClick={handleClose}
      className={`fixed w-screen h-screen top-0 flex justify-center items-center z-30 ${bgClassname ?? ""
        }`}
    >
      <section
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full bg-surface ${size ? `max-w-${size}` : ""
          } ${className}`}
      >
        {hasCloseButton && (
          <button
            className={`absolute top-1 right-1 !p-0 flex items-center text-xs`}
            onClick={onClose}
          >X</button>
        )}
        {children}
      </section>
    </div>,
    element ?? document.body
  );
};