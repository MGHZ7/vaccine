import { VaccineLink, VaccineLinkProps } from "./vaccineLink";

export interface VaccineButtonLinkProps extends VaccineLinkProps {
    buttonType: 'light' | 'dark'
}

export function VaccineButtonLink({ buttonType, ...props }: VaccineButtonLinkProps) {

    return <VaccineLink size="sm" className={`transition-all 
        ${buttonType == 'light' ? 'btn-light hover:shadow-2xl shadow-primaryVariant' : 'border border-primary hover:border-primaryVariant'} 
        px-4 py-2 rounded hover:!text-white`}
        {...props} />
}