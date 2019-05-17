"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *モジュール作成用基本クラス
 *
 * @export
 * @class Module
 */
class Module {
    constructor() {
        this.session = null;
    }
    static setManager(manager) { Module.manager = manager; }
    static getManager() { return Module.manager; }
    static async onCreateModule() { return true; }
    static async onDestroyModule() { return true; }
    static getLocalDB() { return Module.manager.getLocalDB(); }
    static output(msg, ...params) { Module.manager.output(msg, ...params); }
    setSession(session) { this.session = session; }
    async onStartSession() { }
    async onEndSession() { }
    getSession() {
        if (!this.session)
            throw ("Session Error");
        return this.session;
    }
    getGlobalItem(name, defValue) { return this.session ? this.session.getGlobalItem(name, defValue) : null; }
    setGlobalItem(name, value) { if (this.session)
        this.session.setGlobalItem(name, value); }
    getSessionItem(name, defValue) { return this.session ? this.session.getSessionItem(name, defValue) : null; }
    setSessionItem(name, value) { if (this.session)
        this.session.setSessionItem(name, value); }
    getModule(constructor) {
        if (!this.session)
            throw ("Session Error");
        return this.session.getModule(constructor);
    }
}
exports.Module = Module;
//# sourceMappingURL=Module.js.map