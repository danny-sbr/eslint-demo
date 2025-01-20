import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

export default [
  {
    // 定義要進行 lint 檢查的檔案類型
    name: "app/files-to-lint",
    files: ["**/*.{js,mjs,jsx,vue}"],
  },

  {
    // 定義要排除不進行 lint 檢查的檔案或目錄
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
  },
  // 載入 ESLint 的建議規則設定
  js.configs.recommended,
  // 載入 Vue ESLint 基本規則設定

  ...pluginVue.configs["flat/essential"],
  // 載入 Vue ESLint 建議規則設定
  ...pluginVue.configs["flat/recommended"],
  {
    rules: {
      // 禁止使用未定義的元件
      // 避免使用未註冊或導入的 Vue 元件
      "vue/no-undef-components": "error",

      // 禁止使用未定義的屬性
      // 避免使用未在 props、data、computed 等處宣告的屬性
      "vue/no-undef-properties": "error",

      // 強制使用 === 和 !== 運算子
      "vue/eqeqeq": "warn",

      // 禁止定義未使用的屬性 (props, data, computed, methods)
      "vue/no-unused-properties": "error",

      // 禁止宣告未使用的 emit 事件
      // 檢查 emits 選項中宣告但未使用的事件
      "vue/no-unused-emit-declarations": "error",

      // 要求陣列方法的回呼函式必須有回傳值
      // 適用於 map、filter、reduce 等陣列方法
      "array-callback-return": "error",

      // 強制使用 === 和 !== 運算子 (全域規則)
      // 避免使用 == 和 != 可能造成的型別轉換問題
      eqeqeq: "warn",
    },
  },
];
