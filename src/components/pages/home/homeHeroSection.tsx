import Image from "next/image";
import globeImage from "../../../app/assets/pages/home/globe.png";
import { VaccineButtonLink } from "@/components/layout/link/vaccineButtonLink";

export function HomeHeroSection() {
    return <section id="home-hero-section" className="relative">
        <article className="grid lg:grid-cols-2">
            <div className="max-w-lg leading-10">
                <p className={"text-primary text-sm font-light wide-letter-spacing"}>Always Caring . Always Here</p>
                <h1 className="md:text-6xl font-bold text-balance text-on-primary main-header mb-4 mt-2">Vaccine is a
                    Decentralized Medical Ecosystem</h1>
                <p className="text-xs font-extralight max-w-72">
                    VAC is the revolution in the medical industry and will lead the digital transformation
                </p>

                <div className="mt-10">
                    <VaccineButtonLink size="md" buttonType="light" href={'/lightpaper'}>
                        Litepaper
                    </VaccineButtonLink>
                </div>
            </div>
        </article>

        <div className="absolute -top-[30%] -right-[10%] w-[70%] aspect-square">
            <Image className="mix-blend-lighten" alt={'Vaccine globe'} src={globeImage.src} fill />
        </div>
    </section>
}