import * as vscode from "vscode";
import { colorUtils, colors } from "../yumma-css/colors";
import { utilities } from "../yumma-css/utilities";

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
        const color = colors.find(
          (color) => `${colorUtil.classPrefix}${color.className}` === word
        );
        if (color) {
          const markdownString = new vscode.MarkdownString();
          markdownString.appendCodeblock(
            `.${word} {\n ${colorUtil.classValue}: ${color.classValue};\n}`,
            "css"
          );
          markdownString.appendMarkdown(
            `\n\nThe [${word}](${baseUrl}${color.classLink}) utility is covered in the documentation.`
          );
          markdownString.isTrusted = true;
          return new vscode.Hover(markdownString);
        }
      }

      const utility = utilities.find((utilClass) =>
        utilClass.additionalClasses.some(
          (value) => `${utilClass.classPrefix}${value.classSuffix}` === word
        )
      );

      if (utility) {
        const value = utility.additionalClasses.find(
          (value) => `${utility.classPrefix}${value.classSuffix}` === word
        );
        if (value) {
          const markdownString = new vscode.MarkdownString();
          markdownString.appendCodeblock(
            `.${word} {\n ${value.classValues.join(" \n ") || ""}\n}`,
            "css"
          );
          markdownString.appendMarkdown(
            `\n\nThe [${word}](${baseUrl}${utility.classLink}) utility is covered in the documentation.`
          );
          markdownString.isTrusted = true;
          return new vscode.Hover(markdownString);
        }
      }

      return null;
    },
  }
);
