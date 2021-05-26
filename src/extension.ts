import * as vscode from 'vscode';
import {
	activateWatchers, 
	deactivateWatchers
} from './env-sync/commands/index';

const watchers : Array<vscode.Disposable> = [];

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(activateWatchers(watchers));
	context.subscriptions.push(deactivateWatchers(watchers));

	vscode.commands.executeCommand('env-sync.activateWatchers');
}

export function deactivate() {
	vscode.commands.executeCommand('env-sync.deactivateWatchers');
}
