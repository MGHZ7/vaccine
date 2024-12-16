import { VaccineLink, VaccineLinkProps } from "./vaccineLink";

export type VaccineButtonLinkProps = VaccineLinkProps & {
    styleType: 'light' | 'dark' | 'dark-gradient'
}

export function VaccineButtonLink({ styleType, ...props }: VaccineButtonLinkProps) {

    return <VaccineLink
        {...props}
        className={`transition-all 
            ${styleType == 'light'
                ? 'btn-light shadow-2xl shadow-primary'
                : styleType == 'dark-gradient'
                    ? 'btn-dark-gradient shadow shadow-primary border border-primary'
                    : 'border border-primary hover:border-primaryVariant'} 
            px-4 py-2 rounded-lg hover:!text-white ${props.className ?? ''}`} />
}