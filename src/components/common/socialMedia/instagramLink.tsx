import instagramIcon from "@/app/assets/social-media/instagram.svg"
import * as React from "react";
import { SocialMediaButton } from "./socialMediaButton";

export function InstagramLink() {
    return <SocialMediaButton image={instagramIcon} link="www.instagram.com" />

};
