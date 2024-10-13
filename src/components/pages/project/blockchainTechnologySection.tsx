'use client';

import Image from "next/image";

import image from "../../../app/project/assets/public-cube.png";
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";

export function BlockchainTechnologySection({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <section className={`grid lg:grid-cols-2 gap-8 justify-center items-center ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article>
            <div className="max-w-lg mx-auto">
                <Image alt="Vaccine overview" {...image} />
            </div>
        </article>
        <article className="md:p-8">
            <p className="text-xs text-primary">VAC Blockchain</p>
            <h2 className="text-3xl text-on-primary font-bold">VAC Blockchain Technology</h2>
            <Paragraph className="mt-8 max-h-60 overflow-auto">
                The VAC blockchain is a network with a hybrid Architecture that incorporates the benefits of both private and public blockchains. It alternates between a private and a public state.
                <br />
                <br />
                In a blockchain-based medical system, patient records, treatment histories, diagnostic results, and other healthcare data are stored in encrypted blocks. These blocks are linked together in a chronological chain, creating a transparent and tamper-proof record of every interaction.
                <br />
                <br />
                One of the key features of blockchain in healthcare is its ability to enhance data security and privacy. By distributing data across multiple nodes in the network and encrypting each block, blockchain technology minimizes the risk of unauthorized access, data breaches, and tampering. Patients have greater control over their health information, with the ability to grant or revoke access to specific parties through cryptographic keys.            </Paragraph>
        </article>
    </section>
}