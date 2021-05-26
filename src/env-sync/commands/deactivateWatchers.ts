import * as vscode from 'vscode';

export default function deactivateWatchers (watchers: Array<vscode.Disposable> = []) {
    
    return vscode.commands.registerCommand('env-sync.deactivateWatchers', () => {
        watchers.forEach(disposable => disposable.dispose());
        vscode.window.showInformationMessage("Env-sync Deactivated!");
    });
}