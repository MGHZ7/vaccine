'use client';

import Image from "next/image";

import image from "../../../app/assets/pages/home/overview.png"
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";

export function OverviewSection({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <section
        id="about-the-project"
        className={`grid lg:grid-cols-2 gap-8 justify-center items-center ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article>
            <div className="max-w-lg mx-auto">
                <Image alt="Vaccine overview" {...image} />
            </div>
        </article>
        <article className="p-8">
            <p className="text-xs text-primary">About the project</p>
            <h2 className="text-3xl text-on-primary font-bold">Overview</h2>
            <Paragraph className="mt-8 lg:max-h-96 overflow-auto scroll-indicator-hide">
                Welcome to VAC
                <br />
                <br />
                At VAC, we stand at the forefront of medical evolution, leveraging cutting-edge technologies to combat diseases and pandemics. Our platform is dedicated to exploring the intersection of medical advancements, vaccine distribution, and blockchain innovation, offering insights and solutions to address the most pressing challenges in global health.
                <br />
                <br />
                Pioneering Medical Solutions with Blockchain
                <br />
                <br />
                In the ever-evolving landscape of healthcare, innovation is key to overcoming obstacles and improving patient outcomes. [Website Name] harnesses the power of decentralized blockchain technology to revolutionize medical solutions, ensuring secure, transparent, and efficient healthcare delivery worldwide.
                <br />
                <br />
                Empowering Healthcare Through Decentralization
                <br />
                <br />
                Decentralized blockchain solutions hold immense potential in reshaping the healthcare industry. By decentralizing data storage and management, we enhance security, privacy, and accessibility, laying the foundation for a more resilient and inclusive healthcare ecosystem.
                <br />
                <br />
                Driving Change in Vaccine Distribution
                <br />
                <br />
                Vaccine distribution is a critical aspect of public health, with the potential to save millions of lives and prevent widespread disease outbreaks. Through blockchain-powered platforms, we streamline vaccine supply chains, optimize distribution networks, and ensure equitable access to life-saving vaccines, particularly in underserved regions.
                <br />
                <br />
                Advancing Global Health Equity
                <br />
                <br />
                At Vaccine, we believe that every individual deserves access to quality healthcare, regardless of their geographic location or socioeconomic status. By leveraging decentralized blockchain technology, we strive to bridge the gap in global health equity, empowering communities and saving lives around the world.
                <br />
                <br />
                Join Us in Shaping the Future of Healthcare
                <br />
                <br />
                Join us on our mission to revolutionize healthcare through innovation, collaboration, and compassion. Whether you&apos;re a healthcare professional, technology enthusiast, or advocate for global health equity, [Website Name] is your platform to drive meaningful change and shape the future of healthcare for generations to come.
            </Paragraph>
        </article>
    </section>
}