---
name: "product-management"
description: "管理产品展示和数据。当用户需要添加、修改或删除产品时调用。"
---

# 产品管理

本技能为管理项目中的产品提供指导。

## 核心功能

### 1. 产品数据结构
- **位置**: `src/components/Products/productData.ts`
- **类型**: `Product[]`
- **接口**:
  ```typescript
  interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    features: string[];
  }
  ```

### 2. 添加新产品
1. **更新productData.ts**:
  ```typescript
  {
    id: 7,
    title: "新产品",
    description: "产品描述",
    image: "/images/blog/blog-01.jpg",
    category: "new-category",
    features: ["feature1", "feature2"]
  }
  ```

2. **更新分类翻译**:
  - 将分类添加到`src/i18n/en.json`
  - 将分类添加到`src/i18n/zh.json`

3. **更新特性翻译**:
  - 将特性添加到`src/i18n/en.json`
  - 将特性添加到`src/i18n/zh.json`

### 3. 产品分类
- **可用分类**:
  - `cloud`
  - `analytics`
  - `security`
  - `ai`
  - `devops`
  - `crm`
- **添加新分类**:
  1. 添加到产品数据
  2. 为新分类添加翻译

### 4. 产品特性
- **特性键**:
  - 对特性键使用camelCase
  - 避免特殊字符
- **示例特性**:
  - `autoScaling`
  - `uptime`
  - `support247`
  - `realtimeData`

### 5. 产品展示
- **网格布局**:
  - 移动端: 1列
  - 平板: 2列
  - 桌面端: 3列
- **卡片组件**:
  - 产品标题
  - 描述
  - 图片
  - 特性列表
  - 分类徽章

### 6. 图片管理
- **图片位置**: `public/images/blog/`
- **推荐尺寸**: 600x400px
- **文件类型**: JPG, PNG, SVG
- **优化**: 使用`next/image`组件进行优化加载

### 7. 产品筛选
- **按分类**: 按分类筛选产品
- **按特性**: 按特性筛选产品
- **搜索**: 按标题或描述搜索产品

## 示例

**添加新产品**:

```typescript
// src/components/Products/productData.ts
{
  id: 7,
  title: "区块链平台",
  description: "企业去中心化区块链解决方案",
  image: "/images/blog/blog-03.jpg",
  category: "blockchain",
  features: ["decentralized", "secure", "scalable"]
}

// src/i18n/en.json
"categories": {
  "blockchain": "Blockchain"
},
"features": {
  "decentralized": "Decentralized",
  "secure": "Secure",
  "scalable": "Scalable"
}

// src/i18n/zh.json
"categories": {
  "blockchain": "区块链"
},
"features": {
  "decentralized": "去中心化",
  "secure": "安全",
  "scalable": "可扩展"
}
```