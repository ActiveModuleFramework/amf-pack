import * as express from 'express';
/**
 *トップページ表示用クラス
*
* @export
* @class BaseHtml
*/
export declare class BaseHtml {
    /**
     *初期ページの出力
    *
    * @static
    * @param {express.Response} res	レスポンス
    * @param {string[]} cssPath		CSSディレクトリ
    * @param {string[]} jsPath		JSディレクトリ
    * @param {string[]} priorityJs	優先度の高いJSファイル
    * @memberof BaseHtml
    */
    /**
     *初期ページの出力
     *
     * @static
     * @param {express.Response} res	レスポンス
     * @param {string} baseUrl			基本パス
     * @param {string} rootPath			ルートパス
     * @param {string} indexPath		index.htmlテンプレートパス
     * @param {string[]} cssPath		CSSディレクトリ
     * @param {string[]} jsPath			JSディレクトリ
     * @param {string[]} priorityJs		優先度の高いJSファイル
     * @returns
     * @memberof BaseHtml
     */
    static output(res: express.Response, baseUrl: string, rootPath: string, indexPath: string, cssPath: string[], jsPath: string[], priorityJs: string[]): Promise<boolean>;
}
