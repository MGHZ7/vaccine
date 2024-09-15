import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { bsc, polygon } from "wagmi/chains";

export const wagmiProjectId = "ffcdd4156eceecf1603b8090caf60f88";

// 2. Create wagmiConfig
export const wagmiMetadata = {
  name: "Vaccine let Sale",
  // linkAPIUrl : "https://vaccine.com" ,
  icons: ["https://vaccine.com/litepaper/imgs/logo.png"],
  description: "AppKit Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
};

const chains = [bsc, polygon] as const;

export const wagmiConfigs = defaultWagmiConfig({
  chains,
  projectId: wagmiProjectId,
  metadata: wagmiMetadata,
});

createWeb3Modal({
  metadata: wagmiMetadata,
  wagmiConfig: wagmiConfigs,
  projectId: wagmiProjectId,
  enableAnalytics: true,
});
