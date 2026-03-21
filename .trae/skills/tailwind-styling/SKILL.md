---
name: "tailwind-styling"
description: "提供Tailwind CSS 4样式指导。当用户需要UI样式调整或响应式设计时调用。"
---

# Tailwind CSS样式

本技能为Tailwind CSS 4样式和响应式设计提供指导。

## 核心功能

### 1. 响应式设计
- **断点**:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px
- **工具类**:
  ```html
  <div className="w-full md:w-1/2 lg:w-1/3">
    <!-- 内容 -->
  </div>
  ```

### 2. 颜色系统
- **主色**: `bg-primary`, `text-primary`
- **次色**: `bg-secondary`, `text-secondary`
- **中性色**: `bg-gray-50`, `dark:bg-gray-dark`
- **文本颜色**: `text-black`, `text-body-color`, `dark:text-white`

### 3. 排版
- **字体大小**:
  - `text-sm`: 0.875rem
  - `text-base`: 1rem
  - `text-lg`: 1.125rem
  - `text-xl`: 1.25rem
  - `text-2xl`: 1.5rem
  - `text-3xl`: 1.875rem
  - `text-4xl`: 2.25rem
- **字体粗细**:
  - `font-normal`: 400
  - `font-medium`: 500
  - `font-semibold`: 600
  - `font-bold`: 700

### 4. 布局
- **Flexbox**:
  ```html
  <div className="flex flex-wrap items-center justify-between">
    <!-- 内容 -->
  </div>
  ```
- **网格**:
  ```html
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <!-- 内容 -->
  </div>
  ```
- **间距**:
  - `p-4`: 内边距
  - `m-4`: 外边距
  - `gap-4`: 间距

### 5. 组件
- **卡片**:
  ```html
  <div className="bg-white dark:bg-gray-dark rounded-lg shadow-md p-6">
    <!-- 内容 -->
  </div>
  ```
- **按钮**:
  ```html
  <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
    按钮
  </button>
  ```
- **表单**:
  ```html
  <input 
    type="text" 
    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:border-primary focus:ring-2 focus:ring-primary/20"
  />
  ```

### 6. 深色模式
- **切换**:
  ```html
  <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
    {theme === 'light' ? '🌙' : '☀️'}
  </button>
  ```
- **深色类**:
  ```html
  <div className="bg-white dark:bg-gray-dark text-black dark:text-white">
    <!-- 内容 -->
  </div>
  ```

### 7. 动画
- **过渡**:
  ```html
  <div className="transition-all duration-300 ease-in-out hover:scale-105">
    <!-- 内容 -->
  </div>
  ```
- **关键帧**:
  ```html
  <div className="animate-pulse">
    <!-- 内容 -->
  </div>
  ```

## 最佳实践
- **清除未使用的类**: Tailwind在生产环境中自动清除未使用的类
- **自定义工具**: 在`tailwind.config.js`中添加自定义工具
- **一致的命名**: 遵循项目特定的命名约定
- **移动优先**: 从移动端样式开始，根据需要添加断点