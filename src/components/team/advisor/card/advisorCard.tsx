import Image from "next/image";

import borderImage from './assets/border.svg';

export interface AdvisorCardProps {
    className?: string;
    imageSrc: string;
    name: string;
}

export function AdvisorCard({ name, imageSrc, className = '' }: AdvisorCardProps) {

    return <article className={`relative p-1 rounded-full aspect-square h-64 ${className}`}>
        <div className="advisor-image pt-1">
            <Image className="rounded-full" alt={name} src={imageSrc} fill />
        </div>

        <div className="absolute top-0 -bottom-0 left-0 right-0 z-10">
            <Image alt="border" src={borderImage.src} fill />
        </div>

        <div className="absolute top-0 -bottom-0 left-0 right-0 team-member-white-gradient rounded-full">
            <Image alt="border" src={borderImage.src} fill />
        </div>
    </article>
}