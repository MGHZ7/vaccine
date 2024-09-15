'use client'

import { useState } from "react";
import { VaccineButtonLink } from "../layout/link/vaccineButtonLink";
import { useWeb3Modal } from "@web3modal/wagmi/react";


export function ConnectWalletButton() {

    const { open, close } = useWeb3Modal();
    const [isLoading, setIsLoading] = useState(false);
    console.log("🚀 ~ ConnectWalletButton ~ isLoading:", isLoading);


    const openWalletModal = async () => {
        setIsLoading(true);
        await open();
        setIsLoading(false);
    }

    return <VaccineButtonLink
        size="sm"
        elementType="button"
        styleType="dark"
        onClick={openWalletModal}
        isLoading={isLoading}>
        Connect Wallet
    </VaccineButtonLink>

}