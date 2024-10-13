import Image from "next/image";

import image from "./assets/security-and-privacy.svg";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";

export function PrivacyAndSecuritySection({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <section className={`grid lg:grid-cols-2 gap-8 justify-items-center items-center md:px-28
        ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <Image className="w-56 animate-moving-around" alt="Privacy and Security" {...image} />

        <article className="text-center lg:text-start">
            <h3 className="text-2xl font-bold">Security and privacy</h3>
            <Paragraph className="mt-4">
                Blockchain’s enhanced security is due to the mechanics of technology. With end-to-end encryption, blockchain generates an unalterable record of transactions that prevent fraud and unauthorized activity.
            </Paragraph>
        </article>
    </section>
}