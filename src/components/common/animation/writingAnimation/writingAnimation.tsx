import { useEffect, useRef } from "react";
import Typed from "typed.js";

export interface WritingAnimationProps {
    text?: string[];
    className?: string;
}

export function WritingAnimation({ text = [], className = '' }: WritingAnimationProps) {

    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const typed = new Typed(ref.current, {
            strings: text,
            typeSpeed: 10,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, [text]);

    return <span ref={ref} className={className}></span>
}