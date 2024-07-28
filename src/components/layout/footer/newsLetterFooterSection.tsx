import { VaccineButtonLink } from "../link/vaccineButtonLink";

export function NewsLetterFooterSection() {

    return <article className="flex flex-col gap-4 text-center">
        <h4 className="text-xl">
            Newsletter
        </h4>
        <input placeholder="Enter your email" />
        <VaccineButtonLink href={'/'} buttonType="dark">Subscribe Now</VaccineButtonLink>
    </article>
}