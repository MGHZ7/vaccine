import ElementVisibilityChecker, { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { PercentageLine } from "@/components/common/percentageLine";
import { TransparentCard } from "@/components/layout/card/transparentCard";

export function TokenDistributionSection({ isVisible }: ElementVisibilityCheckerComponentProps) {

    return <TransparentCard id="token-distribution" className={`p-4 overflow-visible ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <h2 className="text-xl ms:text-3xl font-bold">TOKEN DISTRIBUTION</h2>

        <ElementVisibilityChecker ComponentToShow={PercentageLine} props={{
            points
        }} />

    </TransparentCard>
}

const points = [{
    percentage: 15,
    title: 'Private Sale'
},
{
    percentage: 40,
    title: 'Public Sale'
},
{
    percentage: 25,
    title: 'Team'
},
{
    percentage: 5,
    title: 'Advisors'
},
{
    percentage: 5,
    title: ''
},
{
    percentage: 5,
    title: 'Partners & Ecosystem'
}];