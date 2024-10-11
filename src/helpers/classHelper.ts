interface GenerateClassOptions {
  unit?: string;
  excludeZero?: boolean;
  incrementName?: string;
  incrementPrefix?: number;
  round?: number;
}

export function generateClass(
  propNames: string[],
  range: number,
  incrementValue: number,
  options: GenerateClassOptions = {}
): { classSuffix: string; classValues: string[] }[] {
  const classes = [];
  const startIndex = options.excludeZero ? 1 : 0;

  for (let i = startIndex; i <= range; i++) {
    const classSuffix = `${(options.incrementPrefix ?? 1) * i}`;

    const classValues = propNames.map((property) => {
      let value = i * incrementValue;

      if (options.round !== undefined) {
        value = parseFloat(value.toFixed(options.round));
      }

      if (options.incrementName) {
        return `${property}: ${options.incrementName.replace(
          /%i/g,
          value.toString()
        )};`;
      }

      return `${property}: ${value}${options.unit || ""};`;
    });

    classes.push({ classSuffix, classValues });
  }

  return classes;
}
