'use client'

import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Divider } from "@/components/layout/divider/divider";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { TeamMemberCard } from "@/components/team/teamMemberCard";

export function OurTeamSection({ isVisible }: ElementVisibilityCheckerComponentProps) {

    return <section className={`w-full space-y-16 p-8 ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article className="max-w-lg space-y-4 self-start">
            <div className="flex items-center gap-4">
                <h2 className="text-3xl text-on-primary font-bold">Our Team</h2>
                <Divider className="flex-1 max-w-lg" />
            </div>
            <Paragraph className="text-on-primary">The team behind Stratos have built enterprise-level data infrastructure and implemented a number of complex blockchain systems.
            </Paragraph>
        </article>

        <article className="flex gap-4 justify-center flex-wrap">
            <TeamMemberCard imageSrc="/home/team/team-member.png" name="Jason Andrio" title="Co-Founder" />
            <TeamMemberCard imageSrc="/home/team/team-member.png" name="Jason Andrio" title="Co-Founder" />
            <TeamMemberCard imageSrc="/home/team/team-member.png" name="Jason Andrio" title="Co-Founder" />
            <TeamMemberCard imageSrc="/home/team/team-member.png" name="Jason Andrio" title="Co-Founder" />
            <TeamMemberCard imageSrc="/home/team/team-member.png" name="Jason Andrio" title="Co-Founder" />
            <TeamMemberCard imageSrc="/home/team/team-member.png" name="Jason Andrio" title="Co-Founder" />
            <TeamMemberCard imageSrc="/home/team/team-member.png" name="Jason Andrio" title="Co-Founder" />
            <TeamMemberCard imageSrc="/home/team/team-member.png" name="Jason Andrio" title="Co-Founder" />
        </article>
    </section>
}