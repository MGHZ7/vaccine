import Image from "next/image";

import image from "./assets/security-and-privacy.svg";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Heading } from "@/components/layout/header/heading";

export function PrivacyAndSecuritySection({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <section className={`grid lg:grid-cols-2 gap-8 justify-items-center items-center md:px-28
        ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <Image className="w-56 animate-moving-around" alt="Privacy and Security" {...image} />

        <article className="text-center lg:text-start">
            <Heading headingType="h3">Security and privacy</Heading>
            <Paragraph className="mt-4">
                Blockchain’s enhanced security is due to the mechanics of technology. With end-to-end encryption, blockchain generates an unalterable record of transactions that prevent fraud and unauthorized activity.
            </Paragraph>
        </article>
    </section>
}