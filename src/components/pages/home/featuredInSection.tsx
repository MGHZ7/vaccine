'use client'

import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Marquee } from "@/components/common/marquee";
import FeaturedSlider from "@/components/featured/featuredSlider";
import { FeaturedSlide, FeaturedSlideProps } from "@/components/featured/featureSlide";

export function FeaturedInSection({ isVisible }: ElementVisibilityCheckerComponentProps) {

    return <section className={`w-full ${isVisible ? 'animate-fade-in' : 'animate-fade-in'}`}>
        <h2 className="text-3xl text-on-primary font-bold text-center">Featured In</h2>

        <div className="mt-8 p-8 w-full overflow-hidden">
            <Marquee>
                {featured.map(featured => <FeaturedSlide key={featured.name} {...featured} />)}
            </Marquee>
        </div>
    </section>
}

const featured: FeaturedSlideProps[] = [
    {
        name: 'yahoo',
        imageSrc: '/home/featured/yahoo.png'
    },
    {
        name: 'silicon',
        imageSrc: '/home/featured/silicon.png'
    },
    {
        name: 'forbes',
        imageSrc: '/home/featured/forbes.png'
    },
    {
        name: 'ngl',
        imageSrc: '/home/featured/ngl.png'
    }
]