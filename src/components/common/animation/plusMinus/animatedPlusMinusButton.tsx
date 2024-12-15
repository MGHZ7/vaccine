import './styles.scss';

import { ButtonHTMLAttributes, DetailedHTMLProps, useEffect, useRef } from "react";

export interface AnimatedPlusMinusButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    isOpen: boolean;
}

export function AnimatedPlusMinusButton({ isOpen, ...props }: AnimatedPlusMinusButtonProps) {

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        isOpen ? ref.current?.classList.add("opened") : ref.current?.classList.remove("opened");
    }, [isOpen]);

    return <button {...props}>
        <div ref={ref} className="circle-plus closed">
            <div className="circle">
                <div className="horizontal"></div>
                <div className="vertical"></div>
            </div>
        </div>
        <div className="circle-plus-two closed">
            <div className="circle">
                <div className="horizontal"></div>
                <div className="vertical"></div>
            </div>
        </div>
    </button>
}