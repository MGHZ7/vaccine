import { MouseEvent, useEffect, useRef } from "react";
import { constructPathOfRoundedDiv } from "./utils";

export interface AnimatedMovingBorderProps {
    className?: string;
    width?: number;
    height?: number;
}

export function AnimatedMovingBorder({ width = 200, height = 100, className = '' }: AnimatedMovingBorderProps) {

    const container = useRef<HTMLDivElement>(null);
    const path = useRef<SVGPathElement>(null);
    const wormHead = useRef<SVGCircleElement>(null);
    const svgGroup = useRef<SVGGElement>(null);
    const rectArray = useRef<SVGRectElement[]>([]);

    const padding = 8;
    const containerWidth = width + padding * 2; // Add the padding value of the two sides from the overall width
    const containerHeight = height + padding * 2; // Add the padding value of the two sides from the overall height
    const borderRadius = container.current ? parseFloat(getComputedStyle(container.current).borderRadius) : 0;
    const wormLength = width / 3;
    const rectCount = Math.floor(wormLength);

    const appendRectArray = (rectArray: SVGRectElement[], animateMotion: SVGAnimateMotionElement, wormHead: SVGCircleElement) => {
        rectArray.forEach((r, i) => {
            if (r.lastChild) r.removeChild(r.lastChild);
            const animation = animateMotion.cloneNode() as SVGAnimateMotionElement;
            r.setAttribute("x", (-wormHead.r.baseVal.value - i).toString());
            r.setAttribute("y", (padding - 13).toString());
            animation.setAttribute("begin", `0.${0.01 * i + 1}s`);
            r.append(animation);
            animation.beginElement();
        });
    }

    const appendWormHeadAnimation = (wormHead: SVGCircleElement, animateMotion: SVGAnimateMotionElement) => {
        if (wormHead.lastChild) wormHead.removeChild(wormHead.lastChild);

        wormHead.setAttribute("cx", `${0}`);
        wormHead.setAttribute("cy", `${0}`);
        wormHead.appendChild(animateMotion);
        animateMotion.beginElement();
    }

    const handleContainerMouseover = (e: MouseEvent) => {
        const pathCommands = path.current?.getAttribute('d') ?? '';
        const animationMotion = createAnimationMotionElement(pathCommands);

        appendWormHeadAnimation(wormHead.current!, animationMotion);
        appendRectArray(rectArray.current, animationMotion, wormHead.current!);
    }

    useEffect(() => {
        const pathCommands = constructPathOfRoundedDiv({ width: width, height: height, borderRadius, padding })
        path.current?.setAttribute('d', pathCommands)
        const rectArrayElements = createRectArray({
            rectCount,
            wormHeadR: wormHead.current?.r.baseVal.value ?? 0,
            wormHeadStartX: +(wormHead.current?.getAttribute('cx') ?? 0),
            wormHeadStartY: +(wormHead.current?.getAttribute('cy') ?? 0)
        })
        rectArrayElements.forEach(rect => {
            svgGroup.current?.append(rect);
        });
        rectArray.current = rectArrayElements;

        return () => {
            rectArray.current.forEach(rect => rect.remove());
        }
    })


    return <div className={`rounded-lg ${className}`} ref={container} onMouseOver={handleContainerMouseover}>
        <svg id="wormSvg" className="" viewBox={`0 0 ${containerWidth} ${containerHeight}`}>
            <path id="wormPath" d="" fill="none" stroke="none" stroke-width="4" ref={path} />
            <g className="pointer-events-none" id="svg-group" ref={svgGroup}>
                <circle
                    ref={wormHead}
                    id="wormHead"
                    cx={(width + padding) / 3}
                    cy={height + padding / 2}
                    r={padding}
                    fill="rgba(24, 219, 213, 1)"
                ></circle>
            </g>
        </svg>
    </div>
}


function createAnimationMotionElement(path: string) {
    const animateMotion = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "animateMotion"
    );
    animateMotion.setAttribute("dur", "1s");
    animateMotion.setAttribute("repeatCount", "1");
    animateMotion.setAttribute("path", path);
    animateMotion.setAttribute("rotate", "auto");
    animateMotion.setAttribute("fill", "freeze");
    animateMotion.setAttribute("keyTimes", "0; 0.15; 0.3; 0.4");

    return animateMotion;
}

function createRectArray({ rectCount, wormHeadR, wormHeadStartX, wormHeadStartY }:
    { rectCount: number, wormHeadR: number, wormHeadStartX: number, wormHeadStartY: number }) {

    const rectArray = [];
    for (let i = 0; i < rectCount; i++) {
        const opacityIndicator = 1 - i / rectCount;
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", (wormHeadStartX - 2 + wormHeadR + i).toString());
        rect.setAttribute("y", (wormHeadStartY - wormHeadR / 2).toString());
        rect.setAttribute("height", "10");
        rect.setAttribute("width", "2");
        rect.setAttribute("fill", `rgba(24, 219, 213, ${opacityIndicator})`);
        rectArray.push(rect);
    }
    return rectArray;
}