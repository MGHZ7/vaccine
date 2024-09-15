import Image from "next/image";

import image from "./assets/3d-woman-with-vr-glasses.jpg";
import { Paragraph } from "@/components/layout/typography/paragraph";

export function MetaverseDescriptionSection() {

    return <section className="relative">
        <Image className="hidden lg:block" alt="A woman with VR glasses" {...image} />

        <div className="lg:absolute top-16 px-8 md:px-24">
            <h1 className="md:text-6xl font-bold text-balance text-on-primary main-header md:mb-4 md:mt-2">
                VAC Metaverse
            </h1>

            <Paragraph className="max-w-lg mt-8 max-h-96 overflow-auto z-10 mb-20">
                In the burgeoning VAC metaverse of the medical field, the boundaries between physical and virtual healthcare are blurring like never before. Here, doctors and patients transcend geographical limitations, stepping into immersive virtual hospitals and clinics where medical consultations unfold with unparalleled convenience and depth. Through virtual reality interfaces, patients can navigate digital replicas of real-world medical facilities, consulting with physicians in real-time, accessing their medical records securely stored in blockchain-backed environments, and even undergoing virtual examinations and treatments. Meanwhile, doctors harness the power of augmented reality and AI-driven diagnostics to visualize patient data, analyze lab results, and collaboratively design tailored treatment plans, fostering a new era of personalized and accessible healthcare.
                <br />
                <br />
                <br />
                VAC metaverse, patient labs become digitized hubs of innovation, seamlessly integrated with virtual environments to streamline diagnostics and enhance medical research. Patients can undergo virtual laboratory tests, with AI algorithms swiftly analyzing results and generating insights for clinicians. Moreover, researchers leverage VAC metaverse's vast data-sharing capabilities to collaborate globally, accelerating the pace of medical breakthroughs. With VAC metaverse transforming every aspect of the medical field, from doctor-patient interactions to laboratory diagnostics, healthcare becomes not just a physical destination but a boundless realm of possibility, where innovation and compassion converge to shape the future of medicine.
                VAC metaverse, patient labs become digitized hubs of innovation, seamlessly integrated with virtual environments to streamline diagnostics and enhance medical research. Patients can undergo virtual laboratory tests, with AI algorithms swiftly analyzing results and generating insights for clinicians. Moreover, researchers leverage VAC metaverse's vast data-sharing capabilities to collaborate globally, accelerating the pace of medical breakthroughs. With VAC metaverse transforming every aspect of the medical field, from doctor-patient interactions to laboratory diagnostics, healthcare becomes not just a physical destination but a boundless realm of possibility, where innovation and compassion converge to shape the future of medicine.
            </Paragraph>
        </div>
    </section>
}