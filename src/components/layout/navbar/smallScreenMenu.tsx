import Image from "next/image"
import { navLinks } from "./navLinks"
import { VaccineLink } from "../link/vaccineLink"
import { VaccineButtonLink } from "../link/vaccineButtonLink"
import { useState } from "react"

export interface SmallScreenMenuProps {
    onClose?: () => void
}

export function SmallScreenMenu({ onClose }: SmallScreenMenuProps) {

    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose?.();
        }, 50);
    }

    return <section className={`fixed top-0 left-0 z-50 secondary-gradient h-screen w-screen 
        flex flex-col justify-center items-center space-y-12 transition-all origin-top-left ${isClosing ? 'animate-menu-reverse' : 'animate-menu'}`}>

        <Image alt="Vaccine Logo" src={'/logo.png'} width={150} height={64} />

        <div className="flex flex-col items-center gap-8">
            {navLinks.map(link => <VaccineLink key={link.link} size="lg" href={link.link}>{link.title}</VaccineLink>)}
        </div>

        <div className="inline-flex justify-center items-center gap-4">
            <VaccineButtonLink size="lg" buttonType="light" href={'/register'}>Register</VaccineButtonLink>
            <VaccineButtonLink size="lg" buttonType="dark" href={'/sign-in'}>Sign In</VaccineButtonLink>
        </div>

        <button className="absolute top-0 right-20 font-bold text-xl text-on-primary" onClick={handleClose}>X</button>
    </section>
}