'use client';

import { ComponentSize } from "@/components/common";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export type VaccineLinkProps = LinkProps & { size?: ComponentSize, className?: string, children?: ReactNode }

export function VaccineLink({ className = '', size, ...props }: VaccineLinkProps) {

    const pathName = usePathname();

    const sizeClassName = size == 'xs' ? 'text-xs' : size == 'sm' ? 'text-sm' : size === 'md' ? 'text-md' : size == 'lg' ? 'text-lg' : size === 'xl' ? 'text-xl px-28 py-4' : 'text-md';

    const textColorClassName = `${pathName === props.href ? 'text-primary' : ''}`

    return <Link className={`font-extralight hover:text-primaryVariant 
        ${textColorClassName} 
        ${sizeClassName} 
        ${className}`}  {...props} />
}