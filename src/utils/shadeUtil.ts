import tinycolor = require("tinycolor2");

/**
 * @param color1 - First color
 * @param color2 - Second color.
 * @param weight - Mix weight (0-100).
 * @returns Mixed color as a hex string.
 */
const mixColors = (color1: string, color2: string, weight: number): string => {
  return tinycolor.mix(color1, color2, weight).toHexString();
};

/**
 * Creates shades for a given hue.
 * @param color - Base color
 * @returns An object with arrays of light, base, and dark shades.
 */
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
