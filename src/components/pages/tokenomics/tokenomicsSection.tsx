import Image from 'next/image';
import image from './assets/tokenomics.png';
import { Paragraph } from '@/components/layout/typography/paragraph';
import { ElementVisibilityCheckerComponentProps } from '@/components/common/elementInViewPort';

export function TokenomicsSection({ isVisible }: ElementVisibilityCheckerComponentProps) {

    return <section className={`grid lg:grid-cols-2 gap-8 justify-center items-center ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article className="p-8">
            <h2 className="text-3xl text-on-primary font-bold">Tokenomics</h2>
            <p className="text-xs text-primary">The Financial Infrastructure </p>
            <Paragraph className="mt-8 max-h-60 overflow-auto">
                In the realm of healthcare, tokenomics emerges as a transformative force, reshaping the dynamics of medical ecosystems and patient care. By integrating blockchain technology and cryptocurrency tokens, medical tokenomics offers a novel approach to incentivize collaboration, innovation, and value creation across the healthcare landscape. These tokens can facilitate secure and transparent transactions, streamline medical data management, and incentivize patient engagement in preventive care and wellness activities. Moreover, tokenomics models within the medical sector can incentivize research and development of new treatments, improve access to healthcare services in underserved communities, and promote data sharing for medical research while ensuring patient privacy. As the healthcare industry continues to evolve, the implementation of tokenomics holds immense promise in revolutionizing patient-centric care delivery and fostering innovation to address the most pressing healthcare challenges of our time.
            </Paragraph>
        </article>

        <article>
            <div className="max-w-lg mx-auto">
                <Image alt="Vaccine overview" {...image} />
            </div>
        </article>
    </section>
}