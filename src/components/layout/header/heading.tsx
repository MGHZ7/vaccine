import { Divide } from "hamburger-react";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Divider, DividerProps } from "../divider/divider";

export interface HeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    headingType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    containerClassName?: string;
    subtitle?: string;
    showDivider?: boolean;
    divider?: DividerProps;
}

export function Heading({ subtitle, headingType = 'h2', showDivider = false, containerClassName = '', ...props }: HeadingProps) {
    return <div className={`space-y-4 ${containerClassName}`}>
        {headingType === 'h1'
            ? null : headingType === 'h2'
                ? <H2 {...props} /> :
                headingType === 'h3'
                    ? <H3 {...props} /> : null
        }
        {subtitle ? <p className="text-xs text-primary">{subtitle}</p> : null}
        {showDivider ? <Divider {...props.divider} /> : null}
    </div>
}

function H2({ children, className = '', ...props }: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
    return <h2 {...props} className={`text-3xl text-on-primary font-bold ${className}`}>{children}</h2>
}

function H3({ children, className = '', ...props }: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
    return <h3 {...props} className={`text-2xl text-on-primary font-bold ${className}`}>{children}</h3>
}