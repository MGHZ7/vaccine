import Image from "next/image";

import image from "./assets/vac-nodes.png";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { Divider } from "@/components/layout/divider/divider";

export function VacNodesSection() {
    return <section >
        <div>
            <h2 className="text-3xl">Vac Nodes</h2>
            <Divider className="max-w-md mt-2" />
        </div>

        <article className="grid lg:grid-cols-2 gap-8 px-28 mt-8">
            <Image alt="VAC Nodes" {...image} />
            <div>
                <h3 className="text-3xl mb-8">How It Works</h3>
                <div className="space-y-4">
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Paragraph>

                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Paragraph>

                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Paragraph>

                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Paragraph>
                </div>
            </div>
        </article>
    </section>
}