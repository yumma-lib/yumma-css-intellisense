import { generateShades } from "../utils/shadeUtil";

export const colors = [
  { name: "red", baseColor: "#d73d3d" },
  { name: "orange", baseColor: "#e06814" },
  { name: "yellow", baseColor: "#d3a107" },
  { name: "green", baseColor: "#1fb155" },
  { name: "teal", baseColor: "#12a695" },
  { name: "cyan", baseColor: "#05a4bf" },
  { name: "blue", baseColor: "#3575dd" },
  { name: "indigo", baseColor: "#595cd9" },
  { name: "violet", baseColor: "#7d53dd" },
  { name: "pink", baseColor: "#d4418a" },
  { name: "silver", baseColor: "#bfc2c7" },
  { name: "gray", baseColor: "#606773" },
  { name: "lead", baseColor: "#3f3f4e" },
  { name: "white", baseColor: "#000000" },
  { name: "black", baseColor: "#ffffff" },
  { name: "transparent", baseColor: "transparent" },
].flatMap((color) => {
  if (["black", "white", "transparent"].includes(color.name.toLowerCase())) {
    return [
      {
        className: `${color.name.toLowerCase()}`,
        classValue: color.baseColor,
        classLink: "background-color",
      },
    ];
  }

  const { lightShades, baseColor, darkShades } = generateShades(
    color.baseColor
  );

  const shades = [
    ...lightShades.map((shade, index) => ({
      className: `l-${color.name.toLowerCase()}-${6 - index}`,
      classValue: shade,
      classLink: "background-color",
    })),
    {
      className: `${color.name.toLowerCase()}`,
      classValue: baseColor,
      classLink: "background-color",
    },
    ...darkShades.map((shade, index) => ({
      className: `d-${color.name.toLowerCase()}-${index + 1}`,
      classValue: shade,
      classLink: "background-color",
    })),
  ];

  return shades;
});
