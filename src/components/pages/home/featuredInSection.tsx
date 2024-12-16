'use client'

import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Marquee } from "@/components/common/marquee";
import { FeaturedSlide, FeaturedSlideProps } from "@/components/featured/featureSlide";
import { Heading } from "@/components/layout/header/heading";

export function FeaturedInSection({ isVisible }: ElementVisibilityCheckerComponentProps) {

    return <section className={`w-full ${isVisible ? 'animate-fade-in' : 'animate-fade-in'}`}>

        <div className="container mx-auto">
            <Heading className="text-5xl text-center">Featured In</Heading>
        </div>

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