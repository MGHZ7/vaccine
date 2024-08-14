import Image from "next/image";
import bg from "./assets/statistics-bg.svg";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { TokenomicsStatisticsChart } from "./tokenomicsStatisticsChart";

export function TokenomicsStatisticsSections() {

    return <section className="relative">
        <div className="absolute bottom-0">
            <Image alt="Background" {...bg} />
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 p-2">
            <article className="pb-8">
                <div className="max-w-sm px-8">
                    <h2 className="text-3xl text-on-primary font-bold">Fund Allocation</h2>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Paragraph>
                </div>
                <div className="mt-8">
                    <TokenomicsStatisticsChart />
                </div>
            </article>
            <article>
            </article>
        </div>
    </section>
}