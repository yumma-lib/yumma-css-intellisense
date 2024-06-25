import { generateShades } from '../utils/shadeUtil';

export const colors = [
    { name: 'red', baseColor: 'rgba(215, 61, 61, 1)' },
    { name: 'orange', baseColor: 'rgba(224, 104, 20, 1)' },
    { name: 'yellow', baseColor: 'rgba(211, 161, 7, 1)' },
    { name: 'green', baseColor: 'rgba(31, 177, 85, 1)' },
    { name: 'teal', baseColor: 'rgba(18, 166, 149, 1)' },
    { name: 'cyan', baseColor: 'rgba(5, 164, 191, 1)' },
    { name: 'blue', baseColor: 'rgba(53, 117, 221, 1)' },
    { name: 'indigo', baseColor: 'rgba(89, 92, 217, 1)' },
    { name: 'violet', baseColor: 'rgba(125, 83, 221, 1)' },
    { name: 'pink', baseColor: 'rgba(212, 65, 138, 1)' },
    { name: 'gray', baseColor: 'rgba(96, 103, 115, 1)' },
    { name: 'lead', baseColor: 'rgba(63, 63, 78, 1)' },
    { name: 'black', baseColor: 'rgba(0, 0, 0, 1)' },
    { name: 'white', baseColor: 'rgba(255, 255, 255, 1)' },
    { name: 'transparent', baseColor: 'transparent' }
].flatMap(color => {
    if (['black', 'white', 'transparent'].includes(color.name.toLowerCase())) {
        return [{
            className: `${color.name.toLowerCase()}`,
            classValue: color.baseColor,
            classLink: 'background-color'
        }];
    }

    const { lightShades, baseColor, darkShades } = generateShades(color.baseColor);

    const shades = [
        ...lightShades.map((shade, index) => ({
            className: `l-${color.name.toLowerCase()}-${index + 1}`,
            classValue: shade,
            classLink: 'background-color'
        })),
        {
            className: `${color.name.toLowerCase()}`,
            classValue: baseColor,
            classLink: 'background-color'
        },
        ...darkShades.map((shade, index) => ({
            className: `d-${color.name.toLowerCase()}-${index + 1}`,
            classValue: shade,
            classLink: 'background-color'
        }))
    ];

    return shades;
});
