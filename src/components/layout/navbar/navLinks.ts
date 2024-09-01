export const navLinks: NavbarLinkProps[] = [
  {
    title: "Home",
    link: "/",
    columns: [
      {
        head: {
          title: "Private Sale",
          link: "#private-sale",
        },
        sublinks: [],
      },
      {
        head: {
          title: "About The Project",
          link: "#about-the-project",
        },
        sublinks: [],
      },
      {
        head: {
          title: "Road Map",
          link: "#road-map",
        },
        sublinks: [],
      },
      {
        head: {
          title: "Our Team",
          link: "#our-team",
        },
        sublinks: [],
      },
      {
        head: {
          title: "Our Advisors",
          link: "#our-advisors",
        },
        sublinks: [],
      },
      {
        head: {
          title: "Featured In",
          link: "#featured-in",
        },
        sublinks: [],
      },
    ],
  },
  {
    title: "Project",
    link: "/project",
    columns: [
      {
        head: {
          title: "VAC Blockchain",
          link: "/project",
        },
        sublinks: [],
      },
      {
        head: {
          title: "VAC Applications",
          link: "/project/applications",
        },
        sublinks: [
          {
            title: "VAC Web Platform",
            link: "/project/applications#web-platform",
          },
          {
            title: "VAC Mobile Apps",
            link: "/project/applications#mobile-apps",
          },
          {
            title: "VAC Supply Chain",
            link: "/project/applications#supply-chain",
          },
        ],
      },
      {
        head: {
          title: "Metaverse",
          link: "/project/metaverse",
        },
        sublinks: [],
      },
      {
        head: {
          title: "VAC Token Utility",
          link: "/project/pricing",
        },
        sublinks: [],
      },
    ],
  },
  {
    title: "Tokenomics",
    link: "/tokenomics",
    columns: [],
  },
  {
    title: "Litepaper",
    link: "/litepaper",
    columns: [],
  },
  {
    title: "Career",
    link: "/career",
    columns: [],
  },
  {
    title: "Help",
    link: "/help",
    columns: [],
  },
];

export interface NavbarLinkType {
  title: string;
  link: string;
}

export interface NavbarLinkProps {
  title: string;
  link: string;
  columns: {
    head: NavbarLinkType;
    sublinks: NavbarLinkType[];
  }[];
}
