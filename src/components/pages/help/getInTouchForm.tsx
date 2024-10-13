import { VaccineButtonLink } from "@/components/layout/link/vaccineButtonLink";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface GetInTouchFormProps {

}

export function GetInTouchForm({ }: GetInTouchFormProps) {

    return <form className="space-y-4">
        <FormField label={"Name:"} input={{
            name: "Name",
        }} />
        <FormField label={"E-Mail:"} input={{
            name: "email",
        }} />
        <FormField label={"Subject:"} input={{
            name: "subject",
        }} />
        <label className="flex flex-col md:flex-row justify-between md:gap-12">
            <span className="text-primary w-20">Message:</span>
            <textarea className="flex-1" rows={5}></textarea>
        </label>

        <label className="flex justify-between gap-4 md:gap-12">
            <span className="w-20">
                <input type="checkbox" />
            </span>
            <span className="text-xs">I have read and accepted the Terms and Conditions and Privacy Policy</span>
        </label>

        <VaccineButtonLink className="block !mt-8 text-center" styleType="light" size="xl" href={''}>
            Submit
        </VaccineButtonLink>
    </form>
}

interface FormFieldProps {
    label: string;
    input: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
}

function FormField({ label, input }: FormFieldProps) {
    return <label className="flex flex-col md:flex-row justify-between md:items-center md:gap-12">
        <span className="text-primary w-20">{label}</span>
        <input className="flex-1" {...input} />
    </label>
}