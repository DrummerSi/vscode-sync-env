"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const index_1 = require("../index");
function activateWatchers(watchers = []) {
    return vscode.commands.registerCommand('env-sync.activateWatchers', () => {
        const sourceFile = index_1.getEnvSource();
        watchers.push(index_1.watchFile(sourceFile));
        vscode.window.showInformationMessage("Env Sync Activated!");
    });
}
exports.default = activateWatchers;
//# sourceMappingURL=activateWatchers.js.map