'use client';

import Image from "next/image";

import image from "../../../app/assets/pages/home/solutions/easy-to-use-solution.svg"
import { Divider } from "@/components/layout/divider/divider";
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";

export function EasyToUseSolutionSection({ isVisible }: ElementVisibilityCheckerComponentProps) {

    return <section className={`grid lg:grid-cols-2 lg:gap-8 justify-center items-center ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article className="p-8">
            <div className="space-y-4">
                <h2 className="text-3xl text-on-primary font-bold">Our easy to use Solution</h2>
                <p className="text-xs text-primary">Lorem ipsum dolor sit amet consectetur adipiscing</p>
                <Divider type="ltr" />
            </div>
            <Paragraph className="mt-8 lg:h-52 overflow-auto scroll-indicator-hide">
                Welcome to VAC, where healthcare meets the future with seamless ease through our innovative doctor-patient metaverse NFT solution. Designed for simplicity and accessibility, our platform revolutionizes healthcare interactions by allowing patients and providers to connect effortlessly in immersive virtual environments. With intuitive navigation and user-friendly interfaces, accessing medical consultations, diagnosis, and treatment has never been easier. Through secure blockchain technology and NFT-based authentication, we ensure the privacy and confidentiality of every interaction, empowering individuals to take control of their healthcare journey with confidence. Join us in shaping the future of healthcare delivery, where convenience and quality care converge seamlessly in the metaverse.
            </Paragraph>
        </article>

        <article>
            <div className="max-w-lg mx-auto">
                <Image alt="Vaccine overview" {...image} />
            </div>
        </article>
    </section>
}