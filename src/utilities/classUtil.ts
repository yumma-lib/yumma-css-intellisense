export function generateClass(
  properties: string[],
  range: number,
  increment: number,
  unit: string
): { classSuffix: string; classValues: string[] }[] {
  const classes = [];

  for (let i = 0; i <= range; i++) {
    const classSuffix = i.toString();
    const classValues = properties.map(
      (property) => `${property}: ${increment * i}${unit};`
    );
    classes.push({ classSuffix, classValues });
  }

  return classes;
}
