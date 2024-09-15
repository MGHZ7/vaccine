'use client';

import { ComponentSize } from "@/components/common";
import { Loading } from "@/components/common/loader/loading";
import Link, { LinkProps } from "next/link";
import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEventHandler, ReactNode } from "react";

type SharedProps = {
    size?: ComponentSize,
    className?: string,
    children?: ReactNode,
    onMouseEnter?: MouseEventHandler<HTMLElement>, // Make onMouseEnter and onMouseLeave generic
    onMouseLeave?: MouseEventHandler<HTMLElement>,
    elementType?: 'link' | 'button';
    isLoading?: boolean
};

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type VaccLinkProps = LinkProps & { target?: string }

export type VaccineLinkProps = SharedProps & (ButtonProps | VaccLinkProps)


export function VaccineLink({ className = '', size, elementType = 'link', ...props }: VaccineLinkProps) {

    const sizeClassName = size == 'xs'
        ? 'text-xs' : size == 'sm'
            ? 'text-sm' : size === 'md'
                ? 'text-md text-lg px-12' : size == 'lg'
                    ? 'text-lg px-20' : size === 'xl'
                        ? 'text-xl px-28 py-4' : 'text-md';

    const elementClassName = `font-extralight hover:text-primaryVariant 
        ${sizeClassName} 
        ${className}`;

    return elementType == 'link'
        ? <Link className={`${elementClassName}`} {...props as VaccLinkProps} >
            {props.isLoading ? <Loading /> : null}
            {props.children}</Link>
        : <button className={`${elementClassName}`} {...props as ButtonProps}>
            {props.isLoading ? <Loading /> : null}
            {props.children}
        </button>
}