import { HTMLAttributes, useRef } from "react";
import { ScrollAnimation } from "../animation/scrollAnimation/scrollAnimation";

export function Paragraph(props: HTMLAttributes<HTMLParagraphElement>) {

    const ref = useRef<HTMLParagraphElement>(null)

    const isScrollable = (ref.current?.offsetHeight ?? 0) > (ref.current?.clientHeight ?? 0);

    return <div className="relative">
        <p
            ref={ref}
            {...props}
            className={`text-sm font-extralight ${props.className ?? ''}`} />
        <div className="absolute -bottom-12 -translate-x-1/2 left-1/2">
            <ScrollAnimation />
        </div>
    </div>
}