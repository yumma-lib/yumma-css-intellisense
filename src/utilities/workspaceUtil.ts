import * as vscode from "vscode";

/**
 * Checks to see if Yumma CSS is installed in the workspace of the user.
 * @returns Promising true when Yumma CSS is installed, false otherwise.
 */

export async function isYummaInstalled(): Promise<boolean> {
  try {
    const workspaceFolders = vscode.workspace.workspaceFolders;

    if (!workspaceFolders || workspaceFolders.length === 0) {
      return false;
    }

    const globPattern = "**/node_modules/yummacss/package.json";
    const files = await vscode.workspace.findFiles(globPattern);

    return files.length > 0;
  } catch (e) {
    console.error("Failed to check for Yumma CSS:", e);
    return false;
  }
}
