# xiaonanniang-quiz-v2

一个基于 Vite 的静态趣味测试网站，适合部署到 EdgeOne、静态托管、对象存储 CDN 这类平台。

## 开发

```bash
npm install
npm run dev
```

默认会启动本地开发服务器。

## 构建

```bash
npm run build
```

构建产物会输出到 `dist/`。

## 预览构建结果

```bash
npm run preview
```

## 部署建议

- 构建命令：`npm run build`
- 输出目录：`dist`
- Node 版本：建议 `20.19+`

## 项目结构

```text
.
├─ index.html
├─ src/
│  ├─ app.js
│  ├─ main.js
│  └─ styles.css
├─ package.json
└─ vite.config.mjs
```
