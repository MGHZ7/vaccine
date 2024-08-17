import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { TransparentCard } from "@/components/layout/card/transparentCard";
import { VaccineButtonLink } from "@/components/layout/link/vaccineButtonLink";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { title } from "process";
import { PricingPlan, PricingPlanProps } from "./pricingPlan";

export function PricingPlansSection({ isVisible }: ElementVisibilityCheckerComponentProps) {

    return <section className={` ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <h2 className="text-2xl font-bold">
            Subscribe to
            access our Medical
            Decentralized Platform
        </h2>
        <p className="text-xs text-primary">More details</p>

        <article className="p-8">
            <div className={`relative ${isVisible ? 'animate-fade-in' : 'animate-fade-out'} mt-8`}>
                <TransparentCard className="hidden md:block !absolute -top-12 -right-5 h-28 w-20 animate-moving-around " />
                <TransparentCard className="hidden md:block !absolute -bottom-12 -left-5 h-40 w-56 -z-20 animate-moving-around" />
                <TransparentCard showLightingPoint className="transition-all relative w-full z-10 hover:scale-105 hover:bg-opacity-60 bg-opacity-50">
                    <div className="p-8">
                        <div className="grid md:grid-cols-2 items-end">
                            <div>
                                <h3 className="text-on-primary text-3xl font-bold">Choose Your Plan</h3>
                                <p className="text-xs text-primary mt-4">Individual | Business</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 max-w-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                                </p>
                            </div>
                        </div>
                        <div className="relative grid md:grid-cols-3 gap-8 my-8 space-y-16 md:space-y-0">
                            {plans.map(plan => <PricingPlan key={plan.title} {...plan} />)}
                        </div>
                    </div>
                </TransparentCard>
            </div>
        </article>
    </section>
}

const plans: PricingPlanProps[] = [{
    title: 'Free Plan',
    price: 0,
    per: '0',
    features: ['Apple & Android access', 'Unlimited Data', 'App Alert & Reminders']
},
{
    title: 'Solo Basic',
    price: 5,
    per: 'per user, yearly',
    features: ['Apple & Android access', 'Unlimited Data', 'App Alert & Reminders']
},
{
    title: 'Solo Professional',
    price: 10,
    per: 'per user, yearly',
    features: ['Apple & Android access', 'Unlimited Data', 'App Alert & Reminders', 'Medical Card'],
    notes: '*Shipping Cost will be charged seperately'
}]