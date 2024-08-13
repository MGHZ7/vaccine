import Image from "next/image";

import decentralizedStructure from "./assets/decentralized-structure.svg";
import transactionSpeed from "./assets/transaction-speed.svg";
import reliability from "./assets/reliability.svg";
import costSaving from "./assets/cost-saving.svg";

export function BlockchainSpecificationsSection() {
    return <section className="grid grid-cols-2 gap-16 justify-between items-stretch w-full">
        <article className="flex flex-col justify-between items-center">
            <Image className="w-56" alt="Decentralized structure" {...decentralizedStructure} />

            <div className="mt-4">
                <h3 className="text-2xl font-bold">Decentralized structure</h3>
            </div>
        </article>

        <article className="flex flex-col justify-between items-center">
            <Image className="w-56" alt="Transaction speed" {...transactionSpeed} />

            <div className="mt-4">
                <h3 className="text-2xl font-bold">Transaction speed</h3>
            </div>
        </article>

        <article className="flex flex-col justify-between items-center">
            <Image className="w-56" alt="Reliability" {...reliability} />

            <div className="mt-4">
                <h3 className="text-2xl font-bold">Reliability</h3>
            </div>
        </article>

        <article className="flex flex-col justify-between items-center">
            <Image className="w-56" alt="Cost savings " {...costSaving} />

            <div className="mt-4">
                <h3 className="text-2xl font-bold">Cost savings </h3>
            </div>
        </article>
    </section>
}