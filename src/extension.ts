import * as vscode from 'vscode';

import { colors } from './yumma-css/colors';
import { colorUtils } from './utils/colorUtil';
import { isYummaInstalled } from './utils/workspaceUtil';
import { utilities } from './yumma-css/utilities';

const completionItems: vscode.CompletionItem[] = [];

colorUtils.forEach(colorClass => {
    colors.forEach(color => {
        const classItem = `${colorClass.classPrefix}${color.className}`;
        const item = new vscode.CompletionItem(classItem, vscode.CompletionItemKind.Color);

        item.detail = `${colorClass.classValue}: ${color.classValue}`;
        item.documentation = new vscode.MarkdownString(`**Utility class**: ${colorClass.classValue}: ${color.classValue}`);
        item.insertText = classItem;

        (item as any).color = { id: 'yumma-color', color: color.classValue };
        completionItems.push(item);
    });
});

utilities.forEach(utilClass => {
    utilClass.values.forEach(value => {
        const classItem = `${utilClass.classPrefix}${value.classSuffix}`;
        const item = new vscode.CompletionItem(classItem, vscode.CompletionItemKind.Property);

        item.detail = `${value.classValue.join(' \n ') || ''}`;
        item.documentation = new vscode.MarkdownString(`**Utility class**: ${utilClass.classPrefix}`);
        item.insertText = classItem;

        completionItems.push(item);
    });
});

export async function activate(context: vscode.ExtensionContext) {
    try {
        const hasInstalled = await isYummaInstalled();
        if (!hasInstalled) {
            vscode.window.showInformationMessage('Yumma CSS is not installed in this workspace.');
            return;
        }

        const provider = vscode.languages.registerCompletionItemProvider(['css', 'html', 'javascript', 'jsx', 'tsx', 'typescript'], {
            provideCompletionItems(doc: vscode.TextDocument, position: vscode.Position) {
                return completionItems;
            }
        });

        const hoverProvider = vscode.languages.registerHoverProvider(['css', 'html', 'javascript', 'jsx', 'tsx', 'typescript'], {
            provideHover(document: vscode.TextDocument, position: vscode.Position) {
                const range = document.getWordRangeAtPosition(position, /[\w-]+/);
                if (!range) {
                    return null;
                }
                const word = document.getText(range);

                const utility = utilities.find(utilClass =>
                    utilClass.values.some(value => `${utilClass.classPrefix}${value.classSuffix}` === word)
                );

                if (utility) {
                    const value = utility.values.find(value => `${utility.classPrefix}${value.classSuffix}` === word);
                    if (value) {
                        const markdownString = new vscode.MarkdownString();
                        markdownString.appendCodeblock(`.${word} {\n ${value.classValue.join(' \n ') || ''}\n}`, 'css');
                        return new vscode.Hover(markdownString);
                    }
                }

                const colorUtil = colorUtils.find(colorUtil =>
                    word.startsWith(colorUtil.classPrefix)
                );

                if (colorUtil) {
                    const color = colors.find(color => `${colorUtil.classPrefix}${color.className}` === word);
                    if (color) {
                        const markdownString = new vscode.MarkdownString();
                        markdownString.appendCodeblock(`.${word} {\n ${colorUtil.classValue}: ${color.classValue};\n}`, 'css');
                        return new vscode.Hover(markdownString);
                    }
                }

                return null;
            }
        });

        context.subscriptions.push(provider, hoverProvider);
    } catch (error) {
        console.error("Could not activate extension due to:", error);
        vscode.window.showErrorMessage("An error occurred while activating the extension.");
    }
}