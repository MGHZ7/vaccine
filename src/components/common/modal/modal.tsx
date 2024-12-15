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
        className={`relative w-full bg-surface animate-fade-in ${size ? componentSizeClasses[size] : ""
          } ${className}`}
      >
        {hasCloseButton && (
          <button
            className={`absolute top-2 right-4 !p-0 flex items-center text-sm text-primary z-10`}
            onClick={onClose}
          >X</button>
        )}
        {children}
      </section>
    </div>,
    element ?? document.body
  );
};

const componentSizeClasses = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  "2xl": 'max-w-2xl',
  "3xl": 'max-w-3xl',
  "4xl": 'max-w-4xl',
  "5xl": 'max-w-5xl',
  "full": 'max-w-full'
}