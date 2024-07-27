import { Divider } from "@/components/layout/divider/divider";
import Image from "next/image";

import blockchainIcon from "../../../app/assets/pages/home/solutions/vac-blockchain.svg";
import decentralizedStorageIcon from "../../../app/assets/pages/home/solutions/vac-decentralized-storage.svg";
import metahealthIcon from "../../../app/assets/pages/home/solutions/vac-metahealth.svg";
import nftIcon from "../../../app/assets/pages/home/solutions/vac-nft.svg";
import insuranceIcon from "../../../app/assets/pages/home/solutions/vac-insurance.svg";
import supplyChainIcon from "../../../app/assets/pages/home/solutions/vac-supply-chain.svg";

export function SolutionsSection() {

    return <section className="w-full p-8">
        <article className="max-w-lg self-start space-y-4">
            <h2 className="text-3xl text-on-primary font-bold">Solutions</h2>
            <p className="text-xs text-primary">Vaccine is a decentralized ecosystem that empowers</p>
            <Divider />
        </article>

        <section className="grid gap-8  grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-end mt-16">
            <Solution title="VAC Blockgain" image={blockchainIcon} />
            <Solution title="VAC Decentralized Storage" image={decentralizedStorageIcon} />
            <Solution title="VAC METAHEALTH" image={metahealthIcon} />
            <Solution title="VAC NFT" image={nftIcon} />
            <Solution title="VAC Supply Chain" image={supplyChainIcon} />
            <Solution title="VAC Insurance" image={insuranceIcon} />
        </section>
    </section>
}

export function Solution({ title, image }: { title: string, image: any }) {

    return <article>
        <div className="w-full lg:px-3 xl:px-8 inline-flex justify-center">
            <Image alt={title} {...image} />
        </div>
        <h4 className="text-xs font-extralight text-center mt-2 h-2">{title}</h4>
    </article>
}