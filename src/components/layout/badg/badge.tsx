import { ReactNode } from "react";

export interface BadgeProps {
    className?: string;
    children?: ReactNode;
}

export function Badge({ children, className = '' }: BadgeProps) {
    return <p className={`py-0.5 px-1 inline-flex justify-center items-center bg-primary rounded-lg text-xs ${className}`}>{children}</p>
}