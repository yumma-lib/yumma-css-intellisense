import tinycolor = require("tinycolor2");

const mixColors = (color1: string, color2: string, weight: number): string => {
  return tinycolor.mix(color1, color2, weight).toHexString();
};

export const generateShades = (
  color: string
): { lightShades: string[]; baseColor: string; darkShades: string[] } => {
  const lightShades: string[] = [];
  const darkShades: string[] = [];

  for (let i = 6; i >= 1; i--) {
    lightShades.push(mixColors(color, "white", i * 10));
  }

  const baseColor = color;

  for (let i = 1; i <= 6; i++) {
    darkShades.push(mixColors(color, "black", i * 10));
  }

  return { lightShades, baseColor, darkShades };
};