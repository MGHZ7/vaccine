import image from "./assets/meta-health.png"

import Image from "next/image";
import { Paragraph } from "@/components/layout/typography/paragraph";

export function MetaverseHealth() {

    return <section className="grid lg:grid-cols-2 justify-center items-center gap-8 mx-auto px-4 md:px-12">
        <Image className="mx-auto" alt="meta Health" {...image} />

        <article>
            <p className="text-xs text-primary">Virtual Health Assistance Around the World</p>
            <h2 className="text-3xl text-on-primary font-bold mb-8">VAC Meta Health</h2>

            <Paragraph className="max-h-96 overflow-auto">
                Step into the Health Metaverse, where the boundaries of traditional healthcare dissolve, and possibilities expand beyond imagination. In this immersive digital realm, individuals transcend physical limitations to access a universe of wellness and medical care. Imagine consultations with specialists from around the globe, virtual wellness retreats in breathtaking landscapes, and personalized health interventions tailored to your unique needs—all within a vibrant, interconnected virtual space. From preventive care to cutting-edge treatments, the Health Metaverse offers a seamless fusion of technology and humanity, empowering individuals to take control of their health journey like never before. With its promise of accessibility, innovation, and boundless potential, the Health Metaverse heralds a new era of healthcare, where wellness knows no bounds.
            </Paragraph>
        </article>
    </section>
}