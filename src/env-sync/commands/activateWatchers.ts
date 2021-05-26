import * as vscode from 'vscode';
import {
	getEnvSource,
	watchFile
} from '../index';

export default function activateWatchers (watchers: Array<vscode.Disposable> = []) {
    return vscode.commands.registerCommand('env-sync.activateWatchers', () => {
        const sourceFile: string = getEnvSource();

        watchers.push(watchFile(sourceFile));
        vscode.window.showInformationMessage("Env Sync Activated!");
    });
}