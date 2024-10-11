import { generateClass } from "../helpers/classHelper";

export const typographyUtils = [
  {
    classPrefix: "ff-",
    classLink: "font-family",
    utilityClasses: [
      {
        classSuffix: "c",
        classValues: ["font-family: Charter, Cambria, serif;"],
      },
      {
        classSuffix: "m",
        classValues: ["font-family: ui-monospace, Consolas, monospace;"],
      },
      {
        classSuffix: "s",
        classValues: ["font-family: system-ui, sans-serif;"],
      },
    ],
  },
  {
    classPrefix: "fs-",
    classLink: "font-size",
    utilityClasses: [
      { classSuffix: "xs", classValues: ["font-size: 0.75rem;"] },
      { classSuffix: "b", classValues: ["font-size: 1rem;"] },
      { classSuffix: "sm", classValues: ["font-size: 1.5rem;"] },
      { classSuffix: "md", classValues: ["font-size: 2.25rem;"] },
      { classSuffix: "lg", classValues: ["font-size: 3rem;"] },
      { classSuffix: "xl", classValues: ["font-size: 3.75rem;"] },
      { classSuffix: "xxl", classValues: ["font-size: 4.5rem;"] },
      { classSuffix: "3xl", classValues: ["font-size: 5.25rem;"] },
      { classSuffix: "6xl", classValues: ["font-size: 6rem;"] },
      { classSuffix: "9xl", classValues: ["font-size: 6.75rem;"] },
    ],
  },
  {
    classPrefix: "fs-",
    classLink: "font-style",
    utilityClasses: [
      { classSuffix: "i", classValues: ["font-style: italic;"] },
      { classSuffix: "n", classValues: ["font-style: normal;"] },
    ],
  },
  {
    classPrefix: "fw-",
    classLink: "font-weight",
    utilityClasses: [
      ...generateClass(["font-weight"], 9, 100, {
        excludeZero: true,
        incrementPrefix: 100,
      }),
    ],
  },
  {
    classPrefix: "lh-",
    classLink: "line-height",
    utilityClasses: [
      { classSuffix: "1", classValues: ["line-height: 1;"] },
      { classSuffix: "2", classValues: ["line-height: 1.25;"] },
      { classSuffix: "3", classValues: ["line-height: 1.375;"] },
      { classSuffix: "4", classValues: ["line-height: 1.5;"] },
      { classSuffix: "5", classValues: ["line-height: 1.625;"] },
      { classSuffix: "6", classValues: ["line-height: 2;"] },
    ],
  },
  {
    classPrefix: "lst-",
    classLink: "list-style-type",
    utilityClasses: [
      { classSuffix: "c", classValues: ["list-style-type: circle;"] },
      { classSuffix: "d", classValues: ["list-style-type: disc;"] },
      { classSuffix: "s", classValues: ["list-style-type: square;"] },
    ],
  },
  {
    classPrefix: "ow-",
    classLink: "overflow-wrap",
    utilityClasses: [
      { classSuffix: "bw", classValues: ["overflow-wrap: break-word;"] },
      { classSuffix: "n", classValues: ["overflow-wrap: normal;"] },
    ],
  },
  {
    classPrefix: "ta-",
    classLink: "text-align",
    utilityClasses: [
      { classSuffix: "c", classValues: ["text-align: center;"] },
      { classSuffix: "e", classValues: ["text-align: end;"] },
      { classSuffix: "j", classValues: ["text-align: justify;"] },
      { classSuffix: "ja", classValues: ["text-align: justify-all;"] },
      { classSuffix: "l", classValues: ["text-align: left;"] },
      { classSuffix: "mp", classValues: ["text-align: match-parent;"] },
      { classSuffix: "r", classValues: ["text-align: right;"] },
      { classSuffix: "s", classValues: ["text-align: start;"] },
    ],
  },
  {
    classPrefix: "tdl-",
    classLink: "text-decoration-line",
    utilityClasses: [
      {
        classSuffix: "lt",
        classValues: ["text-decoration-line: line-through;"],
      },
      { classSuffix: "none", classValues: ["text-decoration-line: none;"] },
      { classSuffix: "o", classValues: ["text-decoration-line: overline;"] },
      { classSuffix: "u", classValues: ["text-decoration-line: underline;"] },
    ],
  },
  {
    classPrefix: "tds-",
    classLink: "text-decoration-style",
    utilityClasses: [
      { classSuffix: "d", classValues: ["text-decoration-style: dashed;"] },
      { classSuffix: "h", classValues: ["text-decoration-style: hidden;"] },
      { classSuffix: "none", classValues: ["text-decoration-style: none;"] },
      { classSuffix: "s", classValues: ["text-decoration-style: solid;"] },
    ],
  },
  {
    classPrefix: "tdt-",
    classLink: "text-decoration-thickness",
    utilityClasses: [
      ...generateClass(["text-decoration-thickness"], 4, 1, {
        unit: "px",
      }),
      {
        classSuffix: "auto",
        classValues: ["text-decoration-thickness: auto;"],
      },
      {
        classSuffix: "ff",
        classValues: ["text-decoration-thickness: from-font;"],
      },
    ],
  },
  {
    classPrefix: "td-",
    classLink: "text-decoration",
    utilityClasses: [
      { classSuffix: "none", classValues: ["text-decoration: none;"] },
      { classSuffix: "u", classValues: ["text-decoration: underline;"] },
    ],
  },
];
