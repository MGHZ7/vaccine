import { ComponentSize } from "@/components/common";
import Link, { LinkProps } from "next/link";

export type VaccineLinkProps = LinkProps & { size: ComponentSize }

export function VaccineLink(props: LinkProps) {

    return <Link className={``}  {...props} />
}