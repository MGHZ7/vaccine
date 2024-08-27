'use client';

import Image from "next/image"
import { VaccineLink } from "../link/vaccineLink"
import { VaccineButtonLink } from "../link/vaccineButtonLink"
import Hamburger from 'hamburger-react'
import { useState } from "react"
import { navLinks } from "./navLinks";
import { SmallScreenMenu } from "./smallScreenMenu";
import { usePathname } from "next/navigation";

export function Navbar() {

    const pathName = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    return <nav className={``}>
        <div className="container mx-auto p-8 flex gap-12">
            <div>
                <Image alt="Vaccine Logo" src={'/logo.png'} width={120} height={64} />
            </div>

            <div className={`hidden lg:flex justify-center items-center gap-6`}>
                {navLinks.map(link => {
                    const className = link.link === pathName ? 'text-primary' : ''

                    return <VaccineLink key={link.link}
                        className={className}
                        size="sm"
                        href={link.link}>{link.title}</VaccineLink>
                })}
            </div>

            <div className="hidden ms-auto lg:inline-flex items-center gap-4">
                <VaccineButtonLink size="sm" buttonType="dark" href={'/sign-in'}>Connect Wallet</VaccineButtonLink>
            </div>

            <div className="lg:hidden ms-auto">
                <Hamburger toggled={isOpen} toggle={setIsOpen} />
            </div>
        </div>

        {isOpen && <SmallScreenMenu onClose={() => setIsOpen(false)} />}
    </nav >
}