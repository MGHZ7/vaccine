import { DetailedHTMLProps, HTMLAttributes, ReactNode, useRef } from "react";
import { AnimatedMovingBorder } from "../animation/animatedMovingBorder";

export interface TransparentCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    className?: string;
    children?: ReactNode;
    showLightingPoint?: boolean;
}

export function TransparentCard({ children, showLightingPoint = false, className = '', ...props }: TransparentCardProps) {

    const containerRef = useRef<HTMLDivElement>(null);

    return <article
        ref={containerRef}
        className={`relative transition-all border border-primary rounded-lg 
        bg-black bg-opacity-10 backdrop-blur-xl box-border group ${className}`}
        {...props}>
        {children}
        {showLightingPoint && <AnimatedMovingBorder
            width={containerRef.current?.offsetWidth}
            height={containerRef.current?.offsetHeight}
            className="absolute -top-1 -right-1 -bottom-1 -left-1" />}
    </article>
}