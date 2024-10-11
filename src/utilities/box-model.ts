import { generateClass } from "../helpers/classHelper";

export const boxModelUtils = [
  {
    classPrefix: "bs-",
    classLink: "box-sizing",
    utilityClasses: [
      { classSuffix: "bb", classValues: ["box-sizing: border-box;"] },
      { classSuffix: "cb", classValues: ["box-sizing: content-box;"] },
    ],
  },
  {
    classPrefix: "dim-",
    classLink: "dimension",
    utilityClasses: [
      ...generateClass(["height", "width"], 100, 0.25, { unit: "rem" }),
      {
        classSuffix: "1/1",
        classValues: ["height: 100dvh;", "width: 100dvh;"],
      },
      { classSuffix: "1/2", classValues: ["height: 50dvh;", "width: 50dvh;"] },
      { classSuffix: "auto", classValues: ["height: auto;", "width: auto;"] },
      {
        classSuffix: "fc",
        classValues: ["height: fit-content;", "width: fit-content;"],
      },
      { classSuffix: "full", classValues: ["height: 100%;", "width: 100%;"] },
      { classSuffix: "half", classValues: ["height: 50%;", "width: 50%;"] },
      {
        classSuffix: "max",
        classValues: ["height: max-content;", "width: max-content"],
      },
      {
        classSuffix: "min",
        classValues: ["height: min-content;", "width: min-content;"],
      },
    ],
  },
  {
    classPrefix: "max-dim-",
    classLink: "dimension#max-dimension",
    utilityClasses: [
      ...generateClass(["max-height", "min-width"], 100, 0.25, { unit: "rem" }),
      {
        classSuffix: "1/1",
        classValues: ["height: 100dvh;", "width: 100dvh;"],
      },
      { classSuffix: "1/2", classValues: ["height: 50dvh;", "width: 50dvh;"] },
      { classSuffix: "auto", classValues: ["height: auto;", "width: auto;"] },
      {
        classSuffix: "fc",
        classValues: ["height: fit-content;", "width: fit-content;"],
      },
      { classSuffix: "full", classValues: ["height: 100%;", "width: 100%;"] },
      { classSuffix: "half", classValues: ["height: 50%;", "width: 50%;"] },
      {
        classSuffix: "max",
        classValues: ["height: max-content;", "width: max-content"],
      },
      {
        classSuffix: "min",
        classValues: ["height: min-content;", "width: min-content;"],
      },
    ],
  },
  {
    classPrefix: "min-dim-",
    classLink: "dimension#min-dimension",
    utilityClasses: [
      ...generateClass(["min-height", "min-width"], 100, 0.25, { unit: "rem" }),
      {
        classSuffix: "1/1",
        classValues: ["height: 100dvh;", "width: 100dvh;"],
      },
      { classSuffix: "1/2", classValues: ["height: 50dvh;", "width: 50dvh;"] },
      { classSuffix: "auto", classValues: ["height: auto;", "width: auto;"] },
      {
        classSuffix: "fc",
        classValues: ["height: fit-content;", "width: fit-content;"],
      },
      { classSuffix: "full", classValues: ["height: 100%;", "width: 100%;"] },
      { classSuffix: "half", classValues: ["height: 50%;", "width: 50%;"] },
      {
        classSuffix: "max",
        classValues: ["height: max-content;", "width: max-content"],
      },
      {
        classSuffix: "min",
        classValues: ["height: min-content;", "width: min-content;"],
      },
    ],
  },
  {
    classPrefix: "h-",
    classLink: "height",
    utilityClasses: [
      ...generateClass(["height"], 100, 0.25, { unit: "rem" }),
      { classSuffix: "1/1", classValues: ["height: 100dvh;"] },
      { classSuffix: "1/2", classValues: ["height: 50dvh;"] },
      { classSuffix: "auto", classValues: ["height: auto;"] },
      { classSuffix: "fc", classValues: ["height: fit-content;"] },
      { classSuffix: "full", classValues: ["height: 100%;"] },
      { classSuffix: "half", classValues: ["height: 50%;"] },
      { classSuffix: "max", classValues: ["height: max-content;"] },
      { classSuffix: "min", classValues: ["height: min-content;"] },
    ],
  },
  {
    classPrefix: "max-h-",
    classLink: "height#max-height",
    utilityClasses: [
      ...generateClass(["max-height"], 100, 0.25, { unit: "rem" }),
      { classSuffix: "1/1", classValues: ["height: 100dvh;"] },
      { classSuffix: "1/2", classValues: ["height: 50dvh;"] },
      { classSuffix: "auto", classValues: ["height: auto;"] },
      { classSuffix: "fc", classValues: ["height: fit-content;"] },
      { classSuffix: "full", classValues: ["height: 100%;"] },
      { classSuffix: "half", classValues: ["height: 50%;"] },
      { classSuffix: "max", classValues: ["height: max-content;"] },
      { classSuffix: "min", classValues: ["height: min-content;"] },
    ],
  },
  {
    classPrefix: "min-h-",
    classLink: "height#min-height",
    utilityClasses: [
      ...generateClass(["min-height"], 100, 0.25, { unit: "rem" }),
      { classSuffix: "1/1", classValues: ["height: 100dvh;"] },
      { classSuffix: "1/2", classValues: ["height: 50dvh;"] },
      { classSuffix: "auto", classValues: ["height: auto;"] },
      { classSuffix: "fc", classValues: ["height: fit-content;"] },
      { classSuffix: "full", classValues: ["height: 100%;"] },
      { classSuffix: "half", classValues: ["height: 50%;"] },
      { classSuffix: "max", classValues: ["height: max-content;"] },
      { classSuffix: "min", classValues: ["height: min-content;"] },
    ],
  },
  {
    classPrefix: "m-",
    classLink: "margin",
    utilityClasses: [
      ...generateClass(["margin"], 100, 0.25, { unit: "rem" }),
      { classSuffix: "auto", classValues: ["margin: auto;"] },
    ],
  },
  {
    classPrefix: "mb-",
    classLink: "margin#margin-bottom",
    utilityClasses: [
      ...generateClass(["margin-bottom"], 100, 0.25, { unit: "rem" }),
      { classSuffix: "auto", classValues: ["margin-bottom: auto;"] },
    ],
  },
  {
    classPrefix: "ml-",
    classLink: "margin#margin-left",
    utilityClasses: [
      ...generateClass(["margin-left"], 100, 0.25, { unit: "rem" }),
      { classSuffix: "auto", classValues: ["margin-left: auto;"] },
    ],
  },
  {
    classPrefix: "mr-",
    classLink: "margin#margin-right",
    utilityClasses: [
      ...generateClass(["margin-right"], 100, 0.25, { unit: "rem" }),
      { classSuffix: "auto", classValues: ["margin-right: auto;"] },
    ],
  },
  {
    classPrefix: "mt-",
    classLink: "margin#margin-top",
    utilityClasses: [
      ...generateClass(["margin-top"], 100, 0.25, { unit: "rem" }),
      { classSuffix: "auto", classValues: ["margin-top: auto;"] },
    ],
  },
  {
    classPrefix: "mx-",
    classLink: "margin#margin-x",
    utilityClasses: [
      ...generateClass(["margin-left", "margin-right"], 100, 0.25, {
        unit: "rem",
      }),
      {
        classSuffix: "auto",
        classValues: ["margin-left: auto;", "margin-right: auto;"],
      },
    ],
  },
  {
    classPrefix: "my-",
    classLink: "margin#margin-y",
    utilityClasses: [
      ...generateClass(["margin-bottom", "margin-top"], 100, 0.25, {
        unit: "rem",
      }),
      {
        classSuffix: "auto",
        classValues: ["margin-bottom: auto;", "margin-top: auto;"],
      },
    ],
  },
  {
    classPrefix: "p-",
    classLink: "padding",
    utilityClasses: [
      ...generateClass(["padding"], 100, 0.25, { unit: "rem" }),
      { classSuffix: "auto", classValues: ["padding: auto;"] },
    ],
  },
  {
    classPrefix: "pb-",
    classLink: "padding#padding-bottom",
    utilityClasses: [
      ...generateClass(["padding-bottom"], 100, 0.25, { unit: "rem" }),
      { classSuffix: "auto", classValues: ["padding-bottom: auto;"] },
    ],
  },
  {
    classPrefix: "pl-",
    classLink: "padding#padding-left",
    utilityClasses: [
      ...generateClass(["padding-left"], 100, 0.25, { unit: "rem" }),
      { classSuffix: "auto", classValues: ["padding-left: auto;"] },
    ],
  },
  {
    classPrefix: "pr-",
    classLink: "padding#padding-right",
    utilityClasses: [
      ...generateClass(["padding-right"], 100, 0.25, { unit: "rem" }),
      { classSuffix: "auto", classValues: ["padding-right: auto;"] },
    ],
  },
  {
    classPrefix: "pt-",
    classLink: "padding#padding-top",
    utilityClasses: [
      ...generateClass(["padding-top"], 100, 0.25, { unit: "rem" }),
      { classSuffix: "auto", classValues: ["padding-top: auto;"] },
    ],
  },
  {
    classPrefix: "px-",
    classLink: "padding#padding-x",
    utilityClasses: [
      ...generateClass(["padding-left", "padding-right"], 100, 0.25, {
        unit: "rem",
      }),
      {
        classSuffix: "auto",
        classValues: ["padding-left: auto;", "padding-right: auto;"],
      },
    ],
  },
  {
    classPrefix: "py-",
    classLink: "padding#padding-y",
    utilityClasses: [
      ...generateClass(["padding-bottom", "padding-top"], 100, 0.25, {
        unit: "rem",
      }),
      {
        classSuffix: "auto",
        classValues: ["padding-bottom: auto;", "padding-top: auto;"],
      },
    ],
  },
  {
    classPrefix: "s-x-",
    classLink: "spacing#spacing-x",
    utilityClasses: [
      ...generateClass(["margin-left", "margin-right"], 100, 0.25, {
        unit: "rem",
      }),
      {
        classSuffix: "auto",
        classValues: ["margin-left: auto;", "margin-right: auto;"],
      },
    ],
  },
  {
    classPrefix: "s-y-",
    classLink: "spacing#spacing-y",
    utilityClasses: [
      ...generateClass(["margin-top", "margin-bottom"], 100, 0.25, {
        unit: "rem",
      }),
      {
        classSuffix: "auto",
        classValues: ["margin-top: auto;", "margin-bottom: auto;"],
      },
    ],
  },
  {
    classPrefix: "w-",
    classLink: "width",
    utilityClasses: [
      ...generateClass(["width"], 100, 0.25, { unit: "rem" }),
      { classSuffix: "1/1", classValues: ["width: 100dvh;"] },
      { classSuffix: "1/2", classValues: ["width: 50dvh;"] },
      { classSuffix: "auto", classValues: ["width: auto;"] },
      { classSuffix: "fc", classValues: ["width: fit-content;"] },
      { classSuffix: "full", classValues: ["width: 100%;"] },
      { classSuffix: "half", classValues: ["width: 50%;"] },
      { classSuffix: "max", classValues: ["width: max-content;"] },
      { classSuffix: "min", classValues: ["width: min-content;"] },
    ],
  },
  {
    classPrefix: "max-w-",
    classLink: "width#max-width",
    utilityClasses: [
      ...generateClass(["max-width"], 100, 0.25, { unit: "rem" }),
      { classSuffix: "1/1", classValues: ["width: 100dvh;"] },
      { classSuffix: "1/2", classValues: ["width: 50dvh;"] },
      { classSuffix: "auto", classValues: ["width: auto;"] },
      { classSuffix: "fc", classValues: ["width: fit-content;"] },
      { classSuffix: "full", classValues: ["width: 100%;"] },
      { classSuffix: "half", classValues: ["width: 50%;"] },
      { classSuffix: "max", classValues: ["width: max-content;"] },
      { classSuffix: "min", classValues: ["width: min-content;"] },
    ],
  },
  {
    classPrefix: "min-w-",
    classLink: "width#min-width",
    utilityClasses: [
      ...generateClass(["min-width"], 100, 0.25, { unit: "rem" }),
      { classSuffix: "1/1", classValues: ["width: 100dvh;"] },
      { classSuffix: "1/2", classValues: ["width: 50dvh;"] },
      { classSuffix: "auto", classValues: ["width: auto;"] },
      { classSuffix: "fc", classValues: ["width: fit-content;"] },
      { classSuffix: "full", classValues: ["width: 100%;"] },
      { classSuffix: "half", classValues: ["width: 50%;"] },
      { classSuffix: "max", classValues: ["width: max-content;"] },
      { classSuffix: "min", classValues: ["width: min-content;"] },
    ],
  },
];
