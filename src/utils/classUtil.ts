export function generateClass(properties: string[], range: number, increment: number, unit: string): { classSuffix: string, classValue: string[] }[] {
	const classes = [];

	for (let i = 0; i <= range; i++) {
		const classSuffix = i.toString();
		const classValue = properties.map(property => `${property}: ${increment * i}${unit};`);
		classes.push({ classSuffix, classValue });
	}

	return classes;
}