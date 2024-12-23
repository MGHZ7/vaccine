import Image from "next/image";

import image from "./assets/vac-nodes.png";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { Divider } from "@/components/layout/divider/divider";
import { ElementVisibilityCheckerComponentProps, } from "@/components/common/elementInViewPort";
import { Heading } from "@/components/layout/header/heading";

export function VacNodesSection({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <section className={`${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <div className="max-w-lg">
            <Heading showDivider>Vac Nodes</Heading>
        </div>

        <article className="grid lg:grid-cols-2 gap-14 items-center sm:pl-24 sm:pr-8 mt-8">
            <Image alt="VAC Nodes" {...image} />
            <div>
                <h3 className="text-3xl mb-8">How It Works</h3>
                <div className="space-y-4">
                    <Paragraph>
                        VAC DS program, a selection of reputable Nodes is randomly chosen, and the program then endeavors to distribute data to a broader array of these Nodes. Each of the 20 encrypted pieces is assigned to these Nodes, with duplicated encrypted copies stored at other geographically dispersed nodes to minimize global latency.
                        <br />
                        <br />
                        VAC DS operates by storing small encrypted data fragments randomly on your Node. After configuring your Node, the process largely involves ensuring its operational status. The remaining tasks are managed by VAC DS, streamlining the data storage and distribution process.
                        <br />
                        <br />
                    </Paragraph>
                    <div className="text-sm mb-2">
                        <h6 className="text-primary">Instructions:</h6>
                        <ul>
                            <li>Connect external Hard disk to VAC 016X</li>
                            <li> Connect to network</li>
                            <li> Install the VAC software</li>
                            <li> Create an account</li>
                            <li>Connect your wallet</li>
                            <li> Run mining and enjoy earnings</li>
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    </section>
}