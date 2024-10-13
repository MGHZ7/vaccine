import { DetailedHTMLProps, HTMLAttributes, ReactNode, useRef } from "react";
import { AnimatedMovingBorder, AnimatedMovingBorderRef } from "../animation/animatedMovingBorder";
import { debounce } from "chart.js/helpers";
import { throttle } from "@/libs/performance";

export interface TransparentCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    className?: string;
    children?: ReactNode;
    showLightingPoint?: boolean;
}

export function TransparentCard({ children, showLightingPoint = false, className = '', ...props }: TransparentCardProps) {

    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<AnimatedMovingBorderRef>(null);

    return <article
        ref={containerRef}
        className={`relative transition-all border border-primary rounded-lg 
        bg-black bg-opacity-10 backdrop-blur-xl box-border group ${className}`}
        onMouseEnter={animationRef.current ? throttle((animationRef.current?.run), 2000) : undefined}
        {...props}>
        {showLightingPoint && <AnimatedMovingBorder
            ref={animationRef}
            width={containerRef.current?.offsetWidth}
            height={containerRef.current?.offsetHeight}
            className="absolute -top-1 -right-1 -bottom-3 -left-1" />}
        {children}
    </article>
}