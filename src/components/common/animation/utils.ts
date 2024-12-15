export interface ConstructPathOfRoundedElementProps {
  width: number;
  height: number;
  borderRadius: number;
  padding: number;
}

export function constructPathOfRoundedDiv({
  width,
  height,
  borderRadius,
  padding,
}: ConstructPathOfRoundedElementProps) {
  const adjustedZero = padding;
  const adjustedWidth = width + padding;
  const adjustedHeight = height + padding;
  const adjustedBorderRadius = borderRadius + padding;

  return `M ${adjustedWidth / 3} ${adjustedHeight}
    L ${adjustedBorderRadius} ${adjustedHeight}
    A ${borderRadius} ${borderRadius} 0 0 1 ${adjustedZero} ${
    adjustedHeight - borderRadius
  }
    L ${adjustedZero} ${adjustedBorderRadius} 
    A ${borderRadius} ${borderRadius} 0 0 1 ${adjustedBorderRadius} ${adjustedZero}
    L ${adjustedWidth - borderRadius} ${adjustedZero}
    A ${borderRadius} ${borderRadius} 0 0 1 ${adjustedWidth} ${adjustedBorderRadius}
    L ${adjustedWidth} ${adjustedHeight - borderRadius}
    A ${borderRadius} ${borderRadius} 0 0 1 ${
    adjustedWidth - borderRadius
  } ${adjustedHeight}
    L ${adjustedBorderRadius} ${adjustedHeight}`;
}
