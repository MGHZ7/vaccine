import { useScreenSize } from "@/hooks/screen/screenSize.hook";
import { ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

export interface MarqueeProps {
    children?: ReactNode;
    offsetPerFrame?: number;
    frames?: number;
}

export const Marquee = ({ children, offsetPerFrame = 1, frames = 60 }: MarqueeProps) => {

    const ref = useRef<HTMLDivElement>(null);
    const width = useScreenSize();

    const [isMounted, setIsMounted] = useState(false);

    const checkIfElementIsOutOfScreenBounds = useCallback((element: HTMLElement) => {
        const clientRectBounding = element.getBoundingClientRect();
        const xPos = clientRectBounding.x + element.clientLeft;

        return (xPos > window.innerWidth)
    }, []);

    const translateElement = useCallback((element: HTMLElement, parentWidth: number, elementOffset: number) => {
        element.style.transition = 'none'
        element.style.position = "relative"
        if (checkIfElementIsOutOfScreenBounds(element)) {
            const maxOffset = -parentWidth + elementOffset - element.clientWidth;
            elementOffset = Math.min(maxOffset, -element.offsetLeft - element.clientWidth)

            element.style.zIndex = '-10';
        } else {
            elementOffset += offsetPerFrame;
            element.style.zIndex = '0';
        }
        element.style.transform = `translateX(${elementOffset}px`;

        return elementOffset;
    }, [checkIfElementIsOutOfScreenBounds, offsetPerFrame]);

    useLayoutEffect(() => {
        const map = new Map<string, number>();

        const repeatElementsIfRequired = () => {
            if (!ref.current) return;

            const elements: HTMLElement[] = Array.from(ref.current.children) as HTMLElement[];
            const elementsOverallWidth = elements.reduce((acc, element) => {
                return acc + element.offsetWidth + 40;
            }, 0);

            if (elementsOverallWidth < window.innerWidth) {
                ref.current?.append(...elements.map(e => e.cloneNode(true)));
                repeatElementsIfRequired();
            }
        }

        const translateElements = () => {
            if (!ref.current) return;

            const elements: HTMLElement[] = Array.from(ref.current!.children) as HTMLElement[];
            const parentWidth = elements.reduce((prev, curr) => prev + curr.clientWidth + 10, 0)

            let id = 0;
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                element.id = `${id++}`;
                const newTranslateValue = translateElement(element as HTMLElement, parentWidth, map.get(element.id) ?? 0);
                map.set(element.id, newTranslateValue);
            }
        }

        repeatElementsIfRequired()
        const interval = setInterval(translateElements, 1000 / frames);

        return () => {
            clearInterval(interval);
        }
    }, [translateElement, frames, isMounted]);

    useEffect(() => {
        setIsMounted(true);
    }, [width])

    return isMounted && <div ref={ref} className={`w-full relative flex gap-10`}>
        {children}
    </div>
}