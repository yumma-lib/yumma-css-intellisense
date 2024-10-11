import { generateClass } from "../helpers/classHelper";

export const layoutUtils = [
  {
    classPrefix: "ar-",
    classLink: "aspect-ratio",
    utilityClasses: [
      { classSuffix: "auto", classValues: ["aspect-ratio: auto;"] },
      { classSuffix: "l", classValues: ["aspect-ratio: 16/9;"] },
      { classSuffix: "s", classValues: ["aspect-ratio: 1/1;"] },
    ],
  },
  {
    classPrefix: "cols-",
    classLink: "columns",
    utilityClasses: [
      ...generateClass(["columns"], 16, 1, {
        excludeZero: true,
      }),
    ],
  },
  {
    classPrefix: "dir-b-",
    classLink: "direction",
    utilityClasses: [
      ...generateClass(["bottom"], 16, 0.25, { unit: "rem" }),
      { classSuffix: "none", classValues: ["bottom: none;"] },
    ],
  },
  {
    classPrefix: "dir-i-",
    classLink: "direction#inset",
    utilityClasses: [
      ...generateClass(["inset"], 16, 0.25, { unit: "rem" }),
      { classSuffix: "none", classValues: ["inset: none;"] },
    ],
  },
  {
    classPrefix: "dir-l-",
    classLink: "direction#left",
    utilityClasses: [
      ...generateClass(["left"], 16, 0.25, { unit: "rem" }),
      { classSuffix: "none", classValues: ["left: none;"] },
    ],
  },
  {
    classPrefix: "dir-r-",
    classLink: "direction#right",
    utilityClasses: [
      ...generateClass(["right"], 16, 0.25, { unit: "rem" }),
      { classSuffix: "none", classValues: ["right: none;"] },
    ],
  },
  {
    classPrefix: "dir-t-",
    classLink: "direction#top",
    utilityClasses: [
      ...generateClass(["top"], 16, 0.25, { unit: "rem" }),
      { classSuffix: "none", classValues: ["top: none;"] },
    ],
  },
  {
    classPrefix: "d-",
    classLink: "display",
    utilityClasses: [
      { classSuffix: "b", classValues: ["display: block;"] },
      { classSuffix: "f", classValues: ["display: flex;"] },
      { classSuffix: "fr", classValues: ["display: flow-root;"] },
      { classSuffix: "g", classValues: ["display: grid;"] },
      { classSuffix: "i", classValues: ["display: inline;"] },
      { classSuffix: "ib", classValues: ["display: inline-block;"] },
      { classSuffix: "if", classValues: ["display: inline-flex;"] },
      { classSuffix: "it", classValues: ["display: inline-grid;"] },
      { classSuffix: "ig", classValues: ["display: inline-table;"] },
      { classSuffix: "none", classValues: ["display: none;"] },
      { classSuffix: "t", classValues: ["display: table;"] },
    ],
  },
  {
    classPrefix: "flo-",
    classLink: "float",
    utilityClasses: [
      { classSuffix: "ie", classValues: ["float: inline-end;"] },
      { classSuffix: "is", classValues: ["float: inline-start;"] },
      { classSuffix: "l", classValues: ["float: left;"] },
      { classSuffix: "none", classValues: ["float: none;"] },
      { classSuffix: "r", classValues: ["float: right;"] },
    ],
  },
  {
    classPrefix: "ins",
    classLink: "inset",
    utilityClasses: [
      {
        classSuffix: "",
        classValues: [
          "align-items: center;",
          "display: flex;",
          "justify-content: center;",
        ],
      },
    ],
  },
  {
    classPrefix: "of-",
    classLink: "object-fit",
    utilityClasses: [
      { classSuffix: "c", classValues: ["object-fit: cover;"] },
      { classSuffix: "f", classValues: ["object-fit: fill;"] },
      { classSuffix: "none", classValues: ["object-fit: none;"] },
      { classSuffix: "sd", classValues: ["object-fit: scale-down;"] },
    ],
  },
  {
    classPrefix: "op-",
    classLink: "object-position",
    utilityClasses: [
      { classSuffix: "b", classValues: ["object-position: bottom;"] },
      { classSuffix: "c", classValues: ["object-position: center;"] },
      { classSuffix: "l", classValues: ["object-position: left;"] },
      { classSuffix: "lb", classValues: ["object-position: left bottom;"] },
      { classSuffix: "lt", classValues: ["object-position: left top;"] },
      { classSuffix: "r", classValues: ["object-position: right;"] },
      { classSuffix: "rb", classValues: ["object-position: right bottom;"] },
      { classSuffix: "rt", classValues: ["object-position: right top;"] },
      { classSuffix: "t", classValues: ["object-position: top;"] },
    ],
  },
  {
    classPrefix: "ovf-",
    classLink: "overflow",
    utilityClasses: [
      { classSuffix: "auto", classValues: ["overflow: auto;"] },
      { classSuffix: "c", classValues: ["overflow: clip;"] },
      { classSuffix: "h", classValues: ["overflow: hidden;"] },
      { classSuffix: "s", classValues: ["overflow: scroll;"] },
      { classSuffix: "v", classValues: ["overflow: visible;"] },
    ],
  },
  {
    classPrefix: "ovf-x-",
    classLink: "overflow",
    utilityClasses: [
      { classSuffix: "auto", classValues: ["overflow-x: auto;"] },
      { classSuffix: "c", classValues: ["overflow-x: clip;"] },
      { classSuffix: "h", classValues: ["overflow-x: hidden;"] },
      { classSuffix: "s", classValues: ["overflow-x: scroll;"] },
      { classSuffix: "v", classValues: ["overflow-x: visible;"] },
    ],
  },
  {
    classPrefix: "ovf-y-",
    classLink: "overflow",
    utilityClasses: [
      { classSuffix: "auto", classValues: ["overflow-y: auto;"] },
      { classSuffix: "c", classValues: ["overflow-y: clip;"] },
      { classSuffix: "h", classValues: ["overflow-y: hidden;"] },
      { classSuffix: "s", classValues: ["overflow-y: scroll;"] },
      { classSuffix: "v", classValues: ["overflow-y: visible;"] },
    ],
  },
  {
    classPrefix: "p-",
    classLink: "position",
    utilityClasses: [
      { classSuffix: "a", classValues: ["position: absolute;"] },
      { classSuffix: "f", classValues: ["position: fixed;"] },
      { classSuffix: "r", classValues: ["position: relative;"] },
      { classSuffix: "s", classValues: ["position: static;"] },
      { classSuffix: "st", classValues: ["position: sticky;"] },
    ],
  },
  {
    classPrefix: "zi-",
    classLink: "z-index",
    utilityClasses: [
      ...generateClass(["z-index"], 9, 10, {
        incrementPrefix: 10,
        round: 1
      }),
      { classSuffix: "auto", classValues: ["z-index: auto;"] },
    ],
  },
];
