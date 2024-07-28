import Image from "next/image";
import borderImage from "./assets/border.svg";

export interface TeamMemberCardProps {
    imageSrc: string;
    name: string;
    title?: string;
}

export function TeamMemberCard({ imageSrc, name, title }: TeamMemberCardProps) {

    return <article className="">
        <div className="relative aspect-square h-40 md:h-52">
            <div className="absolute top-0 -bottom-[24%] left-0 right-0">
                <Image alt="border" src={borderImage.src} fill />
            </div>
            <div className="absolute top-[20%] -bottom-0 left-0 right-0 team-member-white-gradient rounded-lg">
            </div>

            <Image alt={name} src={imageSrc} fill />
        </div>

        <div className="text-center">
            <h4 className="text-primary font-bold">{name}</h4>
            <h6 className="text-xs font-extralight">{title}</h6>
        </div>
    </article>
}