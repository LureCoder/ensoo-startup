---
name: i18n
description: when user ask to create new page, new page should support i18n.
---

# Skill 名称：Auto I18n for New Pages
# 描述：所有新创建的页面自动集成国际化(i18n)能力，包含语言包引用、t18n函数调用、多语言文件生成
# 适用范围：新建页面（Page）

## 核心规则
1. 新建页面时，必须在页面代码中自动引入现有项目的i18n特性；
2. 自动导入 `useLanguage` hook 和 `t18n` 函数；
3. 页面内所有静态文本（标题、按钮、描述、内容等）必须使用 `t18n` 函数调用，禁止硬编码；
4. 自动在项目国际化目录（src/i18n）下生成当前页面的多语言文件；
5. 页面名称使用小驼峰命名（如 `myPage`、`userProfile`）。

## 项目i18n架构
- **翻译函数**：`t18n(key: string, locale: string): string` - 用于单行文本
- **数组翻译函数**：`t18nArray(key: string, locale: string): string[]` - 用于多行文本
- **语言Hook**：`useLanguage()` - 返回当前语言（'en' | 'zh'）
- **语言文件位置**：`src/i18n/en.json` 和 `src/i18n/zh.json`
- **语言切换**：通过 Cookie 和 localStorage 存储，触发 `languageChange` 事件

## React 页面模板指令

### 1. 页面组件结构
```tsx
"use client";

import { t18n, t18nArray } from "@/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import AnimatedText from "@/components/Common/AnimatedText";

const PageName = () => {
  const language = useLanguage();

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          <AnimatedText>{t18n('pageName.title', language)}</AnimatedText>
        </h1>
        <p className="text-body-color">
          <AnimatedText>{t18n('pageName.description', language)}</AnimatedText>
        </p>
      </div>
    </section>
  );
};

export default PageName;
```

### 2. 多语言文件生成
在 `src/i18n/en.json` 和 `src/i18n/zh.json` 中添加页面语言包：

**en.json**:
```json
{
  "pageName": {
    "title": "Page Title",
    "description": "Page description text"
  }
}
```

**zh.json**:
```json
{
  "pageName": {
    "title": "页面标题",
    "description": "页面描述文本"
  }
}
```

### 3. 多行文本处理
对于需要多行显示的描述文本，使用数组格式：

```tsx
// 组件中使用
t18nArray('pageName.description', language).map((line, index) => (
  <p key={index}>{line}</p>
))
```

**en.json**:
```json
{
  "pageName": {
    "description": [
      "First paragraph of description.",
      "Second paragraph of description.",
      "Third paragraph of description."
    ]
  }
}
```

### 4. 面包屑导航
如果页面需要面包屑，使用 Breadcrumb 组件：

```tsx
import Breadcrumb from "@/components/Common/Breadcrumb";

<Breadcrumb
  pageName={t18n('pageName.breadcrumb.pageName', language)}
  description={t18n('pageName.breadcrumb.description', language)}
  language={language}
/>
```

### 5. 命名规范
- **页面组件名**：大驼峰（如 `UserProfilePage`）
- **语言包键名**：小驼峰（如 `userProfilePage`）
- **翻译键路径**：`pageName.section.key`（如 `userProfilePage.title`）

## 异常处理
- 若项目未初始化i18n，新建页面时提示「请先配置项目全局i18n」；
- 语言包目录不存在时，自动创建对应目录后再生成文件；
- 页面名称含特殊字符时，自动标准化命名（如去掉空格、特殊符号，转为小驼峰）。
