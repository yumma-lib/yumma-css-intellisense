import { generateShades } from '../utils/shadeUtil';

export const colors = [
    { name: 'red', baseColor: 'rgba(215, 61, 61)' },
    { name: 'orange', baseColor: 'rgba(224, 104, 20)' },
    { name: 'yellow', baseColor: 'rgba(211, 161, 7)' },
    { name: 'green', baseColor: 'rgba(31, 177, 85)' },
    { name: 'teal', baseColor: 'rgba(18, 166, 149)' },
    { name: 'cyan', baseColor: 'rgba(5, 164, 191)' },
    { name: 'blue', baseColor: 'rgba(53, 117, 221)' },
    { name: 'indigo', baseColor: 'rgba(89, 92, 217)' },
    { name: 'violet', baseColor: 'rgba(125, 83, 221)' },
    { name: 'pink', baseColor: 'rgba(212, 65, 138)' },
    { name: 'gray', baseColor: 'rgba(96, 103, 115)' },
    { name: 'lead', baseColor: 'rgba(63, 63, 78)' },
].flatMap(color => {
    const { lightShades, baseColor, darkShades } = generateShades(color.baseColor);

    const shades = [
        ...lightShades.map((shade, index) => ({
            className: `d-${color.name.toLowerCase()}-${index + 1}`,
            classValue: shade,
            classLink: 'background-color'
        })),
        {
            className: `${color.name.toLowerCase()}`,
            classValue: baseColor,
            classLink: 'background-color'
        },
        ...darkShades.map((shade, index) => ({
            className: `l-${color.name.toLowerCase()}-${index + 1}`,
            classValue: shade,
            classLink: 'background-color'
        }))
    ];

    return shades;
});