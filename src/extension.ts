import * as vscode from 'vscode';
import { colors } from './yumma-css/colors';
import { utilities } from './yumma-css/utilities';
import { colorUtils } from './utils/colorUtilities';

const completionItems: vscode.CompletionItem[] = [];

colorUtils.forEach(colorClass => {
    colors.forEach(color => {
        const className = `${colorClass.prefix}${color.name}`;
        const item = new vscode.CompletionItem(className, vscode.CompletionItemKind.Color);
        item.documentation = new vscode.MarkdownString(`Color class: ${colorClass.description} (${color.name})`);
        item.insertText = className;
        item.detail = color.color;
        (item as any).color = { id: 'yumma-color', color: color.color };
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

    context.subscriptions.push(provider);
}