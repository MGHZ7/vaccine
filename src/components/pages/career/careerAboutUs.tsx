'use client';

import image from "../../../app/logo.png"
import Image from "next/image";

import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";

export function CareerAboutUsSection({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <article
        id="about-the-project"
        className={`grid lg:grid-cols-2 gap-8 justify-center items-center ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article>
            <div className="max-w-lg mx-auto">
                <Image className="animate-glow" alt="Vaccine overview" {...image} />
            </div>
        </article>
        <article className="p-8">
            <p className="text-xs text-primary">VACCINE</p>
            <h2 className="text-3xl text-on-primary font-bold">About Us</h2>
            <Paragraph className="mt-8 lg:max-h-96 overflow-auto scroll-indicator-hide">
                Welcome to VAC,
                <br /><br />
                where innovation meets integrity in healthcare. We are pioneering a new era of medical technology, leveraging artificial intelligence, virtual reality, and blockchain to revolutionize patient care and medical solutions.
                <br /><br />
                At VAC, we recognize the importance of trust and transparency in healthcare. That&apos;s why we have embraced blockchain technology, harnessing its decentralized nature to ensure the security, privacy, and integrity of patient data and financial transactions.
                <br /><br />
                Our flagship offering is our cutting-edge virtual reality platform, which facilitates seamless doctor-patient interactions regardless of geographic distance. Through immersive VR appointments, we bridge the gap between patients and healthcare providers, delivering personalized care experiences that prioritize patient comfort and convenience.
                <br /><br />
                In addition to our VR platform, we utilize blockchain for secure payment processing and data storage. By decentralizing our infrastructure, we eliminate single points of failure and reduce the risk of data breaches, ensuring that patient information remains confidential and tamper-proof at all times.
                <br /><br />
                But our commitment to blockchain doesn&apos;t stop there. We are also at the forefront of the NFT revolution in healthcare, creating unique digital assets that represent medical records, research findings, and treatment protocols. Through blockchain-powered NFTs, patients gain ownership of their health data, empowering them to control access and monetize their information while maintaining privacy and security.
                <br /><br />
                Furthermore, our AI-driven medical solutions are transforming healthcare delivery and research. From vaccine development to diagnostic imaging and laboratory analysis, our AI algorithms analyze vast datasets to generate insights and recommendations that enhance clinical decision-making and patient outcomes.
                <br /><br />
                At VAC, we believe in a future where healthcare is accessible, transparent, and patient-centric. By harnessing the power of AI, VR, and blockchain, we are paving the way for a healthier, more connected world. Join us on our journey to revolutionize healthcare for generations to come.
            </Paragraph>
        </article>
    </article>
}