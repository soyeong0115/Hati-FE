export function createTextShadow(width: number, color: string): string {
  const shadows: string[] = [];
  for (let x = -width; x <= width; x++) {
    for (let y = -width; y <= width; y++) {
      if (
        Math.abs(x) === width ||
        Math.abs(y) === width ||
        (Math.abs(x) === Math.abs(y) && Math.abs(x) === width)
      ) {
        shadows.push(`${x}px ${y}px 0 ${color}`);
      }
    }
  }
  return shadows.join(', ');
}

export function createTextStrokeStyle(
  width: number,
  color: string,
): React.CSSProperties {
  return {
    textShadow: createTextShadow(width, color),
  };
}
