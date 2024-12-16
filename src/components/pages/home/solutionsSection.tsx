'use client';

import { Divider } from "@/components/layout/divider/divider";
import Image from "next/image";

import blockchainIcon from "../../../app/assets/pages/home/solutions/vac-blockchain.svg";
import decentralizedStorageIcon from "../../../app/assets/pages/home/solutions/vac-decentralized-storage.svg";
import metahealthIcon from "../../../app/assets/pages/home/solutions/vac-metahealth.svg";
import nftIcon from "../../../app/assets/pages/home/solutions/vac-nft.svg";
import insuranceIcon from "../../../app/assets/pages/home/solutions/vac-insurance.svg";
import supplyChainIcon from "../../../app/assets/pages/home/solutions/vac-supply-chain.svg";
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Heading } from "@/components/layout/header/heading";

export function SolutionsSection({ isVisible }: ElementVisibilityCheckerComponentProps) {

    return <section
        className={`w-full p-8 ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article className="max-w-lg self-start space-y-4">
            <Heading
                subtitle="Vaccine is a decentralized ecosystem that empowers"
                showDivider>
                Solutions
            </Heading>
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

    return <article className="group cursor-pointer">
        <div className="transition w-full lg:px-3 xl:px-8 inline-flex justify-center 
        group-hover:scale-110 group-hover:-hue-rotate-15 group-hover:skew-y-1">
            <Image alt={title} {...image} />
        </div>
        <h4 className="transition text-xs font-extralight text-center mt-2 h-2 group-hover:font-bold">{title}</h4>
    </article>
}