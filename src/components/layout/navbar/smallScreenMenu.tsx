import Image from "next/image"
import { NavbarLinkProps, navLinks } from "./navLinks"
import { VaccineLink } from "../link/vaccineLink"
import { VaccineButtonLink } from "../link/vaccineButtonLink"
import { useState } from "react"
import { ConnectWalletButton } from "@/components/wallet/connectWalletButton"
import { AnimatedPlusMinusButton } from "../animation/plusMinus/animatedPlusMinusButton"

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

    return <section className={`fixed top-0 left-0 z-50 secondary-gradient h-screen w-screen pt-16
        flex flex-col justify-start items-center space-y-12 transition-all origin-top-left ${isClosing ? 'animate-menu-reverse' : 'animate-menu'}`}>

        <Image alt="Vaccine Logo" src={'/logo.png'} width={150} height={64} />

        <ul className="flex flex-col items-center gap-8">
            {navLinks.map(link => <LinkMenu key={link.link} link={link} onClose={onClose} />)}
        </ul>

        <div className="inline-flex justify-center items-center gap-4">
            <ConnectWalletButton />
        </div>

        <button className="absolute -top-8 right-4 font-bold text-xl text-on-primary" onClick={handleClose}>X</button>
    </section>
}

function LinkMenu({ link, onClose }: { link: NavbarLinkProps, onClose?: () => void }) {
    const [isOpen, setIsOpen] = useState(false);

    return <li key={link.link} className={`flex flex-col items-center 
    overflow-hidden transition-all ${isOpen ? 'max-h-[1000px]' : 'max-h-8'}`}>
        <div className="relative mb-1.5">
            <VaccineLink
                className="block px-0 w-48 text-center"
                size="lg"
                href={link.link}
                onClick={onClose}>{link.title}</VaccineLink>
            <AnimatedPlusMinusButton
                isOpen={isOpen}
                onClick={() => setIsOpen(prev => !prev)}
                className="absolute top-0 right-1" />
        </div>
        {link.columns.map(subLink => <VaccineLink
            className="mt-1"
            key={subLink.head.link}
            size="sm"
            href={subLink.head.link}
            onClick={onClose}>{subLink.head.title}</VaccineLink>
        )}
    </li>
}