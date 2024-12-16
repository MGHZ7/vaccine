import { VaccineButtonLink } from "@/components/common/link/vaccineButtonLink";

export interface PricingPlanProps {
    title: string;
    price: number;
    per?: string;
    notes?: string;
    features: string[]
}

export function PricingPlan({ title, price, per, features, notes }: PricingPlanProps) {

    return <article className="flex flex-col shadow-sm">
        <div className="p-4 rounded border border-primary border-opacity-20 text-center">
            <h4 className="text-lg font-bold">{title}</h4>
            <p className="text-primary font-bold">{price} {price > 0 ? <span>USDT</span> : ''}</p>
        </div>

        <div className="text-center py-4 space-y-8">
            <p className="text-xs text-gray-400">{per}</p>
            <p className="text-primary font-semibold">Top Features:</p>
        </div>

        <div className="h-72 overflow-auto">
            <ul className="text-lg font-light space-y-2 mt-8">
                {features.map((feature, i) => <li key={i}>{feature}</li>)}
            </ul>
            <p className="text-gray-400 text-xs mt-4">{notes}</p>
        </div>

        <VaccineButtonLink
            className="text-center mt-auto"
            styleType={"dark-gradient"}
            href={""}>
            Buy Now
        </VaccineButtonLink>
    </article>
}