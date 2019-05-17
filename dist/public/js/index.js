var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
///<reference path="../../../dist/public/js/jwf.d.ts"/>
//ページ読み込み時に実行する処理を設定
addEventListener("DOMContentLoaded", function () { new Test(); });
var Test = /** @class */ (function () {
    function Test() {
        //通信アダプタの作成
        this.adapter = new JWF.Adapter();
        this.sample01();
        this.sample02();
        this.sample03();
    }
    Test.prototype.sample01 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var window, a, b, client, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        window = new JWF.FrameWindow();
                        window.setTitle('Sample01');
                        window.setSize(300, 100);
                        window.setPos(0, 0);
                        a = 10;
                        b = 20;
                        client = window.getClient();
                        return [4 /*yield*/, this.adapter.exec('TestModule.add', a, b)
                            //結果を書き込む
                        ];
                    case 1:
                        result = _a.sent();
                        //結果を書き込む
                        client.textContent = a + " + " + b + " = " + result;
                        return [2 /*return*/];
                }
            });
        });
    };
    Test.prototype.sample02 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var window, client, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        window = new JWF.FrameWindow();
                        window.setTitle('Sample03');
                        window.setSize(300, 100);
                        window.setPos(20, 80);
                        client = window.getClient();
                        return [4 /*yield*/, this.adapter.exec('TestModule.countSession')
                            //結果を書き込む
                        ];
                    case 1:
                        result = _a.sent();
                        //結果を書き込む
                        client.textContent = "\u30B0\u30ED\u30FC\u30D0\u30EB:" + result[0] + " + \u30BB\u30C3\u30B7\u30E7\u30F3:" + result[1];
                        return [2 /*return*/];
                }
            });
        });
    };
    Test.prototype.sample03 = function () {
        var _this = this;
        //ウインドウを作成
        var window = new JWF.FrameWindow();
        window.setTitle('Sample02');
        window.setSize(450, 100);
        window.setPos(30, 160);
        //ウインドウクライアントノードの取得とHTMLデータの設定
        var client = window.getClient();
        client.style.padding = '1em';
        client.innerHTML = "<input> + <input> <button>=</button> <span>\uFF1F</span>";
        //各ノードの取得
        var nodes = client.querySelectorAll('input,button,span');
        //ボタンイベントの処理
        nodes[2].addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
            var a, b, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        a = parseInt(nodes[0].value);
                        b = parseInt(nodes[1].value);
                        return [4 /*yield*/, this.adapter.exec('TestModule.add', a, b)
                            //結果を書き込む
                        ];
                    case 1:
                        result = _a.sent();
                        //結果を書き込む
                        nodes[3].textContent = result;
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return Test;
}());
//# sourceMappingURL=index.js.map