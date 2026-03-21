---
name: "component-development"
description: "提供React组件开发指导和最佳实践。当用户需要创建、修改或优化组件时调用。"
---

# React组件开发

本技能提供在项目中开发React组件的指导，重点关注最佳实践、可重用性和性能。

## 核心功能

### 1. 组件结构
- **文件组织**: `src/components/[ComponentName]/index.tsx`
- **组件类型**: 使用"use client"指令的客户端组件
- **组件命名**: 组件名称使用PascalCase
- **Props定义**: 使用TypeScript接口定义props
- **状态管理**: 使用useState管理本地状态，使用useContext管理全局状态

### 2. 组件模式
- **函数组件**: 使用带有hooks的函数组件
- **自定义Hooks**: 将可重用逻辑提取到自定义hooks中
- **高阶组件**: 使用HOC处理横切关注点
- **Render Props**: 使用render props实现灵活的组件组合
- **复合组件**: 使用复合组件处理复杂UI

### 3. 组件样式
- **Tailwind CSS**: 使用Tailwind CSS进行样式设置
- **CSS模块**: 使用CSS模块处理组件特定样式
- **Styled Components**: 如需要可使用styled-components
- **响应式设计**: 使用Tailwind实现响应式设计
- **主题支持**: 使用Tailwind的主题配置

### 4. 组件生命周期
- **useEffect**: 使用useEffect处理副作用
- **useMemo**: 使用useMemo处理昂贵的计算
- **useCallback**: 使用useCallback处理记忆化函数
- **useRef**: 使用useRef处理DOM引用
- **useLayoutEffect**: 使用useLayoutEffect处理DOM测量

### 5. 组件测试
- **单元测试**: 测试单个组件
- **集成测试**: 测试组件交互
- **端到端测试**: 测试完整的用户流程
- **Mock**: Mock外部依赖
- **测试覆盖率**: 确保良好的测试覆盖率

## 组件实现示例

### 1. 通用按钮组件

```tsx
"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  className = "",
}) => {
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    ghost: "text-gray-700 hover:bg-gray-100",
  };

  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        rounded-md
        font-medium
        transition-colors
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:ring-offset-2
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
```

### 2. 卡片组件

```tsx
"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
  padding?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  shadow = true,
  padding = true,
}) => {
  return (
    <div
      className={`
        bg-white
        rounded-lg
        ${shadow ? "shadow-md" : ""}
        ${padding ? "p-4" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
```

### 3. 动画文本组件

```tsx
"use client";

import React, { useState, useEffect } from "react";

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < children.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + children[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50 + delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, children, delay]);

  return (
    <span
      suppressHydrationWarning
      className={`transition-all duration-300 ease-in-out ${className}`}
    >
      {displayedText}
    </span>
  );
};

export default AnimatedText;
```

### 4. 面包屑组件

```tsx
"use client";

import React from "react";
import Link from "next/link";

interface BreadcrumbProps {
  pageName: string;
  description: string;
  language: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ pageName, description, language }) => {
  return (
    <section className="py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">{pageName}</h1>
            <p className="text-gray-600">{description}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <nav className="flex" aria-label="面包屑">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-blue-600 text-sm font-medium"
                  >
                    首页
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                      {pageName}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
```

## 组件开发最佳实践

### 1. 可重用性
- 使用props创建可重用组件
- 为可选值使用默认props
- 将通用逻辑提取到自定义hooks中
- 使用组合而非继承

### 2. 性能
- 对昂贵组件使用memo
- 对昂贵计算使用useMemo
- 对事件处理程序使用useCallback
- 避免不必要的重新渲染
- 尽可能懒加载组件

### 3. 可访问性
- 使用语义化HTML元素
- 需要时添加aria属性
- 确保适当的键盘导航
- 使用屏幕阅读器测试
- 使用适当的颜色对比度

### 4. 可维护性
- 编写清晰、简洁的代码
- 为复杂逻辑添加注释
- 使用一致的命名约定
- 遵循TypeScript最佳实践
- 为组件编写单元测试

### 5. 测试
- 测试组件渲染
- 测试props和状态更改
- 测试事件处理程序
- 测试边界情况
- 使用Jest和React Testing Library等测试库

## 组件开发工具

### 1. 开发工具
- React DevTools
- 带有React扩展的VS Code
- 带有React插件的ESLint
- 用于代码格式化的Prettier

### 2. 测试工具
- Jest
- React Testing Library
- 用于端到端测试的Cypress
- 用于组件文档的Storybook

### 3. 性能工具
- React Profiler
- Chrome DevTools性能标签
- 用于性能审计的Lighthouse
- Webpack包分析器

### 4. 文档工具
- Storybook
- React Styleguidist
- JSDoc
- 用于文档的TypeScript接口

本技能帮助创建高质量、可重用和高性能的React组件，增强项目的代码库和用户体验。