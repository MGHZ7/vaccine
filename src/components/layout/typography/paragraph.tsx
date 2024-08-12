import { HTMLAttributes } from "react";

export function Paragraph(props: HTMLAttributes<HTMLParagraphElement>) {

    return <p {...props} className={`text-sm font-extralight ${props.className ?? ''}`} />
}