import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

export default [
  {
    name: "app/files-to-lint",
    files: ["**/*.{js,mjs,jsx,vue}"],
  },

  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
  },
  js.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  ...pluginVue.configs["flat/recommended"],
  {
    rules: {
      // 禁止使用未定義的元件
      "vue/no-undef-components": "error",

      // 禁止使用未定義的屬性
      "vue/no-undef-properties": "error",

      // 強制使用 === 和 !== 運算子
      "vue/eqeqeq": "warn",

      // 禁止定義未使用的屬性 (props, data, computed, methods)
      "vue/no-unused-properties": "error",

      // 禁止宣告未使用的 emit 事件
      "vue/no-unused-emit-declarations": "error",

      // 要求陣列方法的回呼函式必須有回傳值
      "array-callback-return": "error",

      // 強制使用 === 和 !== 運算子 (全域規則)
      eqeqeq: "warn",
    },
  },
  // {
  //   parserOptions: {
  //     ecmaVersion: "latest",
  //   },
  // },
];
