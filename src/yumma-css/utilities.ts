import { generateClass } from "../utilities/classUtil";

export const utilities = [
  // borders & outlines
  {
    classPrefix: "bc-",
    classLink: "border-collapse",
    additionalClasses: [
      { classSuffix: "c", classValues: ["border-collapse: collapse;"] },
      { classSuffix: "s", classValues: ["border-collapse: separate;"] },
    ],
  },
  {
    classPrefix: "rad-",
    classLink: "border-radius",
    additionalClasses: [
      { classSuffix: "0", classValues: ["border-radius: 0px;"] },
      { classSuffix: "1", classValues: ["border-radius: 4px;"] },
      { classSuffix: "2", classValues: ["border-radius: 8px;"] },
      { classSuffix: "3", classValues: ["border-radius: 16px;"] },
      { classSuffix: "4", classValues: ["border-radius: 24px;"] },
      { classSuffix: "5", classValues: ["border-radius: 32px;"] },
      { classSuffix: "6", classValues: ["border-radius: 40px;"] },
      { classSuffix: "7", classValues: ["border-radius: 48px;"] },
      { classSuffix: "8", classValues: ["border-radius: 56px;"] },
      { classSuffix: "full", classValues: ["border-radius: 100%;"] },
      { classSuffix: "half", classValues: ["border-radius: 50%;"] },
    ],
  },
  {
    classPrefix: "rad-bl-",
    classLink: "border-radius#bottom-left-radius",
    additionalClasses: [
      { classSuffix: "0", classValues: ["border-bottom-left-radius: 0px;"] },
      { classSuffix: "1", classValues: ["border-bottom-left-radius: 4px;"] },
      { classSuffix: "2", classValues: ["border-bottom-left-radius: 8px;"] },
      { classSuffix: "3", classValues: ["border-bottom-left-radius: 16px;"] },
      { classSuffix: "4", classValues: ["border-bottom-left-radius: 24px;"] },
      { classSuffix: "5", classValues: ["border-bottom-left-radius: 32px;"] },
      { classSuffix: "6", classValues: ["border-bottom-left-radius: 40px;"] },
      { classSuffix: "7", classValues: ["border-bottom-left-radius: 48px;"] },
      { classSuffix: "8", classValues: ["border-bottom-left-radius: 56px;"] },
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
    additionalClasses: [
      { classSuffix: "0", classValues: ["border-bottom-right-radius: 0px;"] },
      { classSuffix: "1", classValues: ["border-bottom-right-radius: 4px;"] },
      { classSuffix: "2", classValues: ["border-bottom-right-radius: 8px;"] },
      { classSuffix: "3", classValues: ["border-bottom-right-radius: 16px;"] },
      { classSuffix: "4", classValues: ["border-bottom-right-radius: 24px;"] },
      { classSuffix: "5", classValues: ["border-bottom-right-radius: 32px;"] },
      { classSuffix: "6", classValues: ["border-bottom-right-radius: 40px;"] },
      { classSuffix: "7", classValues: ["border-bottom-right-radius: 48px;"] },
      { classSuffix: "8", classValues: ["border-bottom-right-radius: 56px;"] },
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
    additionalClasses: [
      { classSuffix: "0", classValues: ["border-top-left-radius: 0px;"] },
      { classSuffix: "1", classValues: ["border-top-left-radius: 4px;"] },
      { classSuffix: "2", classValues: ["border-top-left-radius: 8px;"] },
      { classSuffix: "3", classValues: ["border-top-left-radius: 16px;"] },
      { classSuffix: "4", classValues: ["border-top-left-radius: 24px;"] },
      { classSuffix: "5", classValues: ["border-top-left-radius: 32px;"] },
      { classSuffix: "6", classValues: ["border-top-left-radius: 40px;"] },
      { classSuffix: "7", classValues: ["border-top-left-radius: 48px;"] },
      { classSuffix: "8", classValues: ["border-top-left-radius: 56px;"] },
      { classSuffix: "full", classValues: ["border-top-left-radius: 100%;"] },
      { classSuffix: "half", classValues: ["border-top-left-radius: 50%;"] },
    ],
  },
  {
    classPrefix: "rad-tr-",
    classLink: "border-radius#top-right-radius",
    additionalClasses: [
      { classSuffix: "0", classValues: ["border-top-right-radius: 0px;"] },
      { classSuffix: "1", classValues: ["border-top-right-radius: 4px;"] },
      { classSuffix: "2", classValues: ["border-top-right-radius: 8px;"] },
      { classSuffix: "3", classValues: ["border-top-right-radius: 16px;"] },
      { classSuffix: "4", classValues: ["border-top-right-radius: 24px;"] },
      { classSuffix: "5", classValues: ["border-top-right-radius: 32px;"] },
      { classSuffix: "6", classValues: ["border-top-right-radius: 40px;"] },
      { classSuffix: "7", classValues: ["border-top-right-radius: 48px;"] },
      { classSuffix: "8", classValues: ["border-top-right-radius: 56px;"] },
      { classSuffix: "full", classValues: ["border-top-right-radius: 100%;"] },
      { classSuffix: "half", classValues: ["border-top-right-radius: 50%;"] },
    ],
  },
  {
    classPrefix: "b-",
    classLink: "border-style",
    additionalClasses: [
      { classSuffix: "none", classValues: ["border-style: none;"] },
      { classSuffix: "d", classValues: ["border-style: dashed;"] },
      { classSuffix: "h", classValues: ["border-style: hidden;"] },
      { classSuffix: "s", classValues: ["border-style: solid;"] },
    ],
  },
  {
    classPrefix: "b-",
    classLink: "border-width",
    additionalClasses: [
      { classSuffix: "0", classValues: ["border-width: 0px;"] },
      { classSuffix: "1", classValues: ["border-width: 1px;"] },
      { classSuffix: "2", classValues: ["border-width: 2px;"] },
      { classSuffix: "3", classValues: ["border-width: 4px;"] },
      { classSuffix: "4", classValues: ["border-width: 6px;"] },
      { classSuffix: "5", classValues: ["border-width: 8px;"] },
      { classSuffix: "6", classValues: ["border-width: 10px;"] },
      { classSuffix: "7", classValues: ["border-width: 12px;"] },
      { classSuffix: "8", classValues: ["border-width: 14px;"] },
    ],
  },
  {
    classPrefix: "bb-",
    classLink: "border-width#border-bottom-width",
    additionalClasses: [
      { classSuffix: "0", classValues: ["border-bottom-width: 0px;"] },
      { classSuffix: "1", classValues: ["border-bottom-width: 1px;"] },
      { classSuffix: "2", classValues: ["border-bottom-width: 2px;"] },
      { classSuffix: "3", classValues: ["border-bottom-width: 4px;"] },
      { classSuffix: "4", classValues: ["border-bottom-width: 6px;"] },
      { classSuffix: "5", classValues: ["border-bottom-width: 8px;"] },
      { classSuffix: "6", classValues: ["border-bottom-width: 10px;"] },
      { classSuffix: "7", classValues: ["border-bottom-width: 12px;"] },
      { classSuffix: "8", classValues: ["border-bottom-width: 14px;"] },
    ],
  },
  {
    classPrefix: "bl-",
    classLink: "border-width#border-left-width",
    additionalClasses: [
      { classSuffix: "0", classValues: ["border-left-width: 0px;"] },
      { classSuffix: "1", classValues: ["border-left-width: 1px;"] },
      { classSuffix: "2", classValues: ["border-left-width: 2px;"] },
      { classSuffix: "3", classValues: ["border-left-width: 4px;"] },
      { classSuffix: "4", classValues: ["border-left-width: 6px;"] },
      { classSuffix: "5", classValues: ["border-left-width: 8px;"] },
      { classSuffix: "6", classValues: ["border-left-width: 10px;"] },
      { classSuffix: "7", classValues: ["border-left-width: 12px;"] },
      { classSuffix: "8", classValues: ["border-left-width: 14px;"] },
    ],
  },
  {
    classPrefix: "br-",
    classLink: "border-width#border-right-width",
    additionalClasses: [
      { classSuffix: "0", classValues: ["border-right-width: 0px;"] },
      { classSuffix: "1", classValues: ["border-right-width: 1px;"] },
      { classSuffix: "2", classValues: ["border-right-width: 2px;"] },
      { classSuffix: "3", classValues: ["border-right-width: 4px;"] },
      { classSuffix: "4", classValues: ["border-right-width: 6px;"] },
      { classSuffix: "5", classValues: ["border-right-width: 8px;"] },
      { classSuffix: "6", classValues: ["border-right-width: 10px;"] },
      { classSuffix: "7", classValues: ["border-right-width: 12px;"] },
      { classSuffix: "8", classValues: ["border-right-right-width: 14px;"] },
    ],
  },
  {
    classPrefix: "bt-",
    classLink: "border-width#border-top-width",
    additionalClasses: [
      { classSuffix: "0", classValues: ["border-top-width: 0px;"] },
      { classSuffix: "1", classValues: ["border-top-width: 1px;"] },
      { classSuffix: "2", classValues: ["border-top-width: 2px;"] },
      { classSuffix: "3", classValues: ["border-top-width: 4px;"] },
      { classSuffix: "4", classValues: ["border-top-width: 6px;"] },
      { classSuffix: "5", classValues: ["border-top-width: 8px;"] },
      { classSuffix: "6", classValues: ["border-top-width: 10px;"] },
      { classSuffix: "7", classValues: ["border-top-width: 12px;"] },
      { classSuffix: "8", classValues: ["border-top-width: 14px;"] },
    ],
  },

  // outlines
  {
    classPrefix: "oo-",
    classLink: "outline-offset",
    additionalClasses: [
      { classSuffix: "0", classValues: ["outline-offset: 0px;"] },
      { classSuffix: "1", classValues: ["outline-offset: 4px;"] },
      { classSuffix: "2", classValues: ["outline-offset: 8px;"] },
      { classSuffix: "3", classValues: ["outline-offset: 12px;"] },
      { classSuffix: "4", classValues: ["outline-offset: 16px;"] },
    ],
  },
  {
    classPrefix: "os-",
    classLink: "outline-style",
    additionalClasses: [
      { classSuffix: "none", classValues: ["outline-style: none;"] },
      { classSuffix: "d", classValues: ["outline-style: dashed;"] },
      { classSuffix: "h", classValues: ["outline-style: hidden;"] },
      { classSuffix: "s", classValues: ["outline-style: solid;"] },
    ],
  },
  {
    classPrefix: "ow-",
    classLink: "outline-width",
    additionalClasses: [
      { classSuffix: "0", classValues: ["outline-width: 0px;"] },
      { classSuffix: "1", classValues: ["outline-width: 4px;"] },
      { classSuffix: "2", classValues: ["outline-width: 8px;"] },
      { classSuffix: "3", classValues: ["outline-width: 12px;"] },
      { classSuffix: "4", classValues: ["outline-width: 16px;"] },
    ],
  },

  // box model
  {
    classPrefix: "bs-",
    classLink: "box-sizing",
    additionalClasses: [
      { classSuffix: "bb", classValues: ["box-sizing: border-box;"] },
      { classSuffix: "cb", classValues: ["box-sizing: content-box;"] },
    ],
  },
  {
    classPrefix: "dim-",
    classLink: "dimension",
    additionalClasses: [
      ...generateClass(["height", "width"], 100, 0.25, "rem"),
      { classSuffix: "auto", classValues: ["height: auto;", "width: auto;"] },
      { classSuffix: "full", classValues: ["height: 100%;", "width: 100%;"] },
      { classSuffix: "half", classValues: ["height: 50%;", "width: 50%;"] },
      {
        classSuffix: "fc",
        classValues: ["height: fit-content;", "width: fit-content;"],
      },
      {
        classSuffix: "1/1",
        classValues: ["height: 100dvh;", "width: 100dvh;"],
      },
      { classSuffix: "1/2", classValues: ["height: 50dvh;", "width: 50dvh;"] },
    ],
  },
  {
    classPrefix: "max-dim-",
    classLink: "dimension#max-dimension",
    additionalClasses: [
      ...generateClass(["max-height", "min-width"], 100, 0.25, "rem"),
      {
        classSuffix: "auto",
        classValues: ["max-height: auto;", "min-width: auto;"],
      },
      {
        classSuffix: "full",
        classValues: ["max-height: 100%;", "min-width: 100%;"],
      },
      {
        classSuffix: "half",
        classValues: ["max-height: 50%;", "min-width: 50%;"],
      },
      {
        classSuffix: "fc",
        classValues: ["max-height: fit-content;", "min-width: fit-content;"],
      },
      {
        classSuffix: "1/1",
        classValues: ["max-height: 100dvh;", "min-width: 100dvh;"],
      },
      {
        classSuffix: "1/2",
        classValues: ["max-height: 50dvh;", "min-width: 50dvh;"],
      },
    ],
  },
  {
    classPrefix: "min-dim-",
    classLink: "dimension#min-dimension",
    additionalClasses: [
      ...generateClass(["min-height", "min-width"], 100, 0.25, "rem"),
      {
        classSuffix: "auto",
        classValues: ["min-height: auto;", "min-width: auto;"],
      },
      {
        classSuffix: "full",
        classValues: ["min-height: 100%;", "min-width: 100%;"],
      },
      {
        classSuffix: "half",
        classValues: ["min-height: 50%;", "min-width: 50%;"],
      },
      {
        classSuffix: "fc",
        classValues: ["min-height: fit-content;", "min-width: fit-content;"],
      },
      {
        classSuffix: "1/1",
        classValues: ["min-height: 100dvh;", "min-width: 100dvh;"],
      },
      {
        classSuffix: "1/2",
        classValues: ["min-height: 50dvh;", "min-width: 50dvh;"],
      },
    ],
  },
  {
    classPrefix: "h-",
    classLink: "height",
    additionalClasses: [
      ...generateClass(["height"], 100, 0.25, "rem"),
      { classSuffix: "auto", classValues: ["height: auto;"] },
      { classSuffix: "full", classValues: ["height: 100%;"] },
      { classSuffix: "half", classValues: ["height: 50%;"] },
      { classSuffix: "fc", classValues: ["height: fit-content;"] },
      { classSuffix: "1/1", classValues: ["height: 100dvh;"] },
      { classSuffix: "1/2", classValues: ["height: 50dvh;"] },
    ],
  },
  {
    classPrefix: "max-h-",
    classLink: "height#max-height",
    additionalClasses: [
      ...generateClass(["max-height"], 100, 0.25, "rem"),
      { classSuffix: "auto", classValues: ["max-height: auto;"] },
      { classSuffix: "full", classValues: ["max-height: 100%;"] },
      { classSuffix: "half", classValues: ["max-height: 50%;"] },
      { classSuffix: "fc", classValues: ["max-height: fit-content;"] },
      { classSuffix: "1/1", classValues: ["max-height: 100dvh;"] },
      { classSuffix: "1/2", classValues: ["max-height: 50dvh;"] },
    ],
  },
  {
    classPrefix: "min-h-",
    classLink: "height#min-height",
    additionalClasses: [
      ...generateClass(["min-height"], 100, 0.25, "rem"),
      { classSuffix: "auto", classValues: ["min-height: auto;"] },
      { classSuffix: "full", classValues: ["min-height: 100%;"] },
      { classSuffix: "half", classValues: ["min-height: 50%;"] },
      { classSuffix: "fc", classValues: ["min-height: fit-content;"] },
      { classSuffix: "1/1", classValues: ["min-height: 100dvh;"] },
      { classSuffix: "1/2", classValues: ["min-height: 50dvh;"] },
    ],
  },
  {
    classPrefix: "m-",
    classLink: "margin",
    additionalClasses: [
      ...generateClass(["margin"], 100, 0.25, "rem"),
      { classSuffix: "auto", classValues: ["margin: auto;"] },
    ],
  },
  {
    classPrefix: "mb-",
    classLink: "margin#margin-bottom",
    additionalClasses: [
      ...generateClass(["margin-bottom"], 100, 0.25, "rem"),
      { classSuffix: "auto", classValues: ["margin-bottom: auto;"] },
    ],
  },
  {
    classPrefix: "ml-",
    classLink: "margin#margin-left",
    additionalClasses: [
      ...generateClass(["margin-left"], 100, 0.25, "rem"),
      { classSuffix: "auto", classValues: ["margin-left: auto;"] },
    ],
  },
  {
    classPrefix: "mr-",
    classLink: "margin#margin-right",
    additionalClasses: [
      ...generateClass(["margin-right"], 100, 0.25, "rem"),
      { classSuffix: "auto", classValues: ["margin-right: auto;"] },
    ],
  },
  {
    classPrefix: "mt-",
    classLink: "margin#margin-top",
    additionalClasses: [
      ...generateClass(["margin-top"], 100, 0.25, "rem"),
      { classSuffix: "auto", classValues: ["margin-top: auto;"] },
    ],
  },
  {
    classPrefix: "mx-",
    classLink: "margin#margin-x",
    additionalClasses: [
      ...generateClass(["margin-left", "margin-right"], 100, 0.25, "rem"),
      {
        classSuffix: "auto",
        classValues: ["margin-left: auto;", "margin-right: auto;"],
      },
    ],
  },
  {
    classPrefix: "my-",
    classLink: "margin#margin-y",
    additionalClasses: [
      ...generateClass(["margin-bottom", "margin-top"], 100, 0.25, "rem"),
      {
        classSuffix: "auto",
        classValues: ["margin-bottom: auto;", "margin-top: auto;"],
      },
    ],
  },
  {
    classPrefix: "p-",
    classLink: "padding",
    additionalClasses: [
      ...generateClass(["padding"], 100, 0.25, "rem"),
      { classSuffix: "auto", classValues: ["padding: auto;"] },
    ],
  },
  {
    classPrefix: "pb-",
    classLink: "padding#padding-bottom",
    additionalClasses: [
      ...generateClass(["padding-bottom"], 100, 0.25, "rem"),
      { classSuffix: "auto", classValues: ["padding-bottom: auto;"] },
    ],
  },
  {
    classPrefix: "pl-",
    classLink: "padding#padding-left",
    additionalClasses: [
      ...generateClass(["padding-left"], 100, 0.25, "rem"),
      { classSuffix: "auto", classValues: ["padding-left: auto;"] },
    ],
  },
  {
    classPrefix: "pr-",
    classLink: "padding#padding-right",
    additionalClasses: [
      ...generateClass(["padding-right"], 100, 0.25, "rem"),
      { classSuffix: "auto", classValues: ["padding-right: auto;"] },
    ],
  },
  {
    classPrefix: "pt-",
    classLink: "padding#padding-top",
    additionalClasses: [
      ...generateClass(["padding-top"], 100, 0.25, "rem"),
      { classSuffix: "auto", classValues: ["padding-top: auto;"] },
    ],
  },
  {
    classPrefix: "px-",
    classLink: "padding#padding-x",
    additionalClasses: [
      ...generateClass(["padding-left", "padding-right"], 100, 0.25, "rem"),
      {
        classSuffix: "auto",
        classValues: ["padding-left: auto;", "padding-right: auto;"],
      },
    ],
  },
  {
    classPrefix: "py-",
    classLink: "padding#padding-y",
    additionalClasses: [
      ...generateClass(["padding-bottom", "padding-top"], 100, 0.25, "rem"),
      {
        classSuffix: "auto",
        classValues: ["padding-bottom: auto;", "padding-top: auto;"],
      },
    ],
  },
  {
    classPrefix: "s-x-",
    classLink: "spacing#spacing-x",
    additionalClasses: [
      ...generateClass(["margin-left", "margin-right"], 100, 0.25, "rem"),
      {
        classSuffix: "auto",
        classValues: ["margin-left: auto;", "margin-right: auto;"],
      },
    ],
  },
  {
    classPrefix: "s-y-",
    classLink: "spacing#spacing-y",
    additionalClasses: [
      ...generateClass(["margin-top", "margin-bottom"], 100, 0.25, "rem"),
      {
        classSuffix: "auto",
        classValues: ["margin-top: auto;", "margin-bottom: auto;"],
      },
    ],
  },
  {
    classPrefix: "w-",
    classLink: "width",
    additionalClasses: [
      ...generateClass(["width"], 100, 0.25, "rem"),
      { classSuffix: "auto", classValues: ["width: auto;"] },
      { classSuffix: "full", classValues: ["width: 100%;"] },
      { classSuffix: "half", classValues: ["width: 50%;"] },
      { classSuffix: "fc", classValues: ["width: fit-content;"] },
      { classSuffix: "1/1", classValues: ["width: 100dvh;"] },
      { classSuffix: "1/2", classValues: ["width: 50dvh;"] },
    ],
  },
  {
    classPrefix: "max-w-",
    classLink: "width#max-width",
    additionalClasses: [
      ...generateClass(["max-width"], 100, 0.25, "rem"),
      { classSuffix: "auto", classValues: ["max-width: auto;"] },
      { classSuffix: "full", classValues: ["max-width: 100%;"] },
      { classSuffix: "half", classValues: ["max-width: 50%;"] },
      { classSuffix: "fc", classValues: ["max-width: fit-content;"] },
      { classSuffix: "1/1", classValues: ["max-width: 100dvh;"] },
      { classSuffix: "1/2", classValues: ["max-width: 50dvh;"] },
    ],
  },
  {
    classPrefix: "min-w-",
    classLink: "width#min-width",
    additionalClasses: [
      ...generateClass(["min-width"], 100, 0.25, "rem"),
      { classSuffix: "auto", classValues: ["min-width: auto;"] },
      { classSuffix: "full", classValues: ["min-width: 100%;"] },
      { classSuffix: "half", classValues: ["min-width: 50%;"] },
      { classSuffix: "fc", classValues: ["min-width: fit-content;"] },
      { classSuffix: "1/1", classValues: ["min-width: 100dvh;"] },
      { classSuffix: "1/2", classValues: ["min-width: 50dvh;"] },
    ],
  },

  // effects & filters
  {
    classPrefix: "bf-b-",
    classLink: "backdrop-filter",
    additionalClasses: [
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
    additionalClasses: [
      { classSuffix: "none", classValues: ["box-shadow: none;"] },
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
    additionalClasses: [
      { classSuffix: "10", classValues: ["opacity: 0.1;"] },
      { classSuffix: "20", classValues: ["opacity: 0.2;"] },
      { classSuffix: "30", classValues: ["opacity: 0.3;"] },
      { classSuffix: "40", classValues: ["opacity: 0.4;"] },
      { classSuffix: "50", classValues: ["opacity: 0.5;"] },
      { classSuffix: "6", classValues: ["opacity: 0.6;"] },
      { classSuffix: "70", classValues: ["opacity: 0.7;"] },
      { classSuffix: "80", classValues: ["opacity: 0.8;"] },
      { classSuffix: "90", classValues: ["opacity: 0.9;"] },
      { classSuffix: "100", classValues: ["opacity: 1;"] },
    ],
  },

  // flexbox & grid
  {
    classPrefix: "fb-",
    classLink: "flex-basis",
    additionalClasses: [
      ...generateClass(["flex-basis"], 100, 1, "rem"),
      { classSuffix: "auto", classValues: ["flex-basis: auto;"] },
    ],
  },
  {
    classPrefix: "fd-",
    classLink: "flex-direction",
    additionalClasses: [
      { classSuffix: "c", classValues: ["flex-direction: column;"] },
      { classSuffix: "cr", classValues: ["flex-direction: column-reverse;"] },
      { classSuffix: "r", classValues: ["flex-direction: row;"] },
      { classSuffix: "rr", classValues: ["flex-direction: row-reverse;"] },
    ],
  },
  {
    classPrefix: "fg-",
    classLink: "flex-grow",
    additionalClasses: [
      { classSuffix: "0", classValues: ["flex-grow: 0;"] },
      { classSuffix: "1", classValues: ["flex-grow: 1;"] },
      { classSuffix: "2", classValues: ["flex-grow: 2;"] },
      { classSuffix: "3", classValues: ["flex-grow: 3;"] },
      { classSuffix: "4", classValues: ["flex-grow: 4;"] },
      { classSuffix: "5", classValues: ["flex-grow: 5;"] },
      { classSuffix: "6", classValues: ["flex-grow: 6;"] },
      { classSuffix: "7", classValues: ["flex-grow: 7;"] },
      { classSuffix: "8", classValues: ["flex-grow: 8;"] },
    ],
  },
  {
    classPrefix: "fs-",
    classLink: "flex-shrink",
    additionalClasses: [
      { classSuffix: "0", classValues: ["flex-shrink: 0;"] },
      { classSuffix: "1", classValues: ["flex-shrink: 1;"] },
      { classSuffix: "2", classValues: ["flex-shrink: 2;"] },
      { classSuffix: "3", classValues: ["flex-shrink: 3;"] },
      { classSuffix: "4", classValues: ["flex-shrink: 4;"] },
      { classSuffix: "5", classValues: ["flex-shrink: 5;"] },
      { classSuffix: "6", classValues: ["flex-shrink: 6;"] },
      { classSuffix: "7", classValues: ["flex-shrink: 7;"] },
      { classSuffix: "8", classValues: ["flex-shrink: 8;"] },
    ],
  },
  {
    classPrefix: "fw-",
    classLink: "flex-wrap",
    additionalClasses: [
      { classSuffix: "nw", classValues: ["flex-wrap: nowrap;"] },
      { classSuffix: "w", classValues: ["flex-wrap: wrap;"] },
      { classSuffix: "wr", classValues: ["flex-wrap: wrap-reverse;"] },
    ],
  },
  {
    classPrefix: "f-",
    classLink: "flex",
    additionalClasses: [
      { classSuffix: "0", classValues: ["flex: 0;"] },
      { classSuffix: "1", classValues: ["flex: 1;"] },
      { classSuffix: "2", classValues: ["flex: 2;"] },
      { classSuffix: "3", classValues: ["flex: 3;"] },
      { classSuffix: "4", classValues: ["flex: 4;"] },
      { classSuffix: "5", classValues: ["flex: 5;"] },
      { classSuffix: "6", classValues: ["flex: 6;"] },
      { classSuffix: "7", classValues: ["flex: 7;"] },
      { classSuffix: "8", classValues: ["flex: 8;"] },
      { classSuffix: "auto", classValues: ["flex: auto;"] },
      { classSuffix: "full", classValues: ["flex: 100%;"] },
      { classSuffix: "half", classValues: ["flex: 50%;"] },
    ],
  },
  {
    classPrefix: "gac-",
    classLink: "grid-auto-columns",
    additionalClasses: [
      { classSuffix: "min", classValues: ["grid-auto-columns: min-content;"] },
      { classSuffix: "max", classValues: ["grid-auto-columns: max-content;"] },
      { classSuffix: "auto", classValues: ["grid-auto-columns: auto;"] },
    ],
  },
  {
    classPrefix: "gaf-",
    classLink: "grid-auto-flow",
    additionalClasses: [
      { classSuffix: "r", classValues: ["grid-auto-flow: row;"] },
      { classSuffix: "c", classValues: ["grid-auto-flow: column;"] },
      { classSuffix: "d", classValues: ["grid-auto-flow: dense;"] },
    ],
  },
  {
    classPrefix: "gar-",
    classLink: "grid-auto-rows",
    additionalClasses: [
      { classSuffix: "min", classValues: ["grid-auto-rows: min-content;"] },
      { classSuffix: "max", classValues: ["grid-auto-rows: max-content;"] },
      { classSuffix: "auto", classValues: ["grid-auto-rows: auto;"] },
    ],
  },
  {
    classPrefix: "gc-s-",
    classLink: "grid-column",
    additionalClasses: [
      {
        classSuffix: "1",
        classValues: ["span 1 / span 1"],
      },
      {
        classSuffix: "2",
        classValues: ["span 2 / span 2"],
      },
      {
        classSuffix: "3",
        classValues: ["span 3 / span 3"],
      },
      {
        classSuffix: "4",
        classValues: ["span 4 / span 4"],
      },
      {
        classSuffix: "5",
        classValues: ["span 5 / span 5"],
      },
      {
        classSuffix: "6",
        classValues: ["span 6 / span 6"],
      },
      {
        classSuffix: "7",
        classValues: ["span 7 / span 7"],
      },
      {
        classSuffix: "8",
        classValues: ["span 8 / span 8"],
      },
      {
        classSuffix: "9",
        classValues: ["span 9 / span 9"],
      },
      {
        classSuffix: "10",
        classValues: ["span 10 / span 10"],
      },
      {
        classSuffix: "11",
        classValues: ["span 11 / span 11"],
      },
      {
        classSuffix: "12",
        classValues: ["span 12 / span 12"],
      },
      {
        classSuffix: "13",
        classValues: ["span 13 / span 13"],
      },
      {
        classSuffix: "14",
        classValues: ["span 14 / span 14"],
      },
      {
        classSuffix: "15",
        classValues: ["span 15 / span 15"],
      },
      {
        classSuffix: "16",
        classValues: ["span 16 / span 16"],
      },
    ],
  },
  {
    classPrefix: "gcs-",
    classLink: "grid-column-start",
    additionalClasses: [
      {
        classSuffix: "1",
        classValues: ["grid-column-start: 1;"],
      },
      {
        classSuffix: "2",
        classValues: ["grid-column-start: 2;"],
      },
      {
        classSuffix: "3",
        classValues: ["grid-column-start: 3;"],
      },
      {
        classSuffix: "4",
        classValues: ["grid-column-start: 4;"],
      },
      {
        classSuffix: "5",
        classValues: ["grid-column-start: 5;"],
      },
      {
        classSuffix: "6",
        classValues: ["grid-column-start: 6;"],
      },
      {
        classSuffix: "7",
        classValues: ["grid-column-start: 7;"],
      },
      {
        classSuffix: "8",
        classValues: ["grid-column-start: 8;"],
      },
      {
        classSuffix: "9",
        classValues: ["grid-column-start: 9;"],
      },
      {
        classSuffix: "10",
        classValues: ["grid-column-start: 10"],
      },
      {
        classSuffix: "11",
        classValues: ["grid-column-start: 11"],
      },
      {
        classSuffix: "12",
        classValues: ["grid-column-start: 12"],
      },
      {
        classSuffix: "13",
        classValues: ["grid-column-start: 13"],
      },
      {
        classSuffix: "14",
        classValues: ["grid-column-start: 14"],
      },
      {
        classSuffix: "15",
        classValues: ["grid-column-start: 15"],
      },
      {
        classSuffix: "16",
        classValues: ["grid-column-start: 16"],
      },
    ],
  },
  {
    classPrefix: "gce-",
    classLink: "grid-column-end",
    additionalClasses: [
      {
        classSuffix: "1",
        classValues: ["grid-column-end: 1;"],
      },
      {
        classSuffix: "2",
        classValues: ["grid-column-end: 2;"],
      },
      {
        classSuffix: "3",
        classValues: ["grid-column-end: 3;"],
      },
      {
        classSuffix: "4",
        classValues: ["grid-column-end: 4;"],
      },
      {
        classSuffix: "5",
        classValues: ["grid-column-end: 5;"],
      },
      {
        classSuffix: "6",
        classValues: ["grid-column-end: 6;"],
      },
      {
        classSuffix: "7",
        classValues: ["grid-column-end: 7;"],
      },
      {
        classSuffix: "8",
        classValues: ["grid-column-end: 8;"],
      },
      {
        classSuffix: "9",
        classValues: ["grid-column-end: 9;"],
      },
      {
        classSuffix: "10",
        classValues: ["grid-column-end: 10"],
      },
      {
        classSuffix: "11",
        classValues: ["grid-column-end: 11"],
      },
      {
        classSuffix: "12",
        classValues: ["grid-column-end: 12"],
      },
      {
        classSuffix: "13",
        classValues: ["grid-column-end: 13"],
      },
      {
        classSuffix: "14",
        classValues: ["grid-column-end: 14"],
      },
      {
        classSuffix: "15",
        classValues: ["grid-column-end: 15"],
      },
      {
        classSuffix: "16",
        classValues: ["grid-column-end: 16"],
      },
    ],
  },
  {
    classPrefix: "gr-s-",
    classLink: "grid-row",
    additionalClasses: [
      {
        classSuffix: "1",
        classValues: ["span 1 / span 1"],
      },
      {
        classSuffix: "2",
        classValues: ["span 2 / span 2"],
      },
      {
        classSuffix: "3",
        classValues: ["span 3 / span 3"],
      },
      {
        classSuffix: "4",
        classValues: ["span 4 / span 4"],
      },
      {
        classSuffix: "5",
        classValues: ["span 5 / span 5"],
      },
      {
        classSuffix: "6",
        classValues: ["span 6 / span 6"],
      },
      {
        classSuffix: "7",
        classValues: ["span 7 / span 7"],
      },
      {
        classSuffix: "8",
        classValues: ["span 8 / span 8"],
      },
      {
        classSuffix: "9",
        classValues: ["span 9 / span 9"],
      },
      {
        classSuffix: "10",
        classValues: ["span 10 / span 10"],
      },
      {
        classSuffix: "11",
        classValues: ["span 11 / span 11"],
      },
      {
        classSuffix: "12",
        classValues: ["span 12 / span 12"],
      },
      {
        classSuffix: "13",
        classValues: ["span 13 / span 13"],
      },
      {
        classSuffix: "14",
        classValues: ["span 14 / span 14"],
      },
      {
        classSuffix: "15",
        classValues: ["span 15 / span 15"],
      },
      {
        classSuffix: "16",
        classValues: ["span 16 / span 16"],
      },
    ],
  },
  {
    classPrefix: "grs-",
    classLink: "grid-row-start",
    additionalClasses: [
      {
        classSuffix: "1",
        classValues: ["grid-row-start: 1;"],
      },
      {
        classSuffix: "2",
        classValues: ["grid-row-start: 2;"],
      },
      {
        classSuffix: "3",
        classValues: ["grid-row-start: 3;"],
      },
      {
        classSuffix: "4",
        classValues: ["grid-row-start: 4;"],
      },
      {
        classSuffix: "5",
        classValues: ["grid-row-start: 5;"],
      },
      {
        classSuffix: "6",
        classValues: ["grid-row-start: 6;"],
      },
      {
        classSuffix: "7",
        classValues: ["grid-row-start: 7;"],
      },
      {
        classSuffix: "8",
        classValues: ["grid-row-start: 8;"],
      },
      {
        classSuffix: "9",
        classValues: ["grid-row-start: 9;"],
      },
      {
        classSuffix: "10",
        classValues: ["grid-row-start: 10"],
      },
      {
        classSuffix: "11",
        classValues: ["grid-row-start: 11"],
      },
      {
        classSuffix: "12",
        classValues: ["grid-row-start: 12"],
      },
      {
        classSuffix: "13",
        classValues: ["grid-row-start: 13"],
      },
      {
        classSuffix: "14",
        classValues: ["grid-row-start: 14"],
      },
      {
        classSuffix: "15",
        classValues: ["grid-row-start: 15"],
      },
      {
        classSuffix: "16",
        classValues: ["grid-row-start: 16"],
      },
    ],
  },
  {
    classPrefix: "gre-",
    classLink: "grid-row-end",
    additionalClasses: [
      {
        classSuffix: "1",
        classValues: ["grid-row-end: 1;"],
      },
      {
        classSuffix: "2",
        classValues: ["grid-row-end: 2;"],
      },
      {
        classSuffix: "3",
        classValues: ["grid-row-end: 3;"],
      },
      {
        classSuffix: "4",
        classValues: ["grid-row-end: 4;"],
      },
      {
        classSuffix: "5",
        classValues: ["grid-row-end: 5;"],
      },
      {
        classSuffix: "6",
        classValues: ["grid-row-end: 6;"],
      },
      {
        classSuffix: "7",
        classValues: ["grid-row-end: 7;"],
      },
      {
        classSuffix: "8",
        classValues: ["grid-row-end: 8;"],
      },
      {
        classSuffix: "9",
        classValues: ["grid-row-end: 9;"],
      },
      {
        classSuffix: "10",
        classValues: ["grid-row-end: 10"],
      },
      {
        classSuffix: "11",
        classValues: ["grid-row-end: 11"],
      },
      {
        classSuffix: "12",
        classValues: ["grid-row-end: 12"],
      },
      {
        classSuffix: "13",
        classValues: ["grid-row-end: 13"],
      },
      {
        classSuffix: "14",
        classValues: ["grid-row-end: 14"],
      },
      {
        classSuffix: "15",
        classValues: ["grid-row-end: 15"],
      },
      {
        classSuffix: "16",
        classValues: ["grid-row-end: 16"],
      },
    ],
  },
  {
    classPrefix: "gtc-",
    classLink: "grid-template-columns",
    additionalClasses: [
      {
        classSuffix: "1",
        classValues: ["grid-template-columns: repeat(1, minmax(0, 1fr));"],
      },
      {
        classSuffix: "2",
        classValues: ["grid-template-columns: repeat(2, minmax(0, 1fr));"],
      },
      {
        classSuffix: "3",
        classValues: ["grid-template-columns: repeat(3, minmax(0, 1fr));"],
      },
      {
        classSuffix: "4",
        classValues: ["grid-template-columns: repeat(4, minmax(0, 1fr));"],
      },
      {
        classSuffix: "5",
        classValues: ["grid-template-columns: repeat(5, minmax(0, 1fr));"],
      },
      {
        classSuffix: "6",
        classValues: ["grid-template-columns: repeat(6, minmax(0, 1fr));"],
      },
      {
        classSuffix: "7",
        classValues: ["grid-template-columns: repeat(7, minmax(0, 1fr));"],
      },
      {
        classSuffix: "8",
        classValues: ["grid-template-columns: repeat(8, minmax(0, 1fr));"],
      },
      {
        classSuffix: "9",
        classValues: ["grid-template-columns: repeat(9, minmax(0, 1fr));"],
      },
      {
        classSuffix: "10",
        classValues: ["grid-template-columns: repeat(10, minmax(0, 1fr));"],
      },
      {
        classSuffix: "11",
        classValues: ["grid-template-columns: repeat(11, minmax(0, 1fr));"],
      },
    ],
  },
  {
    classPrefix: "gtr-",
    classLink: "grid-template-rows",
    additionalClasses: [
      {
        classSuffix: "1",
        classValues: ["grid-template-rows: repeat(1, minmax(0, 1fr));"],
      },
      {
        classSuffix: "2",
        classValues: ["grid-template-rows: repeat(2, minmax(0, 1fr));"],
      },
      {
        classSuffix: "3",
        classValues: ["grid-template-rows: repeat(3, minmax(0, 1fr));"],
      },
      {
        classSuffix: "4",
        classValues: ["grid-template-rows: repeat(4, minmax(0, 1fr));"],
      },
      {
        classSuffix: "5",
        classValues: ["grid-template-rows: repeat(5, minmax(0, 1fr));"],
      },
      {
        classSuffix: "6",
        classValues: ["grid-template-rows: repeat(6, minmax(0, 1fr));"],
      },
      {
        classSuffix: "7",
        classValues: ["grid-template-rows: repeat(7, minmax(0, 1fr));"],
      },
      {
        classSuffix: "8",
        classValues: ["grid-template-rows: repeat(8, minmax(0, 1fr));"],
      },
      {
        classSuffix: "9",
        classValues: ["grid-template-rows: repeat(9, minmax(0, 1fr));"],
      },
      {
        classSuffix: "10",
        classValues: ["grid-template-rows: repeat(10, minmax(0, 1fr));"],
      },
      {
        classSuffix: "11",
        classValues: ["grid-template-rows: repeat(11, minmax(0, 1fr));"],
      },
      {
        classSuffix: "12",
        classValues: ["grid-template-rows: repeat(12, minmax(0, 1fr));"],
      },
      {
        classSuffix: "13",
        classValues: ["grid-template-rows: repeat(13, minmax(0, 1fr));"],
      },
      {
        classSuffix: "14",
        classValues: ["grid-template-rows: repeat(14, minmax(0, 1fr));"],
      },
      {
        classSuffix: "15",
        classValues: ["grid-template-rows: repeat(15, minmax(0, 1fr));"],
      },
      {
        classSuffix: "16",
        classValues: ["grid-template-rows: repeat(16, minmax(0, 1fr));"],
      },
    ],
  },
  {
    classPrefix: "ac-",
    classLink: "align-content",
    additionalClasses: [
      { classSuffix: "c", classValues: ["align-content: center;"] },
      { classSuffix: "s", classValues: ["align-content: start;"] },
      { classSuffix: "e", classValues: ["align-content: end;"] },
      { classSuffix: "fs", classValues: ["align-content: flex-start;"] },
      { classSuffix: "fe", classValues: ["align-content: flex-end;"] },
      { classSuffix: "n", classValues: ["align-content: normal;"] },
      { classSuffix: "sb", classValues: ["align-content: space-between;"] },
      { classSuffix: "sa", classValues: ["align-content: space-around;"] },
      { classSuffix: "se", classValues: ["align-content: space-evenly;"] },
      { classSuffix: "stretch", classValues: ["align-content: stretch;"] },
    ],
  },
  {
    classPrefix: "ai-",
    classLink: "align-items",
    additionalClasses: [
      { classSuffix: "n", classValues: ["align-items: normal;"] },
      { classSuffix: "stretch", classValues: ["align-items: stretch;"] },
      { classSuffix: "c", classValues: ["align-items: center;"] },
      { classSuffix: "start", classValues: ["align-items: start;"] },
      { classSuffix: "e", classValues: ["align-items: end;"] },
      { classSuffix: "fs", classValues: ["align-items: flex-start;"] },
      { classSuffix: "fe", classValues: ["align-items: flex-end;"] },
    ],
  },
  {
    classPrefix: "as-",
    classLink: "align-self",
    additionalClasses: [
      { classSuffix: "auto", classValues: ["align-self: auto;"] },
      { classSuffix: "n", classValues: ["align-self: normal;"] },
      { classSuffix: "c", classValues: ["align-self: center;"] },
      { classSuffix: "start", classValues: ["align-self: start;"] },
      { classSuffix: "e", classValues: ["align-self: end;"] },
      { classSuffix: "fs", classValues: ["align-self: flex-start;"] },
      { classSuffix: "fe", classValues: ["align-self: flex-end;"] },
      { classSuffix: "stretch", classValues: ["align-self: stretch;"] },
    ],
  },
  {
    classPrefix: "cg-",
    classLink: "column-gap",
    additionalClasses: [
      { classSuffix: "1", classValues: ["column-gap: 0.25rem;"] },
      { classSuffix: "2", classValues: ["column-gap: 0.5rem;"] },
      { classSuffix: "3", classValues: ["column-gap: 0.75rem;"] },
      { classSuffix: "4", classValues: ["column-gap: 1rem;"] },
      { classSuffix: "5", classValues: ["column-gap: 1.25rem;"] },
      { classSuffix: "6", classValues: ["column-gap: 1.5rem;"] },
      { classSuffix: "7", classValues: ["column-gap: 1.75rem;"] },
      { classSuffix: "8", classValues: ["column-gap: 2rem;"] },
      { classSuffix: "9", classValues: ["column-gap: 2.25rem;"] },
      { classSuffix: "10", classValues: ["column-gap: 2.5rem;"] },
      { classSuffix: "11", classValues: ["column-gap: 2.75rem;"] },
      { classSuffix: "12", classValues: ["column-gap: 3rem;"] },
      { classSuffix: "13", classValues: ["column-gap: 3.25rem;"] },
      { classSuffix: "14", classValues: ["column-gap: 3.5rem;"] },
      { classSuffix: "15", classValues: ["column-gap: 3.75rem;"] },
      { classSuffix: "16", classValues: ["column-gap: 4rem;"] },
    ],
  },
  {
    classPrefix: "g-",
    classLink: "gap",
    additionalClasses: [
      { classSuffix: "1", classValues: ["gap: 0.25rem;"] },
      { classSuffix: "2", classValues: ["gap: 0.5rem;"] },
      { classSuffix: "3", classValues: ["gap: 0.75rem;"] },
      { classSuffix: "4", classValues: ["gap: 1rem;"] },
      { classSuffix: "5", classValues: ["gap: 1.25rem;"] },
      { classSuffix: "6", classValues: ["gap: 1.5rem;"] },
      { classSuffix: "7", classValues: ["gap: 1.75rem;"] },
      { classSuffix: "8", classValues: ["gap: 2rem;"] },
      { classSuffix: "9", classValues: ["gap: 2.25rem;"] },
      { classSuffix: "10", classValues: ["gap: 2.5rem;"] },
      { classSuffix: "11", classValues: ["gap: 2.75rem;"] },
      { classSuffix: "12", classValues: ["gap: 3rem;"] },
      { classSuffix: "13", classValues: ["gap: 3.25rem;"] },
      { classSuffix: "14", classValues: ["gap: 3.5rem;"] },
      { classSuffix: "15", classValues: ["gap: 3.75rem;"] },
      { classSuffix: "16", classValues: ["gap: 4rem;"] },
    ],
  },
  {
    classPrefix: "jc-",
    classLink: "justify-content",
    additionalClasses: [
      { classSuffix: "c", classValues: ["justify-content: center;"] },
      { classSuffix: "s", classValues: ["justify-content: start;"] },
      { classSuffix: "e", classValues: ["justify-content: end;"] },
      { classSuffix: "fs", classValues: ["justify-content: flex-start;"] },
      { classSuffix: "fe", classValues: ["justify-content: flex-end;"] },
      { classSuffix: "l", classValues: ["justify-content: left;"] },
      { classSuffix: "r", classValues: ["justify-content: right;"] },
      { classSuffix: "n", classValues: ["justify-content: normal;"] },
      { classSuffix: "sb", classValues: ["justify-content: space-between;"] },
      { classSuffix: "sa", classValues: ["justify-content: space-around;"] },
      { classSuffix: "se", classValues: ["justify-content: space-evenly;"] },
      { classSuffix: "stretch", classValues: ["justify-content: stretch;"] },
    ],
  },
  {
    classPrefix: "ji-",
    classLink: "justify-items",
    additionalClasses: [
      { classSuffix: "c", classValues: ["justify-items: center;"] },
      { classSuffix: "s", classValues: ["justify-items: start;"] },
      { classSuffix: "e", classValues: ["justify-items: end;"] },
      { classSuffix: "fs", classValues: ["justify-items: flex-start;"] },
      { classSuffix: "fe", classValues: ["justify-items: flex-end;"] },
      { classSuffix: "l", classValues: ["justify-items: left;"] },
      { classSuffix: "r", classValues: ["justify-items: right;"] },
      { classSuffix: "n", classValues: ["justify-items: normal;"] },
      { classSuffix: "sb", classValues: ["justify-items: space-between;"] },
      { classSuffix: "sa", classValues: ["justify-items: space-around;"] },
      { classSuffix: "se", classValues: ["justify-items: space-evenly;"] },
      { classSuffix: "stretch", classValues: ["justify-items: stretch;"] },
    ],
  },
  {
    classPrefix: "js-",
    classLink: "justify-self",
    additionalClasses: [
      { classSuffix: "auto", classValues: ["justify-self: auto;"] },
      { classSuffix: "n", classValues: ["justify-self: normal;"] },
      { classSuffix: "stretch", classValues: ["justify-self: stretch;"] },
      { classSuffix: "c", classValues: ["justify-self: center;"] },
      { classSuffix: "s", classValues: ["justify-self: start;"] },
      { classSuffix: "e", classValues: ["justify-self: end;"] },
      { classSuffix: "fs", classValues: ["justify-self: flex-start;"] },
      { classSuffix: "fe", classValues: ["justify-self: flex-end;"] },
      { classSuffix: "l", classValues: ["justify-self: left;"] },
      { classSuffix: "r", classValues: ["justify-self: right;"] },
    ],
  },
  {
    classPrefix: "rg-",
    classLink: "row-gap",
    additionalClasses: [
      { classSuffix: "1", classValues: ["row-gap: 0.25rem;"] },
      { classSuffix: "2", classValues: ["row-gap: 0.5rem;"] },
      { classSuffix: "3", classValues: ["row-gap: 0.75rem;"] },
      { classSuffix: "4", classValues: ["row-gap: 1rem;"] },
      { classSuffix: "5", classValues: ["row-gap: 1.25rem;"] },
      { classSuffix: "6", classValues: ["row-gap: 1.5rem;"] },
      { classSuffix: "7", classValues: ["row-gap: 1.75rem;"] },
      { classSuffix: "8", classValues: ["row-gap: 2rem;"] },
      { classSuffix: "9", classValues: ["row-gap: 2.25rem;"] },
      { classSuffix: "10", classValues: ["row-gap: 2.5rem;"] },
      { classSuffix: "11", classValues: ["row-gap: 2.75rem;"] },
      { classSuffix: "12", classValues: ["row-gap: 3rem;"] },
      { classSuffix: "13", classValues: ["row-gap: 3.25rem;"] },
      { classSuffix: "14", classValues: ["row-gap: 3.5rem;"] },
      { classSuffix: "15", classValues: ["row-gap: 3.75rem;"] },
      { classSuffix: "16", classValues: ["row-gap: 4rem;"] },
    ],
  },

  // layout
  {
    classPrefix: "ar-",
    classLink: "aspect-ratio",
    additionalClasses: [
      { classSuffix: "s", classValues: ["aspect-ratio: 1/1;"] },
      { classSuffix: "l", classValues: ["aspect-ratio: 16/9;"] },
      { classSuffix: "auto", classValues: ["aspect-ratio: auto;"] },
    ],
  },
  {
    classPrefix: "cols-",
    classLink: "columns",
    additionalClasses: [
      { classSuffix: "1", classValues: ["columns: 1;"] },
      { classSuffix: "2", classValues: ["columns: 2;"] },
      { classSuffix: "3", classValues: ["columns: 3;"] },
      { classSuffix: "4", classValues: ["columns: 4;"] },
      { classSuffix: "5", classValues: ["columns: 5;"] },
      { classSuffix: "6", classValues: ["columns: 6;"] },
      { classSuffix: "7", classValues: ["columns: 7;"] },
      { classSuffix: "8", classValues: ["columns: 8;"] },
      { classSuffix: "9", classValues: ["columns: 9;"] },
      { classSuffix: "10", classValues: ["columns: 10;"] },
      { classSuffix: "11", classValues: ["columns: 11;"] },
      { classSuffix: "12", classValues: ["columns: 12;"] },
      { classSuffix: "13", classValues: ["columns: 13;"] },
      { classSuffix: "14", classValues: ["columns: 14;"] },
      { classSuffix: "15", classValues: ["columns: 15;"] },
      { classSuffix: "16", classValues: ["columns: 16;"] },
    ],
  },
  {
    classPrefix: "cnt",
    classLink: "container",
    additionalClasses: [{ classSuffix: "", classValues: ["width: 100%;"] }],
  },
  {
    classPrefix: "dir-b-",
    classLink: "direction",
    additionalClasses: [
      { classSuffix: "0", classValues: ["bottom: 0rem;"] },
      { classSuffix: "1", classValues: ["bottom: 1rem;"] },
      { classSuffix: "2", classValues: ["bottom: 2rem;"] },
      { classSuffix: "3", classValues: ["bottom: 4rem;"] },
      { classSuffix: "4", classValues: ["bottom: 6rem;"] },
      { classSuffix: "5", classValues: ["bottom: 8rem;"] },
      { classSuffix: "6", classValues: ["bottom: 10rem;"] },
      { classSuffix: "7", classValues: ["bottom: 12rem;"] },
      { classSuffix: "8", classValues: ["bottom: 14rem;"] },
      { classSuffix: "9", classValues: ["bottom: 16rem;"] },
      { classSuffix: "10", classValues: ["bottom: 18rem;"] },
      { classSuffix: "11", classValues: ["bottom: 20rem;"] },
      { classSuffix: "12", classValues: ["bottom: 22rem;"] },
      { classSuffix: "13", classValues: ["bottom: 24rem;"] },
      { classSuffix: "14", classValues: ["bottom: 26rem;"] },
      { classSuffix: "15", classValues: ["bottom: 28rem;"] },
      { classSuffix: "16", classValues: ["bottom: 30rem;"] },
      { classSuffix: "none", classValues: ["bottom: none;"] },
    ],
  },
  {
    classPrefix: "dir-i-",
    classLink: "direction#inset",
    additionalClasses: [
      { classSuffix: "0", classValues: ["inset: 0rem;"] },
      { classSuffix: "1", classValues: ["inset: 1rem;"] },
      { classSuffix: "2", classValues: ["inset: 2rem;"] },
      { classSuffix: "3", classValues: ["inset: 4rem;"] },
      { classSuffix: "4", classValues: ["inset: 6rem;"] },
      { classSuffix: "5", classValues: ["inset: 8rem;"] },
      { classSuffix: "6", classValues: ["inset: 10rem;"] },
      { classSuffix: "7", classValues: ["inset: 12rem;"] },
      { classSuffix: "8", classValues: ["inset: 14rem;"] },
      { classSuffix: "9", classValues: ["inset: 16rem;"] },
      { classSuffix: "10", classValues: ["inset: 18rem;"] },
      { classSuffix: "11", classValues: ["inset: 20rem;"] },
      { classSuffix: "12", classValues: ["inset: 22rem;"] },
      { classSuffix: "13", classValues: ["inset: 24rem;"] },
      { classSuffix: "14", classValues: ["inset: 26rem;"] },
      { classSuffix: "15", classValues: ["inset: 28rem;"] },
      { classSuffix: "16", classValues: ["inset: 30rem;"] },
      { classSuffix: "none", classValues: ["inset: none;"] },
    ],
  },
  {
    classPrefix: "dir-l-",
    classLink: "direction#left",
    additionalClasses: [
      { classSuffix: "0", classValues: ["left: 0rem;"] },
      { classSuffix: "1", classValues: ["left: 1rem;"] },
      { classSuffix: "2", classValues: ["left: 2rem;"] },
      { classSuffix: "3", classValues: ["left: 4rem;"] },
      { classSuffix: "4", classValues: ["left: 6rem;"] },
      { classSuffix: "5", classValues: ["left: 8rem;"] },
      { classSuffix: "6", classValues: ["left: 10rem;"] },
      { classSuffix: "7", classValues: ["left: 12rem;"] },
      { classSuffix: "8", classValues: ["left: 14rem;"] },
      { classSuffix: "9", classValues: ["left: 16rem;"] },
      { classSuffix: "10", classValues: ["left: 18rem;"] },
      { classSuffix: "11", classValues: ["left: 20rem;"] },
      { classSuffix: "12", classValues: ["left: 22rem;"] },
      { classSuffix: "13", classValues: ["left: 24rem;"] },
      { classSuffix: "14", classValues: ["left: 26rem;"] },
      { classSuffix: "15", classValues: ["left: 28rem;"] },
      { classSuffix: "16", classValues: ["left: 30rem;"] },
      { classSuffix: "none", classValues: ["left: none;"] },
    ],
  },
  {
    classPrefix: "dir-r-",
    classLink: "direction#right",
    additionalClasses: [
      { classSuffix: "0", classValues: ["right: 0rem;"] },
      { classSuffix: "1", classValues: ["right: 1rem;"] },
      { classSuffix: "2", classValues: ["right: 2rem;"] },
      { classSuffix: "3", classValues: ["right: 4rem;"] },
      { classSuffix: "4", classValues: ["right: 6rem;"] },
      { classSuffix: "5", classValues: ["right: 8rem;"] },
      { classSuffix: "6", classValues: ["right: 10rem;"] },
      { classSuffix: "7", classValues: ["right: 12rem;"] },
      { classSuffix: "8", classValues: ["right: 14rem;"] },
      { classSuffix: "9", classValues: ["right: 16rem;"] },
      { classSuffix: "10", classValues: ["right: 18rem;"] },
      { classSuffix: "11", classValues: ["right: 20rem;"] },
      { classSuffix: "12", classValues: ["right: 22rem;"] },
      { classSuffix: "13", classValues: ["right: 24rem;"] },
      { classSuffix: "14", classValues: ["right: 26rem;"] },
      { classSuffix: "15", classValues: ["right: 28rem;"] },
      { classSuffix: "16", classValues: ["right: 30rem;"] },
      { classSuffix: "none", classValues: ["right: none;"] },
    ],
  },
  {
    classPrefix: "dir-t-",
    classLink: "direction#top",
    additionalClasses: [
      { classSuffix: "0", classValues: ["top: 0rem;"] },
      { classSuffix: "1", classValues: ["top: 1rem;"] },
      { classSuffix: "2", classValues: ["top: 2rem;"] },
      { classSuffix: "3", classValues: ["top: 4rem;"] },
      { classSuffix: "4", classValues: ["top: 6rem;"] },
      { classSuffix: "5", classValues: ["top: 8rem;"] },
      { classSuffix: "6", classValues: ["top: 10rem;"] },
      { classSuffix: "7", classValues: ["top: 12rem;"] },
      { classSuffix: "8", classValues: ["top: 14rem;"] },
      { classSuffix: "9", classValues: ["top: 16rem;"] },
      { classSuffix: "10", classValues: ["top: 18rem;"] },
      { classSuffix: "11", classValues: ["top: 20rem;"] },
      { classSuffix: "12", classValues: ["top: 22rem;"] },
      { classSuffix: "13", classValues: ["top: 24rem;"] },
      { classSuffix: "14", classValues: ["top: 26rem;"] },
      { classSuffix: "15", classValues: ["top: 28rem;"] },
      { classSuffix: "16", classValues: ["top: 30rem;"] },
      { classSuffix: "none", classValues: ["top: none;"] },
    ],
  },
  {
    classPrefix: "d-",
    classLink: "display",
    additionalClasses: [
      { classSuffix: "b", classValues: ["display: block;"] },
      { classSuffix: "i", classValues: ["display: inline;"] },
      { classSuffix: "ib", classValues: ["display: inline-block;"] },
      { classSuffix: "f", classValues: ["display: flex;"] },
      { classSuffix: "if", classValues: ["display: inline-flex;"] },
      { classSuffix: "g", classValues: ["display: grid;"] },
      { classSuffix: "fr", classValues: ["display: flow-root;"] },
      { classSuffix: "none", classValues: ["display: none;"] },
    ],
  },
  {
    classPrefix: "f-",
    classLink: "float",
    additionalClasses: [
      { classSuffix: "none", classValues: ["float: none;"] },
      { classSuffix: "l", classValues: ["float: left;"] },
      { classSuffix: "r", classValues: ["float: right;"] },
      { classSuffix: "is", classValues: ["float: inline-start;"] },
      { classSuffix: "ie", classValues: ["float: inline-end;"] },
    ],
  },
  {
    classPrefix: "ins",
    classLink: "inset",
    additionalClasses: [
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
    additionalClasses: [
      { classSuffix: "c", classValues: ["object-fit: cover;"] },
      { classSuffix: "f", classValues: ["object-fit: fill;"] },
      { classSuffix: "none", classValues: ["object-fit: none;"] },
      { classSuffix: "sd", classValues: ["object-fit: scale-down;"] },
    ],
  },
  {
    classPrefix: "op-",
    classLink: "object-position",
    additionalClasses: [
      { classSuffix: "b", classValues: ["object-position: bottom;"] },
      { classSuffix: "c", classValues: ["object-position: center;"] },
      { classSuffix: "lb", classValues: ["object-position: left bottom;"] },
      { classSuffix: "l", classValues: ["object-position: left;"] },
      { classSuffix: "r", classValues: ["object-position: right;"] },
      { classSuffix: "rb", classValues: ["object-position: right bottom;"] },
      { classSuffix: "rt", classValues: ["object-position: right top;"] },
      { classSuffix: "t", classValues: ["object-position: top;"] },
    ],
  },
  {
    classPrefix: "ovf-",
    classLink: "overflow",
    additionalClasses: [
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
    additionalClasses: [
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
    additionalClasses: [
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
    additionalClasses: [
      { classSuffix: "a", classValues: ["position: absolute;"] },
      { classSuffix: "f", classValues: ["position: fixed;"] },
      { classSuffix: "r", classValues: ["position: relative;"] },
      { classSuffix: "s", classValues: ["position: static;"] },
      { classSuffix: "t", classValues: ["position: sticky;"] },
    ],
  },
  {
    classPrefix: "zi-",
    classLink: "z-index",
    additionalClasses: [
      { classSuffix: "0", classValues: ["z-index: 0;"] },
      { classSuffix: "10", classValues: ["z-index: 10;"] },
      { classSuffix: "20", classValues: ["z-index: 20;"] },
      { classSuffix: "30", classValues: ["z-index: 30;"] },
      { classSuffix: "40", classValues: ["z-index: 40;"] },
      { classSuffix: "50", classValues: ["z-index: 50;"] },
      { classSuffix: "60", classValues: ["z-index: 60;"] },
      { classSuffix: "70", classValues: ["z-index: 70;"] },
      { classSuffix: "80", classValues: ["z-index: 80;"] },
      { classSuffix: "90", classValues: ["z-index: 90;"] },
      { classSuffix: "auto", classValues: ["z-index: auto;"] },
    ],
  },

  // miscellaneous
  {
    classPrefix: "a-",
    classLink: "appearance",
    additionalClasses: [
      { classSuffix: "none", classValues: ["appearance: none;"] },
      { classSuffix: "auto", classValues: ["appearance: auto;"] },
    ],
  },
  {
    classPrefix: "c-",
    classLink: "cursor",
    additionalClasses: [
      { classSuffix: "auto", classValues: ["cursor: auto;"] },
      { classSuffix: "p", classValues: ["cursor: pointer;"] },
      { classSuffix: "t", classValues: ["cursor: text;"] },
      { classSuffix: "m", classValues: ["cursor: move;"] },
      { classSuffix: "na", classValues: ["cursor: not-allowed;"] },
      { classSuffix: "c", classValues: ["cursor: crosshair;"] },
      { classSuffix: "h", classValues: ["cursor: help;"] },
      { classSuffix: "er", classValues: ["cursor: e-resize;"] },
      { classSuffix: "nr", classValues: ["cursor: n-resize;"] },
      { classSuffix: "w", classValues: ["cursor: wait;"] },
    ],
  },
  {
    classPrefix: "pe-",
    classLink: "pointer-events",
    additionalClasses: [
      { classSuffix: "auto", classValues: ["pointer-events: auto;"] },
      { classSuffix: "none", classValues: ["pointer-events: none;"] },
    ],
  },
  {
    classPrefix: "r-",
    classLink: "resize",
    additionalClasses: [
      { classSuffix: "b", classValues: ["resize: both;"] },
      { classSuffix: "h", classValues: ["resize: horizontal;"] },
      { classSuffix: "none", classValues: ["resize: none;"] },
      { classSuffix: "v", classValues: ["resize: vertical;"] },
    ],
  },
  {
    classPrefix: "us-",
    classLink: "user-select",
    additionalClasses: [
      { classSuffix: "auto", classValues: ["user-select: auto;"] },
      { classSuffix: "none", classValues: ["user-select: none;"] },
    ],
  },

  // tables
  {
    classPrefix: "cs-",
    classLink: "caption-side",
    additionalClasses: [
      { classSuffix: "bottom", classValues: ["caption-side: bottom"] },
      { classSuffix: "top", classValues: ["caption-side: top;"] },
    ],
  },
  {
    classPrefix: "tl-",
    classLink: "table-layout",
    additionalClasses: [
      { classSuffix: "auto", classValues: ["table-layout: auto;"] },
      { classSuffix: "f", classValues: ["table-layout: fixed;"] },
    ],
  },

  // typography
  {
    classPrefix: "ff-",
    classLink: "font-family",
    additionalClasses: [
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
    additionalClasses: [
      { classSuffix: "xs", classValues: ["font-size: 12px;"] },
      { classSuffix: "sm", classValues: ["font-size: 14.4px;"] },
      { classSuffix: "md", classValues: ["font-size: 16px;"] },
      { classSuffix: "lg", classValues: ["font-size: 19.2px;"] },
      { classSuffix: "xl", classValues: ["font-size: 23.04px;"] },
      { classSuffix: "2xl", classValues: ["font-size: 30.08px;"] },
      { classSuffix: "3xl", classValues: ["font-size: 35.52px;"] },
      { classSuffix: "6xl", classValues: ["font-size: 58.56px;"] },
    ],
  },
  {
    classPrefix: "fs-",
    classLink: "font-style",
    additionalClasses: [
      { classSuffix: "i", classValues: ["font-style: italic;"] },
      { classSuffix: "n", classValues: ["font-style: normal;"] },
    ],
  },
  {
    classPrefix: "fw-",
    classLink: "font-weight",
    additionalClasses: [
      { classSuffix: "100", classValues: ["font-weight: 100;"] },
      { classSuffix: "200", classValues: ["font-weight: 200;"] },
      { classSuffix: "300", classValues: ["font-weight: 300;"] },
      { classSuffix: "400", classValues: ["font-weight: 400;"] },
      { classSuffix: "500", classValues: ["font-weight: 500;"] },
      { classSuffix: "600", classValues: ["font-weight: 600;"] },
      { classSuffix: "700", classValues: ["font-weight: 700;"] },
      { classSuffix: "800", classValues: ["font-weight: 800;"] },
      { classSuffix: "900", classValues: ["font-weight: 900;"] },
    ],
  },
  {
    classPrefix: "lh-",
    classLink: "line-height",
    additionalClasses: [
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
    additionalClasses: [
      { classSuffix: "d", classValues: ["list-style-type: disc;"] },
      { classSuffix: "c", classValues: ["list-style-type: circle;"] },
      { classSuffix: "s", classValues: ["list-style-type: square;"] },
    ],
  },
  {
    classPrefix: "ow-",
    classLink: "overflow-wrap",
    additionalClasses: [
      { classSuffix: "bw", classValues: ["overflow-wrap: break-word;"] },
      { classSuffix: "ka", classValues: ["overflow-wrap: keep-all;"] },
      { classSuffix: "n", classValues: ["overflow-wrap: normal;"] },
    ],
  },
  {
    classPrefix: "ta-",
    classLink: "text-align",
    additionalClasses: [
      { classSuffix: "s", classValues: ["text-align: start;"] },
      { classSuffix: "e", classValues: ["text-align: end;"] },
      { classSuffix: "l", classValues: ["text-align: left;"] },
      { classSuffix: "r", classValues: ["text-align: right;"] },
      { classSuffix: "c", classValues: ["text-align: center;"] },
      { classSuffix: "j", classValues: ["text-align: justify;"] },
      { classSuffix: "ja", classValues: ["text-align: justify-all;"] },
      { classSuffix: "mp", classValues: ["text-align: match-parent;"] },
    ],
  },
  {
    classPrefix: "tdl-",
    classLink: "text-decoration-line",
    additionalClasses: [
      { classSuffix: "none", classValues: ["text-decoration-line: none;"] },
      { classSuffix: "u", classValues: ["text-decoration-line: underline;"] },
      { classSuffix: "o", classValues: ["text-decoration-line: overline;"] },
      {
        classSuffix: "lt",
        classValues: ["text-decoration-line: line-through;"],
      },
    ],
  },
  {
    classPrefix: "tds-",
    classLink: "text-decoration-style",
    additionalClasses: [
      { classSuffix: "none", classValues: ["text-decoration-style: none;"] },
      { classSuffix: "d", classValues: ["text-decoration-style: dashed;"] },
      { classSuffix: "h", classValues: ["text-decoration-style: hidden;"] },
      { classSuffix: "s", classValues: ["text-decoration-style: solid;"] },
    ],
  },
  {
    classPrefix: "tdt-",
    classLink: "text-decoration-thickness",
    additionalClasses: [
      {
        classSuffix: "auto",
        classValues: ["text-decoration-thickness: auto;"],
      },
      {
        classSuffix: "ff",
        classValues: ["text-decoration-thickness: from-font;"],
      },
      { classSuffix: "0", classValues: ["text-decoration-thickness: 0px;"] },
      { classSuffix: "1", classValues: ["text-decoration-thickness: 1px;"] },
      { classSuffix: "2", classValues: ["text-decoration-thickness: 2px;"] },
      { classSuffix: "3", classValues: ["text-decoration-thickness: 3px;"] },
      { classSuffix: "4", classValues: ["text-decoration-thickness: 4px;"] },
    ],
  },
  {
    classPrefix: "td-",
    classLink: "text-decoration",
    additionalClasses: [
      { classSuffix: "u", classValues: ["text-decoration: underline;"] },
      { classSuffix: "none", classValues: ["text-decoration: none;"] },
    ],
  },
];
