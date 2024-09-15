const chains = [bsc, polygon];

const projectId = "ffcdd4156eceecf1603b8090caf60f88";

const publicClient = configureChains(chains, [
  w3mProvider({
    projectId: projectId,
  }),
]).publicClient;

let wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    ...w3mConnectors({ projectId: projectId, chains: chains }),
    new CoinbaseWalletConnector({
      chains: chains,
      options: {
        appName: "Vaccine let Sale",
        // linkAPIUrl : "https://vaccine.com" ,
        appLogoUrl: "https://vaccine.com/litepaper/imgs/logo.png",
      },
    }),
  ],
  publicClient: publicClient,
});

export { publicClient, chains, projectId, wagmiConfig };
