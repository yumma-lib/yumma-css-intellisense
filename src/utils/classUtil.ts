export function generateClass(prefix: string, description: string, props: string[], max: number, base: number, unit: string): { name: string, property: string }[] {
    const utilities = [];
    for (let i = 0; i <= max; i++) {
        const value = (i * base).toFixed(2);
        const properties = props.map(prop => `${prop}: ${value}${unit};`).join(' ');
        utilities.push({ name: `${i}`, property: properties });
    }
    return utilities;
}
