import image from "./assets/metaVac.png";

import Image from "next/image";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { Heading } from "@/components/layout/header/heading";

export function MetaverseVac() {

    return <section className="grid lg:grid-cols-2 items-center mx-auto px-4 md:px-12">

        <article className="order-1 lg:order-0">
            <div className="mb-8">
                <Heading showDivider>VAC Meta Hospital</Heading>
            </div>
            <Paragraph className="max-h-40 overflow-auto">
                Welcome to the VAC Medical Hospital Metaverse, where the future of healthcare unfolds in a boundless digital landscape. Step through the virtual doors of our state-of-the-art facility, where patients and healthcare professionals converge in a seamless fusion of technology and compassion. Within this immersive environment, individuals can access a comprehensive range of medical services, from routine check-ups to complex surgeries, all from the comfort of their own homes. Our hospital&apos;s virtual wards are staffed by a team of expert physicians, nurses, and specialists, each committed to delivering personalized care and support. Whether you&apos;re seeking treatment for a chronic condition, exploring innovative therapies, or simply looking to optimize your well-being, our Medical Hospital Metaverse offers a transformative healthcare experience like no other. With its emphasis on accessibility, efficiency, and patient-centered care, our virtual hospital is poised to revolutionize the way we approach health and healing in the digital age. Welcome to the future of medicine—welcome to the Medical Hospital Metaverse.
            </Paragraph>
        </article>
        <Image className="order-0 lg:order-1" alt="meta Health" {...image} />

    </section>
}