import { PercentageLine } from "@/components/common/percentageLine";
import { TransparentCard } from "@/components/layout/card/transparentCard";

export function TokenDistributionSection() {

    return <TransparentCard className="p-4 overflow-visible">
        <h2 className="text-xl ms:text-3xl font-bold">TOKEN DISTRIBUTION</h2>

        <PercentageLine points={[{
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
        }]} />
    </TransparentCard>
}