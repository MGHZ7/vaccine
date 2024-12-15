import { ReactNode, useLayoutEffect, useRef, useState } from "react";

export interface AnimatedPopupProps {
    show: boolean;
    x?: number;
    y?: number;
    className?: string;
    children?: ReactNode;
}

export function AnimatedPopup({ show, x, y, className = '', children }: AnimatedPopupProps) {

    const ref = useRef<HTMLDivElement>(null);
    const [offsetX, setOffsetX] = useState(0);
    console.log("🚀 ~ AnimatedPopup ~ offsetX:", offsetX);

    const [offsetY, setOffsetY] = useState(0);
    console.log("🚀 ~ AnimatedPopup ~ offsetY:", offsetY);


    useLayoutEffect(() => {
        if (!ref.current) return;

        new ResizeObserver(() => {
            const epsilon = 50;
            const clientRect = ref.current!.getBoundingClientRect();

            const clientWidth = Math.max(ref.current?.clientWidth ?? 300, 300);
            const clientHeight = Math.max(ref.current?.clientHeight ?? 50, 50);

            if ((x ?? 0) + clientWidth > window.innerWidth) {
                setOffsetX(window.innerWidth - x! - (clientRect.width! + epsilon))
            } else {
                setOffsetX(0)
            }

            if ((clientRect.top ?? 0) + clientHeight > window.innerHeight) {
                setOffsetY(window.innerHeight - (clientRect.bottom + epsilon))
            } else {
                setOffsetY(0);
            }
        }).observe(ref.current)
    }, [x, y])

    return <article
        ref={ref}
        className={`transition duration-500 absolute top-0 left-0 z-50 ${show ? 'opacity-100' : 'hidden opacity-0'} ${className}`}
        style={{
            ...(x && y ? { transform: `translate(${(x + offsetX)}px, ${y + offsetY}px)` } : {})
        }}>
        {children}
    </article>
}