'use client';

import { ComponentSize } from "@/components/common";
import Link, { LinkProps } from "next/link";
import { MouseEventHandler, ReactNode } from "react";

export type VaccineLinkProps = LinkProps & {
    size?: ComponentSize,
    className?: string,
    children?: ReactNode,
    target?: string,
    onMouseEnter?: MouseEventHandler<HTMLAnchorElement>,
    onMouseLeave?: MouseEventHandler<HTMLAnchorElement>,
}

export function VaccineLink({ className = '', size, ...props }: VaccineLinkProps) {

    const sizeClassName = size == 'xs' ? 'text-xs' : size == 'sm' ? 'text-sm' : size === 'md' ? 'text-md text-lg px-12' : size == 'lg' ? 'text-lg px-20' : size === 'xl' ? 'text-xl px-28 py-4' : 'text-md';

    return <Link className={`font-extralight hover:text-primaryVariant 
        ${sizeClassName} 
        ${className}`}
        {...props} />
}