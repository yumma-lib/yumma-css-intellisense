import { generateShades } from "./helpers/colorHelper";

export const baseColors = [
  { name: "red", hex: "#d73d3d" },
  { name: "orange", hex: "#e06814" },
  { name: "yellow", hex: "#d3a107" },
  { name: "green", hex: "#1fb155" },
  { name: "teal", hex: "#12a695" },
  { name: "cyan", hex: "#05a4bf" },
  { name: "blue", hex: "#3575dd" },
  { name: "indigo", hex: "#595cd9" },
  { name: "violet", hex: "#7d53dd" },
  { name: "pink", hex: "#d4418a" },
  { name: "silver", hex: "#bfc2c7" },
  { name: "gray", hex: "#606773" },
  { name: "lead", hex: "#3f3f4e" },
  { name: "white", hex: "#ffffff" },
  { name: "black", hex: "#000000" },
  { name: "transparent", hex: "transparent" },
].flatMap((color) => {
  if (["black", "white", "transparent"].includes(color.name.toLowerCase())) {
    return [
      {
        className: `${color.name.toLowerCase()}`,
        classValue: color.hex,
      },
    ];
  }

  const { lightShades, baseColor, darkShades } = generateShades(color.hex);

  const shades = [
    ...lightShades.map((shade, index) => ({
      className: `l-${color.name.toLowerCase()}-${6 - index}`,
      classValue: shade,
    })),
    {
      className: `${color.name.toLowerCase()}`,
      classValue: baseColor,
    },
    ...darkShades.map((shade, index) => ({
      className: `d-${color.name.toLowerCase()}-${index + 1}`,
      classValue: shade,
    })),
  ];

  return shades;
});
