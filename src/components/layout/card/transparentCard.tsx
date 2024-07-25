import { ReactNode } from "react";

export interface TransparentCardProps {
    className?: string;
    children?: ReactNode;
}

export function TransparentCard({ children, className = '' }: TransparentCardProps) {

    return <article className={`border border-primary rounded-lg bg-black bg-opacity-10 backdrop-blur-sm ${className}`}>
        {children}
    </article>
}