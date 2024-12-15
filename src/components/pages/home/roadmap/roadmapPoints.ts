export interface PathPointInfoDto {
  x: number;
  y: number;
  totalLength: number;
  name?: string;
}

export const roadmapPoints = {
  websiteLaunch: { x: 81, y: 1274, totalLength: 306, name: "Q2 2021" },
  publicSale: {
    x: -12.355414390563965,
    y: 1452.970458984375,
    totalLength: 571,
    name: "Q3 2021",
  },
  mobileApps: {
    x: 455.6326904296875,
    y: 1313.122314453125,
    totalLength: 1115,
    name: "Q4 2021",
  },
  storage: {
    x: 70.2257308959961,
    y: 1685.6248779296875,
    totalLength: 1708,
    name: "Q1 2022",
  },
  clientPlatform: {
    x: 754.5462036132812,
    y: 1407.0960693359375,
    totalLength: 2516,
    name: "Q2 2022",
  },
  salesLaunching: {
    x: 408.36444091796875,
    y: 1808.34619140625,
    totalLength: 3191,
    name: "Q3 2022",
  },
  salesPhaseTwo: {
    x: 914.626220703125,
    y: 1586.5517578125,
    totalLength: 3773,
    name: "Q4 2022",
  },
} as const;
