# Setting Check

---

### Ref

- https://www.youtube.com/watch?v=Yv5tSNr4h2c

### package plugin & module

```bash
  # vite를 이용한 프로젝트 설치
  npm install vite@latest

  # recoil : 중앙집중식 상태관리 라이브러리
   npm install recoil
  # axios : 외부 오픈 api 통신을 위한 라이브러리
   npm install axios
  # sass : css 스타일링을 위한 sass/scss
   npm install -g sass
  # react-router-dom : page 전환을 위한 react router
  # localforage : 비동기 데이터 저장?
  # match-sorter :  배열에서 특정 값과 가장 잘 일치하는 항목을 찾아 정렬하는 라이브러리
  # sortby :객체 배열을 특정 속성을 기준으로 정렬하는 간단한 유틸리티 함수
   npm install react-router-dom localforage match-sorter sort-by
  # typeScript에서 node.JS 모듈을 사용 할 수 있도록 도와주는 환경 구축
  npm install @types/node
  # react-toasts UI popup 모듈
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
