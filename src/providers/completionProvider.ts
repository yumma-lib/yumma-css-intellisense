import * as vscode from "vscode";
import { colorUtils, colors } from "../yumma-css/colors";
import { utilities } from "../yumma-css/utilities";

const baseUrl = "https://yummacss.com/docs/";

const completionItems: vscode.CompletionItem[] = [];

colorUtils.forEach((colorClass) => {
  colors.forEach((color) => {
    const classItem = `${colorClass.classPrefix}${color.className}`;
    const item = new vscode.CompletionItem(
      classItem,
      vscode.CompletionItemKind.Color
    );

    item.detail = `${colorClass.classValue}: ${color.classValue}`;
    item.documentation = new vscode.MarkdownString(
      `${colorClass.classValue}: ${color.classValue}`
    );
    item.insertText = classItem;

    (item as any).color = { id: "yumma-color", color: color.classValue };
    completionItems.push(item);
  });
});

utilities.forEach((utilClass) => {
  utilClass.additionalClasses.forEach((value) => {
    const classItem = `${utilClass.classPrefix}${value.classSuffix}`;
    const item = new vscode.CompletionItem(
      classItem,
      vscode.CompletionItemKind.Value
    );

    item.detail = `${value.classValues.join(" \n ") || ""}`;
    item.documentation = new vscode.MarkdownString();
    item.documentation.appendMarkdown(
      `\n\nThe ['${classItem}'](${baseUrl}${utilClass.classLink}) utility is covered in the documentation.`
    );
    item.documentation.isTrusted = true;
    item.insertText = classItem;

    completionItems.push(item);
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
