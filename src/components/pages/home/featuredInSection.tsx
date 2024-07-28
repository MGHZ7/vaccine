import FeaturedSlider from "@/components/featured/featuredSlider";
import { FeaturedSlideProps } from "@/components/featured/featureSlide";

export function FeaturedInSection() {

    return <section className="w-full">
        <h2 className="text-3xl text-on-primary font-bold text-center">Featured In</h2>

        <div className="mt-8 p-8">
            <FeaturedSlider featuredList={featured} />
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
        name: 'yahoo',
        imageSrc: '/home/featured/forbes.png'
    },
    {
        name: 'yahoo',
        imageSrc: '/home/featured/ngl.png'
    }
]