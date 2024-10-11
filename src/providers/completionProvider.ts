import { colorUtils } from "../utilities/colors";
import { baseColors } from "../theme";
import * as utilities from "../yummacss";
import * as vscode from "vscode";

const baseUrl = "https://yummacss.com/docs/";

const completionItems: vscode.CompletionItem[] = [];

colorUtils.forEach((colorClass) => {
  baseColors.forEach((color) => {
    const classItem = `${colorClass.classPrefix}${color.className}`;
    const item = new vscode.CompletionItem(
      classItem,
      vscode.CompletionItemKind.Color
    );

    item.detail = `${colorClass.classValue}: ${color.classValue}`;

    item.documentation = new vscode.MarkdownString(
      `\n\nThe ['${colorClass.classPrefix}${color.className}'](${baseUrl}${colorClass.classLink}) color utility is covered in the documentation. \n\n` +
        color.classValue
    );

    item.insertText = classItem;

    (item as any).color = { id: "yumma-color", color: color.classValue };

    completionItems.push(item);
  });
});

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

allUtilities.forEach((utilClassArray) => {
  utilClassArray.forEach((utilClass) => {
    utilClass.utilityClasses.forEach((value) => {
      const typedValue = value as {
        classSuffix: string;
        classValues?: string[];
      };

      const classItem = `${utilClass.classPrefix}${typedValue.classSuffix}`;
      const item = new vscode.CompletionItem(
        classItem,
        vscode.CompletionItemKind.Value
      );

      item.detail = `${
        typedValue.classValues?.join(" \n ") || "No values available"
      }`;

      item.documentation = new vscode.MarkdownString();
      item.documentation.appendMarkdown(
        `\n\nThe ['${classItem}'](${baseUrl}${utilClass.classLink}) utility is covered in the documentation.`
      );
      item.documentation.isTrusted = true;
      item.insertText = classItem;

      completionItems.push(item);
    });
  });
});

export const completionProvider =
  vscode.languages.registerCompletionItemProvider(
    ["css", "html", "javascript", "jsx", "tsx", "typescript"],
    {
      provideCompletionItems(
        doc: vscode.TextDocument,
        position: vscode.Position
      ) {
        return completionItems;
      },
    }
  );
