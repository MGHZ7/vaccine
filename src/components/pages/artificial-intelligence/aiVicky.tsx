'use client';

import Image from "next/image";

import image from "./assets/vicky.png";
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { Divider } from "@/components/layout/divider/divider";

export function AIVicky({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <section
        id="about-the-project"
        className={`${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article className="">
            <div className="max-w-xl">
                <h2 className="text-3xl text-on-primary font-bold mb-2">Vicky, Your Virtual AI Assistant</h2>
                <Divider type="ltr" />
            </div>
            <div className="mx-auto">
                <Image alt="Vaccine overview" {...image} />
            </div>
        </article>
        <article className="">
            <Paragraph className="mt-8 overflow-auto scroll-indicator-hide">
                <span className="text-primary">Vicky</span> is your assistance, here to assist patients, physicians, and other users in the VAC Metaverse, where she will organize services, and venues, and make recommendations depending on your requirements and needs.
                <br />
                <br />
                She will provide a helping hand and guidance through the domain of virtual healthcare, bridging the gap between the actual world and the Metaverse and making everyone feel seen, heard, and welcomed. VACLAB intends to construct the greatest healthcare area in the metaverse.
                <br />
                <br />
                <span className="text-primary">Vicky can also accomplish activities that would ordinarily require human intellect. VAC lab will create a complex and advanced artificial intelligence (AI) procedures amd analysis.
                </span>
                <br />
                <br />
                <span className="text-primary">Vicky</span> will also help with the facilitation of providing many of the healthcare services to its users such as:
                <br />
                <br />
            </Paragraph>

            <ul className="list-disc text-sm font-extralight">
                <li className="list-item">
                    Guiding the patient to the proper doctor with a custom recommendation.
                </li>
                <li className="list-item">
                    Reserving an appointment with patients and doctors.
                </li>
                <li className="list-item">
                    Managing the transaction tasks between different services and users across the platform.
                </li>
            </ul>
        </article>
    </section>
}