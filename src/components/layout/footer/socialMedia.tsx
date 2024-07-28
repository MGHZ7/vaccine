import twitterIcon from "@/app/assets/social-media/twitter.svg";
import facebookIcon from "@/app/assets/social-media/facebook.svg";
import telegramIcon from "@/app/assets/social-media/telegram.svg";
import instagramIcon from "@/app/assets/social-media/instagram.svg";
import discordIcon from "@/app/assets/social-media/discord.svg";

import Image from "next/image";

export interface SocialMediaProps {
    className?: string;
}

export function SocialMedia({ className = '' }: SocialMediaProps) {

    return <ul className={`flex gap-2 ${className}`}>
        <li>
            <Image alt="twitter" {...twitterIcon} />
        </li>
        <li>
            <Image alt="facebook" {...facebookIcon} />
        </li>
        <li>
            <Image alt="telegram" {...telegramIcon} />
        </li>
        <li>
            <Image alt="instagram" {...instagramIcon} />
        </li>
        <li>
            <Image alt="discord" {...discordIcon} />
        </li>
    </ul>
}