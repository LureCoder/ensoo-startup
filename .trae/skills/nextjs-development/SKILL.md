---
name: "nextjs-development"
description: "提供Next.js 16开发指导和最佳实践。当用户需要Next.js编码帮助或项目设置时调用。"
---

# Next.js开发

本技能为使用Turbopack、React 19和TypeScript的Next.js 16项目提供指导。

## 核心功能

### 1. 页面创建
- **文件结构**: `src/app/[page-name]/page.tsx`
- **组件类型**: 对客户端组件使用`"use client"`
- **导入模式**:
  ```tsx
  import { t18n } from "@/i18n";
  import { useLanguage } from "@/hooks/useLanguage";
  ```
- **最佳实践**: 静态内容使用服务器组件，交互功能使用客户端组件

### 2. 路由
- **App Router**: 使用Next.js 16 App Router
- **动态路由**: `src/app/[slug]/page.tsx`
- **嵌套路由**: `src/app/dashboard/settings/page.tsx`
- **布局**: `src/app/layout.tsx`用于共享布局

### 3. 数据获取
- **服务器组件**: 使用`fetch()`的`async`组件
- **客户端组件**: 使用`useEffect`或SWR进行客户端数据获取
- **缓存**: 使用`revalidate`选项保持数据新鲜

### 4. 性能优化
- **图片组件**: 使用`next/image`进行优化图片
- **代码分割**: 使用App Router自动进行
- **静态生成**: 使用`generateStaticParams`生成静态页面
- **动态导入**: 使用`import()`进行懒加载

### 5. 常见问题
- **Hydration不匹配**: 对仅客户端内容使用`suppressHydrationWarning`
- **服务器/客户端差异**: 检查`typeof window !== 'undefined'`
- **TypeScript错误**: 确保props和state的类型正确

## 页面模板示例

```tsx
"use client";

import { t18n } from "@/i18n";
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