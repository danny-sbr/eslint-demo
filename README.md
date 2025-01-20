# ESLint 使用教學與示範

## 🔍 專案結構
- `unuse-eslint/`: 展示未使用 ESLint 的程式碼
- `use-eslint/`: 展示基本 ESLint 設定的程式碼
- `vue-eslint/`: 展示 Vue.js 專用 ESLint 規則的完整範例

## 💡 為什麼要使用 ESLint？
1. 自動檢查程式碼品質
2. 統一團隊程式碼風格
3. 即時發現潛在問題
4. 提升程式碼可維護性

## 🛠️ 安裝步驟

### 1. 安裝必要的 VS Code 擴充功能
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (Vue.js 開發必備)

### 2. 安裝 ESLint 相關套件
```bash
pnpm add -D eslint eslint-plugin-vue @eslint/js
```

## 📚 ESLint 規則展示

### 基礎 JavaScript 規則
- 變數重複宣告檢查
- 未使用變數警告
- 嚴格相等比較 (`===` 而非 `==`)

### Vue.js 專用規則
- `vue/no-undef-components`: 未引入的元件使用檢查
- `vue/no-undef-properties`: 未定義屬性使用檢查
- `vue/no-unused-properties`: 未使用的屬性檢查
- `vue/no-unused-emit-declarations`: 未使用的事件發送檢查
- `vue/eqeqeq`: Vue 模板中的相等比較檢查

## 📖 相關資源
- [ESLint 官方文件](https://eslint.org/)
- [Vue ESLint 規則文件](https://eslint.vuejs.org/user-guide/)
- [ESLint 設定檢查工具](https://www.npmjs.com/package/@eslint/config-inspector)

## 💻 使用範例

### 1. 未使用 ESLint 的程式碼問題
```javascript
const a = 1;
a = 2; // 這裡應該會報錯，但沒有 ESLint 時不會有警告
```

### 2. 使用 ESLint 後的檢查
- 變數重新賦值錯誤
- 程式碼風格不一致警告
- 潛在問題提示

### 3. Vue.js ESLint 完整示範
- 元件引入檢查
- 屬性使用檢查
- 事件發送檢查
- 程式碼格式統一

## 🔧 自動修復
```bash
pnpm lint
```

## 檢查 ESLint 設定
```bash
pnpx @eslint/config-inspector@latest
```


