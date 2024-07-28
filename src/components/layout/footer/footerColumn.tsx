import { VaccineLink } from "../link/vaccineLink";

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
    type?: 'sm' | 'lg'
}

function FooterLink({ title, link, type = 'sm' }: FooterLinkProps) {

    return <>
        <VaccineLink size={type}
            className={`!p-0 ${type === 'lg' ? 'font-normal' : ''}`}
            href={link}>{title}</VaccineLink>
        {type === 'lg' ? <div className="w-4 h-0.5 bg-primary"></div> : null}
    </>
}