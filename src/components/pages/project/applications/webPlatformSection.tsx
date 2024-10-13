'use client';

import Image from "next/image";

import image from "../assets/web-platform.png";
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";

export function WebPlatformSection({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <section className={`grid lg:grid-cols-2 gap-8 justify-center items-end ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article>
            <div className="max-w-lg mx-auto">
                <Image alt="Vaccine Webplatform" {...image} />
            </div>
        </article>
        <article className="md:p-8">
            <h2 className="text-3xl text-on-primary font-bold">VAC Webplatform</h2>
            <p className="text-xs text-primary">VAC Platform pioneers a revolutionary healthcare platform, merging AI, VR, and blockchain for secure, decentralized patient care and medical innovation.</p>
            <Paragraph className="mt-8 max-h-40 overflow-auto">
                VAC Platform, where groundbreaking technology meets compassionate healthcare. Our platform integrates advanced artificial intelligence, virtual reality, and blockchain to redefine the patient-doctor experience. Through our innovative virtual reality interface, patients can connect with healthcare professionals seamlessly, transcending geographical barriers and enhancing accessibility to medical expertise.
                <br />
                <br />
                At the core of our platform lies blockchain technology, ensuring secure and decentralized payment processing and data storage. By leveraging blockchain, we prioritize the privacy and integrity of patient information, safeguarding it against unauthorized access or manipulation. Moreover, we pioneer the use of blockchain-based non-fungible tokens (NFTs) to empower patients with ownership of their medical records. With our AI-driven solutions, we&apos;re not just revolutionizing medical practices; we&apos;re shaping the future of healthcare by generating vaccines, analyzing patient images, and interpreting lab results with unparalleled accuracy and efficiency.
            </Paragraph>
        </article>
    </section>
}