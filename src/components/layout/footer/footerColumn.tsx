import { ReactNode } from "react";
import { VaccineLink } from "../../common/link/vaccineLink";

export interface FooterColumnsProps {
    items: FooterLinkProps[]
}

export function FooterColumn({ items }: FooterColumnsProps) {

    return <article className="flex flex-col gap-4">
        {items.map((item, i) => <FooterLink key={i} {...item} />)}
    </article>
}

interface FooterLinkProps {
    title: string;
    link: string;
    type?: 'sm' | 'lg' | 'xl'
    prefix?: ReactNode
}

function FooterLink({ title, link, type = 'sm', prefix }: FooterLinkProps) {

    return <>
        <div className="flex gap-2">
            {prefix}
            <VaccineLink size={type}
                className={`!p-0 ${type === 'lg' || type === 'xl' ? 'font-normal text-sm' : 'text-xs'}`}
                href={link}>{title}</VaccineLink>
        </div>
        {type === 'lg' ? <div className="w-4 h-0.5 bg-primary"></div> : null}
    </>
}