import { generateClass } from "../helpers/classHelper";

export const outlineUtils = [
  {
    classPrefix: "oo-",
    classLink: "outline-offset",
    utilityClasses: [
      ...generateClass(["outline-offset"], 4, 1, {
        unit: "px",
      }),
    ],
  },
  {
    classPrefix: "os-",
    classLink: "outline-style",
    utilityClasses: [
      { classSuffix: "none", classValues: ["outline-style: none;"] },
      { classSuffix: "d", classValues: ["outline-style: dashed;"] },
      { classSuffix: "h", classValues: ["outline-style: hidden;"] },
      { classSuffix: "s", classValues: ["outline-style: solid;"] },
    ],
  },
  {
    classPrefix: "ow-",
    classLink: "outline-width",
    utilityClasses: [
      ...generateClass(["outline-width"], 4, 1, {
        unit: "px",
      }),
    ],
  },
];
