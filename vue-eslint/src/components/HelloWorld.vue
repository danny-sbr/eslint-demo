<script setup>
/**
 * ESLint 規則展示：
 * 1. vue/no-unused-properties: msg 屬性被定義但未在模板中使用
 * 2. vue/no-unused-emit-declarations: emit 事件名稱不一致，定義為 addTodo 但發送 addTodos
 * 3. array-callback-return: 在 map 函式中沒有回傳值
 *
 * 修正方式：
 * 1. 在模板中使用 msg 屬性
 * 2. 統一 emit 事件名稱
 * 3. 在 map 函式中加入 return 陳述句
 */

// 展示 vue/no-unused-properties 規則
// 這個 prop 被定義但未在模板中使用
defineProps({
  msg: {
    type: String,
    required: true,
  },
});

// 展示 vue/no-unused-emit-declarations 規則
// emit 事件名稱打錯 (addTodos vs addTodo)
const emit = defineEmits(["addTodo"]);

const addTodo = () => {
  emit("addTodos");
};

// 展示 array-callback-return 規則
// map 方法需要有回傳值
const arr = [];

const arr2 = arr2.map((item) => {
  if (item === 1) {
    item = 2;
  }
  // 缺少 return 陳述句，所以會 IDE 顯示錯誤
});
</script>

<template>
  <h1>Hello World</h1>
</template>
<style scoped></style>
