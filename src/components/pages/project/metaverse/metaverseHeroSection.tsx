import Image from "next/image";
import image from "./assets/metaverse.png";

export function MetaverseLandingSection() {

    return <section className="px-8">
        <Image alt="Hero section" {...image} />
    </section>
}