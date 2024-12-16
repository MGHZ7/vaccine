import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";

import vicky from "../../../../../app/assets/vicky/vicky.png";
import vickyPortrait from "../../../../../app/assets/vicky/vicky-portrait.png";
import Image from "next/image";

export function MetaverseVickySection({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <div className={`grid lg:grid-cols-2 gap-8 ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article className="order-2 lg:order-none">
            <div className="max-w-lg mx-auto mix-blend-multiply">
                <Image className="lg:scale-110" alt="Vicky" {...vicky} />
            </div>
        </article>
        <article className="p-8 order-1 lg:order-none self-start">
            <p className="text-xs text-primary">Your Closest Assistance</p>
            <h2 className="text-3xl text-on-primary font-bold">Vicky</h2>
            <Paragraph className="mt-8 lg:max-h-56 overflow-auto scroll-indicator-hide">
                Introducing Vicky: Your personalized companion for health and medical advice in the digital age. Powered by cutting-edge artificial intelligence technology, our virtual assistant is designed to provide users with instant access to accurate, reliable, and personalized healthcare information and advice. Whether you have questions about symptoms, medications, or treatment options, our AI assistant is available 24/7 to provide support and guidance. With its intuitive interface and natural language processing capabilities, interacting with our virtual assistant is as easy as having a conversation with a trusted medical professional. Join the future of healthcare with our Virtual Medical AI Assistance and experience the convenience and peace of mind that comes with having expert medical advice at your fingertips, whenever you need it.
            </Paragraph>

            <div className="max-w-xs mx-auto mix-blend-multiply mt-24">
                <Image className="lg:scale-110" alt="Vicky" {...vickyPortrait} />
            </div>
        </article>
    </div>
}