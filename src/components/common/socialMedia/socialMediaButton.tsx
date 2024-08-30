import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface SocialMediaButtonProps {
    image: StaticImageData
    link: string;
}

export function SocialMediaButton({ image, link }: SocialMediaButtonProps) {

    return <div className="w-10 border border-on-primary rounded-full p-2 hover:hue-rotate-30">
        <Link href={link}>
            <Image alt=""  {...image} width={40} height={40} />
        </Link>
    </div>
}