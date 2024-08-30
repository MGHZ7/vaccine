export enum ScreenSizes {
  xs = 0,
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  xl2 = 1536,
}

export const getScreenWidthClass = (width: number) => {
  if (width < ScreenSizes.sm) {
    return ScreenSizes.xs;
  } else if (width < ScreenSizes.md) {
    return ScreenSizes.sm;
  } else if (width < ScreenSizes.lg) {
    return ScreenSizes.md;
  } else if (width < ScreenSizes.xl) {
    return ScreenSizes.lg;
  } else if (width < ScreenSizes.xl2) {
    return ScreenSizes.xl;
  }

  return ScreenSizes.xl2;
};
