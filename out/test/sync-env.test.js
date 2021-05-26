"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const env_sync_1 = require("../env-sync");
const filePath = [
    { path: "/users/fish/.env", expect: '.env' },
    { path: "/users/fish/.env.example", expect: '.env.example' },
    { path: "/users/fish/.env.local", expect: '.env.local' },
    { path: "users/fish/.env", expect: '.env' }
];
suite("Sync Env helpers", function () {
    test("Get file name", function () {
        filePath.forEach(file => {
            assert.equal(env_sync_1.getFileName(file.path), file.expect);
        });
    });
});
//# sourceMappingURL=sync-env.test.js.map