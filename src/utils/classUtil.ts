export function generateClass(properties: string[], amount: number, base: number, unit: string): { classSuffix: string, classValue: string[] }[] {
	const classes = [];

	for (let i = 0; i <= amount; i++) {
		const classSuffix = i.toString();
		const classValue = properties.map(property => `${property}: ${base * i}${unit};`);
		classes.push({ classSuffix, classValue });
	}

	return classes;
}