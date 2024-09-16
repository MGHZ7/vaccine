import Image from "next/image";
import image from "./assets/hero.png";
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";

export function AILandingSection({ isVisible }: ElementVisibilityCheckerComponentProps) {

    return <section className={`px-8 ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <Image alt="AI Hero section" {...image} />
    </section>
}