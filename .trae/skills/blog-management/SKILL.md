---
name: "blog-management"
description: "管理博客内容和展示。当用户需要添加、修改或删除博客文章时调用。"
---

# 博客管理

本技能为管理项目中的博客内容提供指导。

## 核心功能

### 1. 博客数据结构
- **位置**: `src/components/Blog/blogData.tsx`
- **类型**: `Blog[]`
- **接口**:
  ```typescript
  interface Blog {
    id: number;
    title: string;
    description: string;
    date: string;
    author: string;
    category: string;
    image: string;
    tags: string[];
  }
  ```

### 2. 添加新博客文章
1. **更新blogData.tsx**:
  ```typescript
  {
    id: 7,
    title: "新博客文章",
    description: "博客文章描述",
    date: "2024-01-01",
    author: "作者姓名",
    category: "technology",
    image: "/images/blog/post-01.jpg",
    tags: ["tech", "innovation"]
  }
  ```

2. **更新分类翻译**:
  - 将分类添加到`src/i18n/en.json`
  - 将分类添加到`src/i18n/zh.json`

3. **更新标签翻译**:
  - 将标签添加到`src/i18n/en.json`
  - 将标签添加到`src/i18n/zh.json`

### 3. 博客分类
- **可用分类**:
  - `technology`
  - `business`
  - `design`
  - `marketing`
- **添加新分类**:
  1. 添加到博客数据
  2. 为新分类添加翻译

### 4. 博客标签
- **标签格式**: 使用小写、连字符分隔
- **示例标签**:
  - `tech`
  - `innovation`
  - `startup`
  - `design`

### 5. 博客展示
- **网格布局**:
  - 移动端: 1列
  - 平板: 2列
  - 桌面端: 3列
- **卡片组件**:
  - 博客标题
  - 描述
  - 日期
  - 作者
  - 分类
  - 图片
  - 标签

### 6. 图片管理
- **图片位置**: `public/images/blog/`
- **推荐尺寸**: 800x600px
- **文件类型**: JPG, PNG, SVG
- **优化**: 使用`next/image`组件进行优化加载

### 7. 博客详情页
- **文件**: `src/app/blog-details/page.tsx`
- **内容**:
  - 完整博客内容
  - 相关文章
  - 分享按钮
  - 评论区域

### 8. 博客侧边栏
- **文件**: `src/app/blog-sidebar/page.tsx`
- **内容**:
  - 最近文章
  - 分类
  - 标签
  - 搜索

## 示例

**添加新博客文章**:

```typescript
// src/components/Blog/blogData.tsx
{
  id: 7,
  title: "商业中人工智能的未来",
  description: "探索人工智能如何改变商业运营",
  date: "2024-03-15",
  author: "张三",
  category: "technology",
  image: "/images/blog/post-03.jpg",
  tags: ["ai", "business", "technology"]
}

// src/i18n/en.json
"categories": {
  "technology": "Technology"
},
"tags": {
  "ai": "AI",
  "business": "Business",
  "technology": "Technology"
}

// src/i18n/zh.json
"categories": {
  "technology": "技术"
},
"tags": {
  "ai": "人工智能",
  "business": "商业",
  "technology": "技术"
}
```