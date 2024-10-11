import { generateClass } from "../helpers/classHelper";

export const borderUtils = [
  {
    classPrefix: "bc-",
    classLink: "border-collapse",
    utilityClasses: [
      { classSuffix: "c", classValues: ["border-collapse: collapse;"] },
      { classSuffix: "s", classValues: ["border-collapse: separate;"] },
    ],
  },
  {
    classPrefix: "rad-",
    classLink: "border-radius",
    utilityClasses: [
      ...generateClass(["border-radius"], 8, 0.25, { unit: "rem" }),
      { classSuffix: "full", classValues: ["border-radius: 100%;"] },
      { classSuffix: "half", classValues: ["border-radius: 50%;"] },
    ],
  },
  {
    classPrefix: "rad-bl-",
    classLink: "border-radius#bottom-left-radius",
    utilityClasses: [
      ...generateClass(["border-bottom-left-radius"], 8, 0.25, { unit: "rem" }),
      {
        classSuffix: "full",
        classValues: ["border-bottom-left-radius: 100%;"],
      },
      { classSuffix: "half", classValues: ["border-bottom-left-radius: 50%;"] },
    ],
  },
  {
    classPrefix: "rad-br-",
    classLink: "border-radius#bottom-right-radius",
    utilityClasses: [
      ...generateClass(["border-bottom-right-radius"], 8, 0.25, {
        unit: "rem",
      }),
      {
        classSuffix: "full",
        classValues: ["border-bottom-right-radius: 100%;"],
      },
      {
        classSuffix: "half",
        classValues: ["border-bottom-right-radius: 50%;"],
      },
    ],
  },
  {
    classPrefix: "rad-tl-",
    classLink: "border-radius#top-left-radius",
    utilityClasses: [
      ...generateClass(["border-top-left-radius"], 8, 0.25, { unit: "rem" }),
      { classSuffix: "full", classValues: ["border-top-left-radius: 100%;"] },
      { classSuffix: "half", classValues: ["border-top-left-radius: 50%;"] },
    ],
  },
  {
    classPrefix: "rad-tr-",
    classLink: "border-radius#top-right-radius",
    utilityClasses: [
      ...generateClass(["border-top-right-radius"], 8, 0.25, { unit: "rem" }),
      { classSuffix: "full", classValues: ["border-top-right-radius: 100%;"] },
      { classSuffix: "half", classValues: ["border-top-right-radius: 50%;"] },
    ],
  },
  {
    classPrefix: "b-",
    classLink: "border-style",
    utilityClasses: [
      { classSuffix: "none", classValues: ["border-style: none;"] },
      { classSuffix: "d", classValues: ["border-style: dashed;"] },
      { classSuffix: "s", classValues: ["border-style: solid;"] },
    ],
  },
  {
    classPrefix: "b-",
    classLink: "border-width",
    utilityClasses: [...generateClass(["border-width"], 8, 1, { unit: "px" })],
  },
  {
    classPrefix: "bb-",
    classLink: "border-width#border-bottom-width",
    utilityClasses: [
      ...generateClass(["border-bottom-width"], 8, 1, { unit: "px" }),
    ],
  },
  {
    classPrefix: "bl-",
    classLink: "border-width#border-left-width",
    utilityClasses: [
      ...generateClass(["border-left-width"], 8, 1, { unit: "px" }),
    ],
  },
  {
    classPrefix: "br-",
    classLink: "border-width#border-right-width",
    utilityClasses: [
      ...generateClass(["border-right-width"], 8, 1, { unit: "px" }),
    ],
  },
  {
    classPrefix: "bt-",
    classLink: "border-width#border-top-width",
    utilityClasses: [
      ...generateClass(["border-top-width"], 8, 1, { unit: "px" }),
    ],
  },
];
