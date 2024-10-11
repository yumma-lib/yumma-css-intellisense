import { generateClass } from "../helpers/classHelper";

export const gridUtils = [
  {
    classPrefix: "cg-",
    classLink: "column-gap",
    utilityClasses: [
      ...generateClass(["column-gap"], 16, 0.25, { unit: "rem" }),
    ],
  },
  {
    classPrefix: "g-",
    classLink: "gap",
    utilityClasses: [...generateClass(["gap"], 16, 0.25, { unit: "rem" })],
  },
  {
    classPrefix: "gac-",
    classLink: "grid-auto-columns",
    utilityClasses: [
      { classSuffix: "min", classValues: ["grid-auto-columns: min-content;"] },
      { classSuffix: "max", classValues: ["grid-auto-columns: max-content;"] },
      { classSuffix: "auto", classValues: ["grid-auto-columns: auto;"] },
    ],
  },
  {
    classPrefix: "gaf-",
    classLink: "grid-auto-flow",
    utilityClasses: [
      { classSuffix: "c", classValues: ["grid-auto-flow: column;"] },
      { classSuffix: "d", classValues: ["grid-auto-flow: dense;"] },
      { classSuffix: "dr", classValues: ["grid-auto-flow: dense row;"] },
      { classSuffix: "r", classValues: ["grid-auto-flow: row;"] },
      { classSuffix: "rd", classValues: ["grid-auto-flow: row dense;"] },
    ],
  },
  {
    classPrefix: "gar-",
    classLink: "grid-auto-rows",
    utilityClasses: [
      { classSuffix: "min", classValues: ["grid-auto-rows: min-content;"] },
      { classSuffix: "max", classValues: ["grid-auto-rows: max-content;"] },
      { classSuffix: "auto", classValues: ["grid-auto-rows: auto;"] },
    ],
  },
  {
    classPrefix: "gc-s-",
    classLink: "grid-column",
    utilityClasses: [
      ...generateClass(["grid-column"], 16, 1, {
        excludeZero: true,
        incrementName: "span %i / span %i",
      }),
    ],
  },
  {
    classPrefix: "gce-",
    classLink: "grid-column-end",
    utilityClasses: [
      ...generateClass(["grid-column-end"], 16, 1),
      { excludeZero: true },
    ],
  },
  {
    classPrefix: "gcs-",
    classLink: "grid-column-start",
    utilityClasses: [
      ...generateClass(["grid-column"], 16, 1),
      { excludeZero: true },
    ],
  },
  {
    classPrefix: "gr-s-",
    classLink: "grid-row",
    utilityClasses: [
      ...generateClass(["grid-row"], 16, 1, {
        excludeZero: true,
        incrementName: "span %i / span %i",
      }),
    ],
  },
  {
    classPrefix: "gre-",
    classLink: "grid-row-end",
    utilityClasses: [
      ...generateClass(["grid-row-end"], 16, 1, {
        excludeZero: true,
        unit: "rem",
      }),
    ],
  },
  {
    classPrefix: "grs-",
    classLink: "grid-row-start",
    utilityClasses: [
      ...generateClass(["grid-row-start"], 16, 1, { excludeZero: true }),
    ],
  },
  {
    classPrefix: "gtc-",
    classLink: "grid-template-columns",
    utilityClasses: [
      ...generateClass(["grid-template-columns"], 16, 1, {
        excludeZero: true,
        incrementName: "repeat(%i, minmax(0, 1fr))",
      }),
    ],
  },
  {
    classPrefix: "gtr-",
    classLink: "grid-template-rows",
    utilityClasses: [
      ...generateClass(["grid-template-rows"], 16, 1, {
        excludeZero: true,
        incrementName: "repeat(%i, minmax(0, 1fr))",
      }),
    ],
  },
  {
    classPrefix: "rg-",
    classLink: "row-gap",
    utilityClasses: [...generateClass(["row-gap"], 16, 0.25, { unit: "rem" })],
  },
];
