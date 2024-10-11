import { generateClass } from "../helpers/classHelper";

export const flexboxUtils = [
  {
    classPrefix: "ac-",
    classLink: "align-content",
    utilityClasses: [
      { classSuffix: "b", classValues: ["align-content: baseline;"] },
      { classSuffix: "c", classValues: ["align-content: center;"] },
      { classSuffix: "fe", classValues: ["align-content: flex-end;"] },
      { classSuffix: "fs", classValues: ["align-content: flex-start;"] },
      { classSuffix: "n", classValues: ["align-content: normal;"] },
      { classSuffix: "s", classValues: ["align-content: stretch;"] },
      { classSuffix: "sa", classValues: ["align-content: space-around;"] },
      { classSuffix: "sb", classValues: ["align-content: space-between;"] },
      { classSuffix: "se", classValues: ["align-content: space-evenly;"] },
    ],
  },
  {
    classPrefix: "ai-",
    classLink: "align-items",
    utilityClasses: [
      { classSuffix: "b", classValues: ["align-items: baseline;"] },
      { classSuffix: "c", classValues: ["align-items: center;"] },
      { classSuffix: "fe", classValues: ["align-items: flex-end;"] },
      { classSuffix: "fs", classValues: ["align-items: flex-start;"] },
      { classSuffix: "s", classValues: ["align-items: stretch;"] },
    ],
  },
  {
    classPrefix: "as-",
    classLink: "align-self",
    utilityClasses: [
      { classSuffix: "auto", classValues: ["align-self: auto;"] },
      { classSuffix: "b", classValues: ["align-self: baseline;"] },
      { classSuffix: "c", classValues: ["align-self: center;"] },
      { classSuffix: "fe", classValues: ["align-self: flex-end;"] },
      { classSuffix: "fs", classValues: ["align-self: flex-start;"] },
      { classSuffix: "s", classValues: ["align-self: stretch;"] },
    ],
  },
  {
    classPrefix: "fb-",
    classLink: "flex-basis",
    utilityClasses: [
      ...generateClass(["flex-basis"], 100, 0.25, { unit: "rem" }),
      { classSuffix: "full", classValues: ["flex-basis: 100%;"] },
      { classSuffix: "half", classValues: ["flex-basis: 50%;"] },
    ],
  },
  {
    classPrefix: "fd-",
    classLink: "flex-direction",
    utilityClasses: [
      { classSuffix: "c", classValues: ["flex-direction: column;"] },
      { classSuffix: "cr", classValues: ["flex-direction: column-reverse;"] },
      { classSuffix: "r", classValues: ["flex-direction: row;"] },
      { classSuffix: "rr", classValues: ["flex-direction: row-reverse;"] },
    ],
  },
  {
    classPrefix: "fg-",
    classLink: "flex-grow",
    utilityClasses: [...generateClass(["flex-grow"], 8, 1)],
  },
  {
    classPrefix: "fs-",
    classLink: "flex-shrink",
    utilityClasses: [...generateClass(["flex-shrink"], 8, 1)],
  },
  {
    classPrefix: "fw-",
    classLink: "flex-wrap",
    utilityClasses: [
      { classSuffix: "nw", classValues: ["flex-wrap: nowrap;"] },
      { classSuffix: "w", classValues: ["flex-wrap: wrap;"] },
      { classSuffix: "wr", classValues: ["flex-wrap: wrap-reverse;"] },
    ],
  },
  {
    classPrefix: "f-",
    classLink: "flex",
    utilityClasses: [
      { classSuffix: "1", classValues: ["flex: 1 1 0%;"] },
      { classSuffix: "2", classValues: ["flex: 2 2 0%;"] },
      { classSuffix: "3", classValues: ["flex: 3 3 0%;"] },
      { classSuffix: "4", classValues: ["flex: 4 4 0%;"] },
      { classSuffix: "5", classValues: ["flex: 5 5 0%;"] },
      { classSuffix: "6", classValues: ["flex: 6 6 0%;"] },
      { classSuffix: "7", classValues: ["flex: 7 7 0%;"] },
      { classSuffix: "8", classValues: ["flex: 8 8 0%;"] },
      { classSuffix: "auto", classValues: ["flex: 1 1 auto;"] },
      { classSuffix: "none", classValues: ["flex: none;"] },
    ],
  },
  {
    classPrefix: "jc-",
    classLink: "justify-content",
    utilityClasses: [
      { classSuffix: "c", classValues: ["justify-content: center;"] },
      { classSuffix: "fe", classValues: ["justify-content: flex-end;"] },
      { classSuffix: "fs", classValues: ["justify-content: flex-start;"] },
      { classSuffix: "n", classValues: ["justify-content: normal;"] },
      { classSuffix: "s", classValues: ["justify-content: stretch;"] },
      { classSuffix: "sa", classValues: ["justify-content: space-around;"] },
      { classSuffix: "sb", classValues: ["justify-content: space-between;"] },
      { classSuffix: "se", classValues: ["justify-content: space-evenly;"] },
    ],
  },
  {
    classPrefix: "ji-",
    classLink: "justify-items",
    utilityClasses: [
      { classSuffix: "c", classValues: ["justify-items: center;"] },
      { classSuffix: "e", classValues: ["justify-items: end;"] },
      { classSuffix: "s", classValues: ["justify-items: start;"] },
      { classSuffix: "st", classValues: ["justify-items: stretch;"] },
    ],
  },
  {
    classPrefix: "js-",
    classLink: "justify-self",
    utilityClasses: [
      { classSuffix: "auto", classValues: ["justify-self: auto;"] },
      { classSuffix: "c", classValues: ["justify-self: center;"] },
      { classSuffix: "e", classValues: ["justify-self: end;"] },
      { classSuffix: "s", classValues: ["justify-self: start;"] },
      { classSuffix: "st", classValues: ["justify-self: stretch;"] },
    ],
  },
];
