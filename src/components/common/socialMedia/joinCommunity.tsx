import { DiscordIcon } from "./icons/discordIcon";
import { FacebookIcon } from "./icons/facebookIcon";
import { InstagramIcon } from "./icons/instagramIcon";
import { TelegramIcon } from "./icons/telegramIcon";
import { TwitterIcon } from "./icons/twitterIcon";

export function JoinComunity() {

    return <section>
        <h2 className="text-3xl text-on-primary font-bold">Join Comunity</h2>

        <div className="flex gap-4 mt-12 [&>div]:max-w-12">
            <div>
                <TwitterIcon />
            </div>
            <div>
                <FacebookIcon />
            </div>
            <div>
                <TelegramIcon />
            </div>
            <div>
                <InstagramIcon />
            </div>
            <div>
                <DiscordIcon />
            </div>
        </div>
    </section>
}