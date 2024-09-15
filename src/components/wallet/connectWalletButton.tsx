'use client'

import { useState } from "react";
import { VaccineButtonLink } from "../layout/link/vaccineButtonLink";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useDisconnect } from "wagmi";


export function ConnectWalletButton() {

    const { open } = useWeb3Modal();
    const { isConnected } = useAccount()
    const { disconnectAsync } = useDisconnect();
    const [isLoading, setIsLoading] = useState(false);

    const openWalletModal = async () => {
        await open();
    }

    const toggleConnect = async () => {
        setIsLoading(true);
        await (isConnected ? disconnectAsync() : openWalletModal());
        setIsLoading(false);
    }

    return <VaccineButtonLink
        size="sm"
        elementType="button"
        styleType="dark"
        onClick={toggleConnect}
        isLoading={isLoading}>
        {isConnected ? 'Disconnect Wallet' : 'Connect Wallet'}
    </VaccineButtonLink>

}