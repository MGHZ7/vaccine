'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode, useEffect } from "react"

import { createWeb3Modal } from "@web3modal/wagmi";
import { wagmiProjectId, wagmiConfigs, wagmiMetadata } from "@/configs/walletConfigs";
import { WagmiProvider } from "wagmi";

export interface RootProviderProps {
    children?: ReactNode
}

export function RootProvider({ children }: RootProviderProps) {

    const queryClient = new QueryClient()

    return <WagmiProvider config={wagmiConfigs}>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    </WagmiProvider>
}