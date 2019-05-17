"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const amf = require("active-module-framework");
/**
 *テストモジュール
 *
 * @export
 * @class TestModule
 * @extends {amf.Module}
 */
class TestModule extends amf.Module {
    async JS_add(a, b) {
        return a + b;
    }
    async JS_countSession() {
        const session = this.getSessionItem('count', 0) + 1;
        const global = this.getGlobalItem('count', 0) + 1;
        this.setSessionItem('count', session);
        this.setGlobalItem('count', global);
        return [global, session];
    }
}
exports.TestModule = TestModule;
//# sourceMappingURL=TestModule.js.map