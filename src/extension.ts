import * as vscode from "vscode";

import { isYummaInstalled } from "./utils/workspaceUtil";
import { hoverProvider } from "./utils/hoverUtil";
import { completionProvider } from "./utils/completionUtil";

export async function activate(context: vscode.ExtensionContext) {
  try {
    const hasInstalled = await isYummaInstalled();
    if (!hasInstalled) {
      vscode.window.showInformationMessage(
        "Yumma CSS is not installed in this workspace."
      );
      return;
    }

    context.subscriptions.push(completionProvider, hoverProvider);
  } catch (e) {
    console.error("Could not activate extension due to:", e);
    vscode.window.showErrorMessage(
      "An error occurred while activating the extension."
    );
  }
}
