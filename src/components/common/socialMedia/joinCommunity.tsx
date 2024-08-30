import { DiscordLink } from "./discordLink";
import { FacebookLink } from "./facebookLink";
import { InstagramLink } from "./instagramLink";
import { TelegramLink } from "./telegramLink";
import { XLink } from "./xLink";

export function JoinComunity() {

    return <section>
        <h2 className="text-3xl text-on-primary font-bold">Join Comunity</h2>

        <div className="flex gap-4 mt-12 [&>div]:max-w-12">
            <div>
                <XLink />
            </div>
            <div>
                <FacebookLink />
            </div>
            <div>
                <TelegramLink />
            </div>
            <div>
                <InstagramLink />
            </div>
            <div>
                <DiscordLink />
            </div>
        </div>
    </section>
}