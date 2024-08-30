import twitterIcon from "@/app/assets/social-media/twitter.svg";
import facebookIcon from "@/app/assets/social-media/facebook.svg";
import telegramIcon from "@/app/assets/social-media/telegram.svg";
import instagramIcon from "@/app/assets/social-media/instagram.svg";
import discordIcon from "@/app/assets/social-media/discord.svg";

import Image from "next/image";
import { XLink } from "./xLink";
import { FacebookLink } from "./facebookLink";
import { TelegramLink } from "./telegramLink";
import { InstagramLink } from "./instagramLink";
import { DiscordLink } from "./discordLink";

export interface SocialMediaProps {
    className?: string;
}

export function SocialMedia({ className = '' }: SocialMediaProps) {

    return <ul className={`flex gap-2 ${className}`}>
        <li>
            <XLink />
        </li>
        <li>
            <FacebookLink />
        </li>
        <li>
            <TelegramLink />
        </li>
        <li>
            <InstagramLink />
        </li>
        <li>
            <DiscordLink />
        </li>
    </ul>
}