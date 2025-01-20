// 引入 globals 套件，用於定義全域變數
import globals from "globals";
// 引入 ESLint 官方的 JavaScript 規則套件
import pluginJs from "@eslint/js";

// 定義 TypeScript 型別註解，指定這是 ESLint 設定檔的型別
/** @type {import('eslint').Linter.Config[]} */

export default [
	// 指定全域變數與語言選項
	// 重點整理:
	// 1. ESLint 的核心規則需要知道程式碼執行時可用的全域變數
	// 2. 由於不同環境的全域變數差異很大，且可能在執行時被修改
	// 3. ESLint 不會對執行環境中存在的全域變數做任何假設
	// 4. 透過 languageOptions.globals 設定瀏覽器環境的全域變數（如 window、document 等）
	{ languageOptions: { globals: globals.browser } },
	// 使用 ESLint 官方推薦的規則設定
	pluginJs.configs.recommended,
];
