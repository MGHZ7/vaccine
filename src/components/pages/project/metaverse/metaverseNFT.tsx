import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";

import card from "../assets/cards/platinum-card.png";
import virus from "./assets/nft/virus.png";
import cell from "./assets/nft/cell.png";
import bacteria from "./assets/nft/bacteria.png";
import vicky from "../../../../app/assets/vicky/vicky.png";
import vickyPortrait from "../../../../app/assets/vicky/vicky-portrait.png";
import Image from "next/image";

export function MetaverseNFTSection() {
    return <section
        id="about-the-project"
        className={`grid lg:grid-cols-2 gap-8 justify-center items-center animate-fade-in`}>
        <article className="p-8">
            <h2 className="text-3xl text-on-primary font-bold">VAC NFT</h2>
            <p className="text-xs text-primary">Unlocking Health&apos;s Future: Your Medical Journey, Now NFT-Enabled</p>
            <Paragraph className="mt-8 lg:max-h-56 overflow-auto scroll-indicator-hide">
                Introducing VAC NFTs: A groundbreaking convergence of healthcare and cutting-edge blockchain technology.
                Each Medical NFT represents a unique digital asset, securely storing essential medical records, treatment plans, and diagnostic images on the blockchain.
                With unparalleled security and accessibility, Medical NFTs empower patients to take control of their health data, seamlessly sharing it with healthcare providers anywhere in the world. From ensuring continuity of care during travel to enabling swift and accurate medical interventions in emergencies, Medical NFTs revolutionize the way we manage and exchange health information. Join the future of healthcare with Medical NFTs — where innovation meets wellness, securely stored on the blockchain.
            </Paragraph>
        </article>
        <article>
            <div className="max-w-lg mx-auto mix-blend-multiply">
                <Image className="lg:scale-110" alt="Vaccine overview" {...card} />
            </div>
        </article>

        <article className="order-2 lg:order-none">
            <div className="max-w-lg mx-auto mix-blend-multiply">
                <Image className="lg:scale-110" alt="Virus" {...virus} />
            </div>
        </article>
        <article className="p-8 order-1 lg:order-none">
            <p className="text-xs text-primary">Preserving Health@apos;s Journey: A Digital Gallery of Medical Milestones</p>
            <Paragraph className="mt-8 lg:max-h-56 overflow-auto scroll-indicator-hide">
                Introducing VAC Medical Viruses NFTs: A digital collection immortalizing the intricate beauty and scientific significance of viruses. Each NFT captures the essence of a specific virus, from the common cold to the most notorious pathogens, in stunning detail. With meticulous accuracy and artistic flair, these NFTs serve as educational tools, allowing enthusiasts and researchers alike to explore the molecular structure, transmission pathways, and impact on human health of each virus. Dive into the captivating world of Medical Viruses NFTs and uncover the secrets of these microscopic marvels, transforming scientific understanding into captivating digital art.
            </Paragraph>
        </article>

        <article className="p-8 self-start order-3 lg:order-none">
            <Paragraph className="mt-8 lg:max-h-56 overflow-auto scroll-indicator-hide">
                Introducing VAC Medical Human Cell NFTs: A captivating exploration of the intricate wonders of the human body at the cellular level. Each NFT showcases the awe-inspiring complexity and beauty of human cells, from the elegant structure of neurons to the dynamic functionality of immune cells. With unparalleled detail and scientific accuracy, these NFTs offer a unique opportunity to delve into the inner workings of our biological machinery. Whether you&apos;re a student, researcher, or simply fascinated by the mysteries of life, Medical Human Cell NFTs provide a window into the microscopic world that drives our existence. Embark on a journey of discovery and appreciation for the remarkable complexity of the human body with Medical Human Cell NFTs.
            </Paragraph>
        </article>
        <article className="order-4 lg:order-none">
            <div className="max-w-lg mx-auto mix-blend-multiply">
                <Image className="lg:scale-110" alt="Cell" {...cell} />
            </div>
        </article>

        <article className="lg:-mt-20 order-6 lg:order-none">
            <div className="max-w-lg mx-auto mix-blend-multiply">
                <Image className="lg:scale-110" alt="Bacteria" {...bacteria} />
            </div>
        </article>
        <article className="p-8 self-start order-5 lg:order-none">
            <Paragraph className="mt-8 lg:max-h-56 overflow-auto scroll-indicator-hide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
        </article>

        <article className="order-7 lg:order-none">
            <div className="max-w-lg mx-auto mix-blend-multiply">
                <Image className="lg:scale-110" alt="Vicky" {...vicky} />
            </div>
        </article>
        <article className="p-8 order-8 lg:order-none self-start">
            <p className="text-xs text-primary">Vicky</p>
            <h2 className="text-3xl text-on-primary font-bold">Your Closest Assistance</h2>
            <Paragraph className="mt-8 lg:max-h-56 overflow-auto scroll-indicator-hide">
                Introducing Vicky: Your personalized companion for health and medical advice in the digital age. Powered by cutting-edge artificial intelligence technology, our virtual assistant is designed to provide users with instant access to accurate, reliable, and personalized healthcare information and advice. Whether you have questions about symptoms, medications, or treatment options, our AI assistant is available 24/7 to provide support and guidance. With its intuitive interface and natural language processing capabilities, interacting with our virtual assistant is as easy as having a conversation with a trusted medical professional. Join the future of healthcare with our Virtual Medical AI Assistance and experience the convenience and peace of mind that comes with having expert medical advice at your fingertips, whenever you need it.
            </Paragraph>

            <div className="max-w-xs mx-auto mix-blend-multiply mt-24">
                <Image className="lg:scale-110" alt="Vicky" {...vickyPortrait} />
            </div>
        </article>
    </section>
}