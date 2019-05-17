///<reference path="../../../dist/public/js/jwf.d.ts"/>

//ページ読み込み時に実行する処理を設定
addEventListener("DOMContentLoaded", ()=>{new Test()})

class Test{
	//通信アダプタの作成
	adapter = new JWF.Adapter()
	constructor(){
		this.sample01()
		this.sample02()
		this.sample03()
	}
	async sample01(){
		//ウインドウを作成
		const window = new JWF.FrameWindow()
		window.setTitle('Sample01')
		window.setSize(300, 100)
		window.setPos(0, 0)

		const a = 10
		const b = 20
		const client = window.getClient()
		const result = await this.adapter.exec('TestModule.add', a, b)
		//結果を書き込む
		client.textContent = `${a} + ${b} = ${result}`
	}
	async sample02() {
		//ウインドウを作成
		const window = new JWF.FrameWindow()
		window.setTitle('Sample03')
		window.setSize(300, 100)
		window.setPos(20, 80)
		const client = window.getClient()
		const result = await this.adapter.exec('TestModule.countSession')
		//結果を書き込む
		client.textContent = `グローバル:${result[0]} + セッション:${result[1]}`
	}
	sample03(){
		//ウインドウを作成
		const window = new JWF.FrameWindow()
		window.setTitle('Sample02')
		window.setSize(450, 100)
		window.setPos(30,160)

		//ウインドウクライアントノードの取得とHTMLデータの設定
		const client = window.getClient()
		client.style.padding = '1em'
		client.innerHTML = `<input> + <input> <button>=</button> <span>？</span>`

		//各ノードの取得
		const nodes = client.querySelectorAll('input,button,span')
		//ボタンイベントの処理
		nodes[2].addEventListener('click', async () => {
			//Inputタグから内容を取り出す
			const a = parseInt((nodes[0] as HTMLInputElement).value)
			const b = parseInt((nodes[1] as HTMLInputElement).value)
			//サーバにデータを送信し、受信完了まで待つ
			const result = await this.adapter.exec('TestModule.add', a, b)
			//結果を書き込む
			nodes[3].textContent = result
		})
	}

}
