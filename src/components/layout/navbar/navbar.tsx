import Image from "next/image"
import { VaccineLink } from "../link/vaccineLink"
import { VaccineButtonLink } from "../link/vaccineButtonLink"

export function Navbar() {

    const links = [{
        title: 'Home',
        link: '/'
    },
    {
        title: 'Project',
        link: '/project'
    },
    {
        title: 'Tokenomics',
        link: '/tokenomics'
    },
    {
        title: 'Litepaper',
        link: '/litepaper'
    },
    {
        title: 'Career',
        link: '/career'
    },
    {
        title: 'Help',
        link: '/help'
    }]

    return <nav>
        <div className="container mx-auto p-8 flex gap-12">
            <div>
                <Image alt="Vaccine Logo" src={'/logo.png'} width={120} height={64} />
            </div>

            <div className={`flex justify-center items-center gap-6`}>
                {links.map(link => <VaccineLink key={link.link} size="sm" href={link.link}>{link.title}</VaccineLink>)}
            </div>

            <div className="ms-auto inline-flex items-center gap-4">
                <VaccineButtonLink size="sm" buttonType="light" href={'/register'}>Register</VaccineButtonLink>
                <VaccineButtonLink size="sm" buttonType="dark" href={'/sign-in'}>Sign In</VaccineButtonLink>
            </div>
        </div>
    </nav>
}