import * as vscode from 'vscode';

import { colorUtils } from './utils/colorUtilities';
import { colors } from './yumma-css/colors';
import { utilities } from './yumma-css/utilities';

const completionItems: vscode.CompletionItem[] = [];

colorUtils.forEach(colorClass => {
    colors.forEach(color => {
        const className = `${colorClass.prefix}${color.name}`;
        const item = new vscode.CompletionItem(className, vscode.CompletionItemKind.Color);
        item.insertText = className;
        item.detail = `${colorClass.description}: ${color.color}`;
        (item as any).color = { id: 'yumma-color', color: color.color };

        item.documentation = new vscode.MarkdownString(`${color.color}`);

        completionItems.push(item);
    });
});

utilities.forEach(utilClass => {
    utilClass.values.forEach(value => {
        const className = `${utilClass.prefix}${value.name}`;
        const item = new vscode.CompletionItem(className, vscode.CompletionItemKind.Property);
        item.documentation = new vscode.MarkdownString(`Utility class: ${utilClass.description}: ${value.property}`);
        item.insertText = className;
        item.detail = `${utilClass.description}: ${value.property || ''}`;
        completionItems.push(item);
    });
});

export function activate(context: vscode.ExtensionContext) {
    const provider = vscode.languages.registerCompletionItemProvider(['css', 'html', 'javascript', 'jsx', 'tsx', 'typescript'], {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
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
                utilClass.values.some(value => `${utilClass.prefix}${value.name}` === word)
            );

            if (utility) {
                const value = utility.values.find(value => `${utility.prefix}${value.name}` === word);
                if (value) {
                    const markdownString = new vscode.MarkdownString();
                    markdownString.appendCodeblock(`${word} {\n    ${value.property || ''};\n}`, 'css');
                    return new vscode.Hover(markdownString);
                }
            }

            return null;
        }
    });

    context.subscriptions.push(provider, hoverProvider);
}