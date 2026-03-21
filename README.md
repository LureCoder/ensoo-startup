# Ensoo Startup - 免费的 Next.js 创业公司网站模板

Ensoo Startup 是一款专为创业公司、SaaS 企业和科技公司设计的优质开源 Next.js 网站模板。使用 Next.js 16 和 Tailwind CSS 构建，提供现代、响应式设计，支持亮色和暗色模式。

该模板配备了所有必要的部分，包括英雄区、功能展示、价格方案、博客和联系表单，是启动在线业务的完美起点。内置中英文国际化支持，让您轻松触达全球受众。

无论您是创建新的创业公司、展示 SaaS 产品还是构建企业网站，Ensoo Startup 都能提供专业的基础，既美观又技术可靠。

## ✨ 主要特性

- 专为创业公司和 SaaS 业务打造
- Next.js 和 Tailwind CSS
- 所有必要的业务部分和页面
- 高质量、简洁的设计
- 暗色和亮色版本
- TypeScript 支持
- 以及更多...

## 🚀 开始使用

### 先决条件

- Node.js 20 或更高版本
- npm 6 或更高版本

### 安装

1. 克隆仓库：
   ```bash
   git clone https://github.com/LureCoder/ensoo-startup.git
   cd ensoo-startup
   ```

2. 安装依赖：
   ```bash
   npm install
   ```

### 开发

启动开发服务器：

```bash
npm run dev
```

应用将在 `http://localhost:3000` 可用。

### 构建生产版本

构建生产版本：

```bash
npm run build
```

这将在 `.next` 目录中创建优化的生产构建。

### 启动生产服务器

构建后，您可以启动生产服务器：

```bash
npm start
```

### 导出静态文件

导出项目为静态文件：

```bash
npx next export
```

这将创建一个包含所有静态文件的 `out` 目录，可以部署到任何静态托管服务。

## 🌐 国际化 (i18n)

模板支持中英文国际化。您可以在 `src/i18n/` 目录中管理翻译：

- `src/i18n/en.json` - 英文翻译
- `src/i18n/zh.json` - 中文翻译

要添加新的翻译键，只需将其添加到两个 JSON 文件中。要在组件中使用翻译，导入 `t18n` 函数：

```tsx
import { t18n } from "@/i18n";
import { useLanguage } from "@/hooks/useLanguage";

const MyComponent = () => {
  const language = useLanguage();
  
  return (
    <div>
      <h1>{t18n('hero.title', language)}</h1>
      <p>{t18n('hero.description', language)}</p>
    </div>
  );
};
```

## ⚙️ 配置

模板包含配置文件来控制网站的各个方面：

### 部分可见性

在 `src/config/sectionsVisibility.ts` 中控制首页显示哪些部分：

```typescript
// 示例配置
const sectionConfig = {
  hero: true,           // 显示英雄区
  features: true,       // 显示功能区
  video: true,          // 显示视频区
  brands: true,         // 显示品牌区
  aboutSectionOne: true, // 显示关于我们第一部分
  aboutSectionTwo: true, // 显示关于我们第二部分
  testimonials: true,    // 显示客户评价区
  pricing: true,         // 显示价格方案区
  blog: true,            // 显示博客区
  contact: true          // 显示联系区
};
```

### 菜单可见性

在 `src/config/menuVisibility.ts` 中控制显示哪些菜单项：

```typescript
// 示例配置
const menuVisibilityConfig = {
  home: true,           // 显示首页菜单项
  about: true,          // 显示关于我们菜单项
  contact: true,        // 显示联系我们菜单项
  ourProducts: true,    // 显示我们的产品菜单项
  blog: false,          // 隐藏博客菜单项
  pages: false,         // 隐藏页面菜单项
  submenu: {
    aboutPage: true,    // 在子菜单中显示关于页面
    // ... 其他子菜单项
  }
};
```

### 认证按钮可见性

在 `src/config/authVisibility.ts` 中控制登录和注册按钮的可见性：

```typescript
// 示例配置
const authVisibilityConfig = {
  signIn: true,         // 显示登录按钮
  signUp: true          // 显示注册按钮
};
```

## 📁 项目结构

```
startup-nextjs/
├── public/           # 静态资源
├── src/
│   ├── app/          # Next.js App Router 页面
│   ├── components/   # 可重用组件
│   ├── config/       # 配置文件
│   ├── hooks/        # 自定义 React hooks
│   ├── i18n/         # 国际化文件
│   ├── styles/       # 全局样式
│   └── types/        # TypeScript 类型
├── .eslintrc.json    # ESLint 配置
├── next.config.js    # Next.js 配置
├── package.json      # 项目依赖
└── tsconfig.json     # TypeScript 配置
```
