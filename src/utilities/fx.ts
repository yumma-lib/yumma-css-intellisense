import { generateClass } from "../helpers/classHelper";

export const fxUtils = [
  {
    classPrefix: "bf-b-",
    classLink: "backdrop-filter",
    utilityClasses: [
      { classSuffix: "none", classValues: ["backdrop-filter: blur(0px);"] },
      { classSuffix: "xs", classValues: ["backdrop-filter: blur(4px);"] },
      { classSuffix: "sm", classValues: ["backdrop-filter: blur(8px);"] },
      { classSuffix: "md", classValues: ["backdrop-filter: blur(16px);"] },
      { classSuffix: "lg", classValues: ["backdrop-filter: blur(32px);"] },
      { classSuffix: "xl", classValues: ["backdrop-filter: blur(64px);"] },
    ],
  },
  {
    classPrefix: "bs-",
    classLink: "box-shadow",
    utilityClasses: [
      {
        classSuffix: "none",
        classValues: ["box-shadow: none;"],
      },
      {
        classSuffix: "xs",
        classValues: ["box-shadow: 1px 3px 5px -3px rgba(0,0,0,0.1);"],
      },
      {
        classSuffix: "sm",
        classValues: ["box-shadow: 1px 3px 5px -2px rgba(0,0,0,0.1);"],
      },
      {
        classSuffix: "md",
        classValues: ["box-shadow: 1px 3px 5px -1px rgba(0,0,0,0.1);"],
      },
      {
        classSuffix: "lg",
        classValues: ["box-shadow: 1px 3px 5px 1px rgba(0,0,0,0.1);"],
      },
      {
        classSuffix: "xl",
        classValues: ["box-shadow: 1px 3px 5px 2px rgba(0,0,0,0.1);"],
      },
    ],
  },
  {
    classPrefix: "o-",
    classLink: "opacity",
    utilityClasses: [
      ...generateClass(["opacity"], 10, 0.1, {
        incrementPrefix: 10,
      }),
    ],
  },
];
