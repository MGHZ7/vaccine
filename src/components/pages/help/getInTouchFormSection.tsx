import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { TransparentCard } from "@/components/layout/card/transparentCard";
import { VaccineButtonLink } from "@/components/layout/link/vaccineButtonLink";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { GetInTouchForm } from "./getInTouchForm";

export interface GetInTouchFormSectionProps extends ElementVisibilityCheckerComponentProps {

}

export function GetInTouchFormSection({ isVisible }: GetInTouchFormSectionProps) {

    return <section id="get-in-touch" className={`max-w-xl ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>

        <div className="px-8">
            <h2 className="text-3xl text-on-primary font-bold">GET IN TOUCH!</h2>
            <Paragraph>Here are some of the most frequently asked questions on Vaccine, if you have any other inquiries, please submit your questions here: </Paragraph>
        </div>

        <TransparentCard showLightingPoint className={`mt-8 p-8`} >
            <GetInTouchForm />
        </TransparentCard>
    </section>
}