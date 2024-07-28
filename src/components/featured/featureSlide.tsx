import featuredSeparator from "./assets/seperator.svg";
import Image from 'next/image';

export interface FeaturedSlideProps {
    imageSrc: string;
    name: string;
}

export function FeaturedSlide({ name, imageSrc }: FeaturedSlideProps) {

    return <article className="inline-flex justify-center items-center w-full">
        <Image className="self-start me-auto separator" alt={'Seperator'} {...featuredSeparator} width={15} height={20} />
        <Image className="me-auto" alt={name} src={imageSrc} width={120} height={100} />
    </article>
}