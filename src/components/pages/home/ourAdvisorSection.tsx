import { Divider } from "@/components/layout/divider/divider";
import { AdvisorCardProps } from "@/components/team/advisor/card/advisorCard";
import { AdvisorsSlider } from "@/components/team/advisor/slider/advisorsSlider";

export function OurAdvisorSection() {

    return <section className="w-full space-y-16 p-8">
        <article className="max-w-lg space-y-4 self-start">
            <div className="flex items-center gap-4">
                <h2 className="text-3xl text-on-primary font-bold">Our Team</h2>
                <Divider className="flex-1 max-w-lg" />
            </div>
            <p className="text-xs text-on-primary font-extralight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </article>

        <section>
            <AdvisorsSlider advisors={advisors} />
        </section>
    </section>
}

const advisors: AdvisorCardProps[] = [{
    name: 'Jason Andrio',
    imageSrc: '/home/advisor/advisor.png'
},
{
    name: 'Jason Andrio',
    imageSrc: '/home/advisor/advisor.png'
},
{
    name: 'Jason Andrio',
    imageSrc: '/home/advisor/advisor.png'
},
{
    name: 'Jason Andrio',
    imageSrc: '/home/advisor/advisor.png'
},
{
    name: 'Jason Andrio',
    imageSrc: '/home/advisor/advisor.png'
}]