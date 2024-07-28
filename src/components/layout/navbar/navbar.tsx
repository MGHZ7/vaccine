'use client';

import Image from "next/image"
import { VaccineLink } from "../link/vaccineLink"
import { VaccineButtonLink } from "../link/vaccineButtonLink"
import Hamburger from 'hamburger-react'
import { useState } from "react"
import { navLinks } from "./navLinks";
import { SmallScreenMenu } from "./smallScreenMenu";

export function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return <nav className={``}>
        <div className="container mx-auto p-8 flex gap-12">
            <div>
                <Image alt="Vaccine Logo" src={'/logo.png'} width={120} height={64} />
            </div>

            <div className={`hidden lg:flex justify-center items-center gap-6`}>
                {navLinks.map(link => <VaccineLink key={link.link} size="sm" href={link.link}>{link.title}</VaccineLink>)}
            </div>

            <div className="hidden ms-auto lg:inline-flex items-center gap-4">
                <VaccineButtonLink size="sm" buttonType="light" href={'/register'}>Register</VaccineButtonLink>
                <VaccineButtonLink size="sm" buttonType="dark" href={'/sign-in'}>Sign In</VaccineButtonLink>
            </div>

            <div className="lg:hidden ms-auto">
                <Hamburger toggled={isOpen} toggle={setIsOpen} />
            </div>
        </div>

        {isOpen && <SmallScreenMenu onClose={() => setIsOpen(false)} />}
    </nav >
}