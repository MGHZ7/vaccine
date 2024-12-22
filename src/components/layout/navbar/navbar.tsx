'use client';

import Image from "next/image"
import { VaccineLink } from "../../common/link/vaccineLink"
import Hamburger from 'hamburger-react'
import { MouseEventHandler, useState } from "react"
import { NavbarLinkProps, navLinks } from "./navLinks";
import { SmallScreenMenu } from "./smallScreenMenu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ConnectWalletButton } from "@/components/wallet/connectWalletButton";

export function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(navLinks.map(e => false));

    const setNavLinkPanelShowable = (index: number) => {
        setShow(prevValue => {
            const newValue = prevValue.map(e => false);
            newValue[index] = true;
            return newValue;
        })
    }

    const hideAllNavLinkPanels = () => {
        setShow(prevValue => prevValue.map(e => false))
    }

    return <nav className={`relative`} onMouseLeave={hideAllNavLinkPanels}>
        <div className="container mx-auto p-2 xl:p-8 flex gap-12">
            <Link href="/">
                <Image alt="Vaccine Logo" src={'/logo.png'} width={120} height={64} />
            </Link>

            <div className={`hidden lg:flex justify-center items-center gap-6`}>
                {navLinks.map((link, i) => <NavbarLgScreenLink
                    key={i}
                    {...link}
                    show={show[i]}
                    onMouseEnter={() => setNavLinkPanelShowable(i)} />)}
            </div>

            <div className="hidden ms-auto lg:inline-flex items-center gap-4">
                <ConnectWalletButton />
            </div>

            <div className="lg:hidden ms-auto">
                <Hamburger toggled={isOpen} toggle={setIsOpen} />
            </div>
        </div>

        {isOpen && <SmallScreenMenu onClose={() => setIsOpen(false)} />}
    </nav >
}

function NavbarLgScreenLink({ link, title, columns, show, onMouseEnter }:
    NavbarLinkProps & { onMouseEnter?: MouseEventHandler<HTMLDivElement>, show: boolean }) {

    const pathName = usePathname();
    const className = link === pathName ? 'text-primary' : ''

    return <div
        onMouseEnter={onMouseEnter}>
        <VaccineLink
            key={link}
            className={className}
            size="sm"
            href={link}>{title}
        </VaccineLink>
        {columns.length && show
            ? <div className="absolute left-0 top-20 right-0 bg-secondary bg-opacity-60 
                flex justify-center gap-8 p-4 animate-fade-in z-50">
                {columns.map((col, i) => <div key={i}>
                    <Link href={col.head.link}>{col.head.title}</Link>

                    <ul className="mt-2 text-sm space-y-1">
                        {col.sublinks.map((sublink, i) => <li key={i}>
                            <Link href={sublink.link}>{sublink.title}</Link>
                        </li>)}
                    </ul>
                </div>)}
            </div> : null}
    </div>
}