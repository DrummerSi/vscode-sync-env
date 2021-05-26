"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function deactivateWatchers(watchers = []) {
    return vscode.commands.registerCommand('env-sync.deactivateWatchers', () => {
        watchers.forEach(disposable => disposable.dispose());
        vscode.window.showInformationMessage("Env-sync Deactivated!");
    });
}
exports.default = deactivateWatchers;
//# sourceMappingURL=deactivateWatchers.js.map