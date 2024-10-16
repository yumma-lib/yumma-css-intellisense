import * as vscode from "vscode";

import { hoverProvider } from "./providers/hoverProvider";
import { completionProvider } from "./providers/completionProvider";

export async function activate(context: vscode.ExtensionContext) {
  try {
    context.subscriptions.push(completionProvider, hoverProvider);
  } catch (ex) {
    console.error("Yumma CSS Intellisense failed to run due to:", ex);
    vscode.window.showErrorMessage(
      "An error occurred while activating the extension."
    );
  }
}
