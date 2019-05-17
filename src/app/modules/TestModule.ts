import * as amf from 'active-module-framework'

/**
 *テストモジュール
 *
 * @export
 * @class TestModule
 * @extends {amf.Module}
 */
export class TestModule extends amf.Module {
	async JS_add(a:number,b:number) {
		return a+b
	}
	async JS_countSession(){
		const session = this.getSessionItem('count',0)+1
		const global = this.getGlobalItem('count',0)+1
		this.setSessionItem('count',session)
		this.setGlobalItem('count',global)
		return [global,session]
	}
}
