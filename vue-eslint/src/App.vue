<script setup>
/**
 * ESLint 規則展示：
 * 1. vue/eqeqeq & eqeqeq: 展示寬鬆比較 (==) 和嚴格比較 (===) 的差異
 *    - 建議使用 === 進行比較以避免型別轉換帶來的問題
 * 2. vue/no-undef-components: 展示未引入組件直接使用的錯誤
 * 3. vue/no-undef-properties: 展示在模板中使用未定義變數的錯誤
 *
 * 修正方式：
 * 1. 將所有的 == 改為 ===
 * 2. 需要先 import HelloWorld 組件才能使用
 * 3. 需要在 script 中定義 text 變數
 */

const a = 1;

// 展示寬鬆比較 (會觸發 ESLint 警告)
if (a == 1) {
  console.log("a is 1");
}
</script>

<template>
  <!-- 展示 vue/no-undef-components 規則 -->
  <!-- 如果 HelloWorld 組件未被引入，會觸發錯誤 -->
  <HelloWorld />
  Hello World
  <!-- 展示 vue/no-undef-properties 規則 -->
  <!-- text 變數未定義，會觸發錯誤 -->
  {{ text }}

  <!-- 展示寬鬆比較 vs 嚴格比較的差異 -->
  <!-- 這行會觸發 ESLint 警告 -->
  {{ a == 1 ? "a is 1" : "a is not 1" }}

  <!-- 這是正確的使用方式 -->
  {{ a === 1 ? "a is 1" : "a is not 1" }}
</template>

<style scoped></style>
