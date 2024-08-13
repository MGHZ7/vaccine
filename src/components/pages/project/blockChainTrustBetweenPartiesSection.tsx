import Image from "next/image";

import image from "./assets/blockchain-trust-between-parties.svg";

export function BlockChainTrustBetweenPartiesSection() {
    return <section className="grid lg:grid-cols-2 gap-8 justify-items-center items-center px-28">
        <Image className="w-56" alt="Blockchain trust between parties" {...image} />

        <article className="text-center lg:text-start">
            <h3 className="text-2xl font-bold">Blockchain establishes trust between parties </h3>
        </article>
    </section>
}