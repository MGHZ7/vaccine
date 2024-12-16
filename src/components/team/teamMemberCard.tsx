import Image from "next/image";
import borderImage from "./assets/border.svg";
import { Divider } from "../layout/divider/divider";

export interface TeamMemberCardProps {
    imageSrc: string;
    name: string;
    title?: string;
}

export function TeamMemberCard({ imageSrc, name, title }: TeamMemberCardProps) {

    return <article className="group">
        <div className="transition-all relative aspect-square h-40 md:h-52 group-hover:scale-105">
            <div className="absolute top-0 -bottom-[24%] left-0 right-0">
                <Image alt="border" src={borderImage.src} fill />
            </div>
            <div className="absolute top-[20%] -bottom-0 left-0 right-0 team-member-white-gradient rounded-lg">
            </div>

            <Image alt={name} src={imageSrc} fill />

            <Divider className="absolute top-40 md:top-52 left-1 md:left-4 " type="rtl" />
        </div>

        <div className="transition-all text-center group-hover:translate-y-4 mt-2">
            <h4 className="text-primary font-bold">{name}</h4>
            <h6 className="text-xs font-extralight">{title}</h6>
        </div>
    </article>
}