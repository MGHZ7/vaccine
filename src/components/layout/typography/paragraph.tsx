import { HTMLAttributes, useRef } from "react";
import { ScrollAnimation } from "../animation/scrollAnimation/scrollAnimation";

export function Paragraph(props: HTMLAttributes<HTMLParagraphElement>) {

    const ref = useRef<HTMLParagraphElement>(null)

    const isScrollable = () => {
        if (!ref.current) return false;

        // Compare the height to see if the element has scrollable content
        const hasScrollableContent = (ref.current?.scrollHeight ?? 0) > (ref.current?.clientHeight ?? 0);

        // It's not enough because the element's `overflow-y` style can be set as
        // * `hidden`
        // * `hidden !important`
        // In those cases, the scrollbar isn't shown
        const overflowYStyle = window.getComputedStyle(ref.current).overflowY;
        const isOverflowHidden = overflowYStyle.indexOf('hidden') !== -1;

        return hasScrollableContent && !isOverflowHidden;
    };

    return <div className="relative">
        <p
            ref={ref}
            {...props}
            className={`text-sm font-extralight ${props.className ?? ''}`} />
        {isScrollable() && <div className="absolute -bottom-12 -translate-x-1/2 left-1/2">
            <ScrollAnimation />
        </div>}
    </div>
}