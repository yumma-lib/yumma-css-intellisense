import { baseColors } from "../theme";
import { colorUtils } from "../utilities/colors";
import * as utilities from "../yummacss";
import * as vscode from "vscode";

const baseUrl = "https://yummacss.com/docs/";

export const hoverProvider = vscode.languages.registerHoverProvider(
  ["css", "html", "javascript", "jsx", "tsx", "typescript"],
  {
    provideHover(document: vscode.TextDocument, position: vscode.Position) {
      const range = document.getWordRangeAtPosition(position, /[\w-]+/);
      if (!range) {
        return null;
      }
      const word = document.getText(range);

      const colorUtil = colorUtils.find((colorUtil) =>
        word.startsWith(colorUtil.classPrefix)
      );

      if (colorUtil) {
        const color = baseColors.find(
          (color) => `${colorUtil.classPrefix}${color.className}` === word
        );
        if (color) {
          const markdownString = new vscode.MarkdownString();
          markdownString.appendCodeblock(
            `.${word} {\n ${colorUtil.classValue}: ${color.classValue};\n}`,
            "css"
          );
          markdownString.appendMarkdown(
            `\n\nThe [${word}](${baseUrl}${colorUtil.classLink}) utility is covered in the documentation.`
          );
          markdownString.isTrusted = true;
          return new vscode.Hover(markdownString);
        }
      }

      const allUtilities = [
        utilities.borderUtils,
        utilities.boxModelUtils,
        utilities.effectUtils,
        utilities.filterUtils,
        utilities.flexboxUtils,
        utilities.gridUtils,
        utilities.interactionsUtils,
        utilities.layoutUtils,
        utilities.outlineUtils,
        utilities.tableUtils,
        utilities.typographyUtils,
      ];

      for (const utilClassArray of allUtilities) {
        for (const utilClass of utilClassArray) {
          const utility = utilClass.utilityClasses.find(
            (value) =>
              `${utilClass.classPrefix}${
                (value as { classSuffix?: string }).classSuffix
              }` === word
          );
          if (utility) {
            const typedUtility = utility as {
              classSuffix: string;
              classValues?: string[]; // Make classValues optional
            };

            const markdownString = new vscode.MarkdownString();
            markdownString.appendCodeblock(
              `.${word} {\n ${
                typedUtility.classValues?.join(" \n ") || "No values available"
              }\n}`,
              "css"
            );
            markdownString.appendMarkdown(
              `\n\nThe [${word}](${baseUrl}${utilClass.classLink}) utility is covered in the documentation.`
            );
            markdownString.isTrusted = true;
            return new vscode.Hover(markdownString);
          }
        }
      }

      return null;
    },
  }
);
