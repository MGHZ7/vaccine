import Image from "next/image";

import logo from '@/app/assets/logo.png';
import emailLogo from "./assets/email.svg";
import locationLogo from "./assets/location.svg";

import { Divider } from "../divider/divider";
import { FooterColumn, FooterColumnsProps } from "./footerColumn";
import { NewsLetterFooterSection } from "./newsLetterFooterSection";
import { SocialMedia } from "./socialMedia";

export function Footer() {

    return <footer className={`footer-gradient`}>
        <div className="container mx-auto px-12 py-8 ">
            <section>
                <div>
                    <Image alt="Vaccine Logo" {...logo} />
                    <Divider className="ms-auto !w-5/6 ps-20" type="ltr" />
                </div>
            </section>

            <div className={`grid lg:grid-cols-2 gap-8 mt-12`}>
                <section className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5">
                    {columns.map((column, i) => <FooterColumn key={i} {...column} />)}
                </section>

                <section className="grid md:grid-cols-2 gap-8">
                    <FooterColumn  {...contactUsColumn} />
                    <NewsLetterFooterSection />
                </section>
            </div>
        </div>

        <div className="bg-secondary text-xs font-extralight">
            <div className="container mx-auto p-12 flex flex-col gap-4 lg:flex-row justify-between items-center">
                <div className="">
                    <p>All right reserved © 2021 VAC Labs Inc.</p>
                </div>

                <ul className="inline-flex gap-4 justify-center">
                    <li>
                        Terms & Conditions
                    </li>
                    <li>
                        Privacy Policy
                    </li>
                    <li>
                        Cookies Policy
                    </li>
                </ul>

                <SocialMedia />
            </div>
        </div>

    </footer>
}

const columns: FooterColumnsProps[] = [
    {
        items: [{
            title: 'Home',
            link: '/',
            type: 'lg'
        },
        {
            title: 'Private Sale',
            link: '/#private-sale',
            type: 'sm'
        },
        {
            title: 'Road Map',
            link: '/#road-map',
            type: 'sm'
        },
        {
            title: 'Team',
            link: '/#team',
            type: 'sm'
        },
        {
            title: 'Advisors',
            link: '/#advisors',
            type: 'sm'
        },
        {
            title: 'Featured in',
            link: '/#featured-in',
            type: 'sm'
        }],
    },
    {
        items: [{
            title: 'Project',
            link: '/',
            type: 'lg'
        },
        {
            title: 'VAC Blockchain',
            link: '/#blockchain',
            type: 'sm'
        },
        {
            title: 'VAC Storage',
            link: '/#storage',
            type: 'sm'
        },
        {
            title: 'Decentralized Storage',
            link: '/#decentralized-storage',
            type: 'sm'
        },
        {
            title: 'Advisors',
            link: '/#advisors',
            type: 'sm'
        },
        {
            title: 'VACx Applications',
            link: '/#applications',
            type: 'sm'
        },
        {
            title: 'Metaverse',
            link: '/#metaverse',
            type: 'sm'
        },
        {
            title: 'VAC Token Utility',
            link: '/#token-utility',
            type: 'sm'
        }],
    },
    {
        items: [{
            title: 'Tokenomics',
            link: '/',
            type: 'lg'
        },
        {
            title: 'How to Buy',
            link: '/#how-to-buy',
            type: 'sm'
        },
        {
            title: 'Token Distribution',
            link: '/#token-distribution',
            type: 'sm'
        },
        {
            title: 'Fund Allocation',
            link: '/#fund-allocation',
            type: 'sm'
        }],
    },
    {
        items: [{
            title: 'Litepaper',
            link: '/',
            type: 'lg'
        },
        {
            title: 'Career',
            link: '/',
            type: 'lg'
        },
        {
            title: 'About Us',
            link: '/#about-us',
            type: 'sm'
        },
        {
            title: 'Career',
            link: '/#career',
            type: 'sm'
        },
        {
            title: 'Apply Now',
            link: '/#apply-now',
            type: 'sm'
        }],
    },
    {
        items: [{
            title: 'Help',
            link: '/',
            type: 'lg'
        },
        {
            title: 'FAQ',
            link: '/#faq',
            type: 'sm'
        },
        {
            title: 'Get in Touch',
            link: '/#get-in-touch',
            type: 'sm'
        }],
    }
];

const contactUsColumn: FooterColumnsProps = {
    items: [{
        title: 'Contact Us',
        link: '/',
        type: 'xl'
    },
    {
        title: 'Sales@vaclab.net',
        link: '/',
        type: 'sm',
        prefix: <Image alt="email" {...emailLogo} />
    },
    {
        title: 'Support@vaclab.net',
        link: '/',
        type: 'sm',
    },
    {
        title: 'Info@vaclab.net',
        link: '/',
        type: 'sm',
    },
    {
        title: `Showroom 43, Sunderland Ave, 
                VIC, Ashburton - 3147, Australia`,
        link: '/',
        type: 'sm',
        prefix: <Image alt="email" {...locationLogo} />
    }],
}