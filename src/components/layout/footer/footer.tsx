import Image from "next/image";

import logo from '@/app/assets/logo.png';
import emailLogo from "./assets/email.svg";
import locationLogo from "./assets/location.svg";

import { Divider } from "../divider/divider";
import { FooterColumn, FooterColumnsProps } from "./footerColumn";
import { NewsLetterFooterSection } from "./newsLetterFooterSection";
import { SocialMedia } from "../../common/socialMedia/socialMedia";

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
            link: '/#our-team',
            type: 'sm'
        },
        {
            title: 'Advisors',
            link: '/#our-advisors',
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
            link: '/project',
            type: 'sm'
        },
        {
            title: 'VACx Applications',
            link: '/project/applications',
            type: 'sm'
        },
        {
            title: 'Metaverse',
            link: '/project/metaverse',
            type: 'sm'
        },
        {
            title: 'VAC Token Utility',
            link: '/project/pricing',
            type: 'sm'
        }],
    },
    {
        items: [{
            title: 'Tokenomics',
            link: '/tokenomics',
            type: 'lg'
        },
        {
            title: 'How to Buy',
            link: '/tokenomics/#how-to-buy',
            type: 'sm'
        },
        {
            title: 'Token Distribution',
            link: '/tokenomics/#token-distribution',
            type: 'sm'
        },
        {
            title: 'Fund Allocation',
            link: '/tokenomics/#fund-allocation',
            type: 'sm'
        }],
    },
    {
        items: [{
            title: 'Whitepaper',
            link: '/vaccine cmnts web.pdf',
            type: 'lg'
        },
        {
            title: 'Career',
            link: '/about#career',
            type: 'lg'
        },
        {
            title: 'About Us',
            link: '/about',
            type: 'sm'
        },
        {
            title: 'Career',
            link: '/about#career',
            type: 'sm'
        }],
    },
    {
        items: [{
            title: 'Help',
            link: '/help',
            type: 'lg'
        },
        {
            title: 'FAQ',
            link: '/help#FAQs',
            type: 'sm'
        },
        {
            title: 'Get in Touch',
            link: '/help#get-in-touch',
            type: 'sm'
        }],
    }
];

const contactUsColumn: FooterColumnsProps = {
    items: [{
        title: 'Contact Us',
        link: '/',
        type: 'xl',
        prefix: <Image alt="email" {...emailLogo} />
    },
    {
        title: 'Sales@vaclab.net',
        link: '/',
        type: 'sm'
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