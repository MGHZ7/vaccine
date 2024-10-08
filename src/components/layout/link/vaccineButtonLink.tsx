import { VaccineLink, VaccineLinkProps } from "./vaccineLink";

export type VaccineButtonLinkProps = VaccineLinkProps & {
    styleType: 'light' | 'dark'
}

export function VaccineButtonLink({ styleType, ...props }: VaccineButtonLinkProps) {

    return <VaccineLink
        {...props}
        className={`transition-all 
            ${styleType == 'light' ? 'btn-light shadow-2xl shadow-primary'
                : 'border border-primary hover:border-primaryVariant'} 
            px-4 py-2 rounded-lg hover:!text-white ${props.className ?? ''}`} />
}