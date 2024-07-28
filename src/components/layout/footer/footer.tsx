import Image from "next/image";

import logo from '@/app/assets/logo.png';
import { Divider } from "../divider/divider";
import { FooterColumn, FooterColumnsProps } from "./footerColumn";

export function Footer() {

    return <footer className={`px-12 py-8 footer-gradient`}>
        <div className="container mx-auto">
            <section>
                <div>
                    <Image alt="Vaccine Logo" {...logo} />
                    <Divider className="ms-auto !w-5/6 ps-20" type="ltr" />
                </div>
            </section>

            <section className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 mt-12">
                {columns.map((column, i) => <FooterColumn key={i} {...column} />)}
            </section>
        </div>
    </footer>
}

const columns: FooterColumnsProps[] = [{
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
}]