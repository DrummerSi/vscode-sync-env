"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.watchFile = exports.watchFileCreate = exports.watchFileChange = exports.createFileSystemWatcher = void 0;
const fs = require("fs");
const vscode = require("vscode");
const _1 = require("./");
function createFileSystemWatcher(blob) {
    return vscode.workspace.createFileSystemWatcher(blob);
}
exports.createFileSystemWatcher = createFileSystemWatcher;
function watchFileChange(file) {
    const destinationEnv = _1.getEnvDestination();
    let des = [];
    // We want to turn string to array
    if (typeof destinationEnv === 'string' || destinationEnv instanceof String) {
        des = [destinationEnv];
    }
    else {
        des = [...destinationEnv];
    }
    des.forEach(destFile => {
        if (fs.existsSync(_1.getFilePath(file.fsPath) + destFile)) {
            const targetFile = _1.readfile(`${_1.getFilePath(file.fsPath)}${destFile}`);
            const changedFile = _1.readfile(file.fsPath);
            _1.writefile(`${_1.getFilePath(file.fsPath)}${destFile}`, _1.prepareNewConfig(targetFile, changedFile));
        }
    });
}
exports.watchFileChange = watchFileChange;
function watchFileCreate(file) {
    const destinationEnv = _1.getEnvDestination();
    let des = [];
    // We want to turn string to array
    if (typeof destinationEnv === 'string' || destinationEnv instanceof String) {
        des = [destinationEnv];
    }
    else {
        des = [...destinationEnv];
    }
    des.forEach(destFile => {
        if (fs.existsSync(_1.getFilePath(file.path) + destFile)) {
            const targetFile = _1.readfile(`${_1.getFilePath(file.path)}${destFile}`);
            vscode.window.showInformationMessage(`
              You just created an env file which you are 
              watching for changes. Do you want to copy 
              the content of the child(${destFile}) to it?`, ...['No', 'Yes'])
                .then(response => {
                if (response === 'Yes') {
                    _1.writefile(file.path, targetFile);
                }
            });
        }
    });
}
exports.watchFileCreate = watchFileCreate;
function watchFile(file) {
    console.log(`watchFile called ${file}`);
    const fileWatcher = createFileSystemWatcher(`**/${file}`);
    fileWatcher.onDidChange(watchFileChange);
    fileWatcher.onDidCreate(watchFileCreate);
    return fileWatcher;
}
exports.watchFile = watchFile;
//# sourceMappingURL=watchers.js.map