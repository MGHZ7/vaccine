import { ReactNode } from "react";

export interface BadgeProps {
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
}

export function Badge({ children, onClick, className = '' }: BadgeProps) {
    return <p onClick={onClick} className={`py-0.5 px-1 inline-flex justify-center items-center bg-primary rounded-lg text-xs ${className}`}>{children}</p>
}