import { VaccineLink, VaccineLinkProps } from "./vaccineLink";

export interface VaccineButtonLinkProps extends VaccineLinkProps {
    buttonType: 'light' | 'dark'
}

export function VaccineButtonLink({ buttonType, ...props }: VaccineButtonLinkProps) {

    return <VaccineLink
        {...props}
        className={`transition-all 
            ${buttonType == 'light' ? 'btn-light shadow-2xl shadow-primary'
                : 'border border-primary hover:border-primaryVariant'} 
            px-4 py-2 rounded-lg hover:!text-white ${props.className ?? ''}`} />
}