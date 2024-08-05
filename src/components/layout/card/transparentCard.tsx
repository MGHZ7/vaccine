import { ReactNode } from "react";
import { Divider } from "../divider/divider";

export interface TransparentCardProps {
    className?: string;
    children?: ReactNode;
    showLightingPoint?: boolean;
}

export function TransparentCard({ children, showLightingPoint = false, className = '' }: TransparentCardProps) {

    return <>
        <article className={`transition-all border border-primary rounded-lg bg-black bg-opacity-10 backdrop-blur-xl box-border group ${className}`}>
            {children}
            {showLightingPoint && <Divider className="transition-all absolute -bottom-0.5 left-1/4 right-1/4 w-1/2 z-10 
            group-hover:-translate-x-1/4" />}
        </article>
    </>
}