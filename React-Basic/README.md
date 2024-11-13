## 참고영상

- 9Diin : https://www.youtube.com/watch?v=Yv5tSNr4h2c
  - git : https://github.com/son7ae

## 개발환경

```bash

# 프로젝트 환경설정(vite를 활용한 React 설치):
npm install vite@latest

# React 중앙집중식 상태관리 라이브러리 Recoil 설치:
npm install recoil

# 외부 오픈 API 통신을 위한 라이브러리 Axios 설치:
npm install axios

# CSS 스타일링을 위한 SASS/SCSS 설치:
npm install -D sass

# React Router 설치:
npm install react-router-dom localforage match-sorter sort-by

# TypeScript에서 Node.js 모듈을 쓸 수 있는 환경 구축 :
npm i @types/node

# React Toast Popup 모듈 설치 :
npm install react-simple-toasts
```

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
