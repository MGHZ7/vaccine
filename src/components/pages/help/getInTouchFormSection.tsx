import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { TransparentCard } from "@/components/layout/card/transparentCard";
import { VaccineButtonLink } from "@/components/layout/link/vaccineButtonLink";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface GetInTouchFormSectionProps extends ElementVisibilityCheckerComponentProps {

}

export function GetInTouchFormSection({ isVisible }: GetInTouchFormSectionProps) {

    return <section className={`max-w-xl ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>

        <div className="px-8">
            <h2 className="text-3xl text-on-primary font-bold">GET IN TOUCH!</h2>
            <Paragraph>Here are some of the most frequently asked questions on Vaccine, if you have any other inquiries, please submit your questions here: </Paragraph>
        </div>

        <TransparentCard className={`mt-8 p-8 space-y-4`} >
            <FormField label={"Name:"} input={{
                name: "Name",
            }} />
            <FormField label={"E-Mail:"} input={{
                name: "email",
            }} />
            <FormField label={"Subject:"} input={{
                name: "subject",
            }} />
            <label className="flex justify-between gap-12">
                <span className="text-primary w-20">Message:</span>
                <textarea className="flex-1" rows={5}></textarea>
            </label>

            <label className="flex justify-between gap-12">
                <span className="w-20">
                    <input type="checkbox" />
                </span>
                <span className="text-xs">I have read and accepted the Terms and Conditions and Privacy Policy</span>
            </label>

            <VaccineButtonLink className="block !mt-8 text-center" buttonType="light" size="xl" href={''}>
                Submit
            </VaccineButtonLink>
        </TransparentCard>
    </section>
}


interface FormFieldProps {
    label: string;
    input: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
}

function FormField({ label, input }: FormFieldProps) {
    return <label className="flex justify-between items-center gap-12">
        <span className="text-primary w-20">{label}</span>
        <input className="flex-1" {...input} />
    </label>
}