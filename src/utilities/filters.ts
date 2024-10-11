import { generateClass } from "../helpers/classHelper";

export const filterUtils = [
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
