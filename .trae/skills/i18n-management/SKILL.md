---
name: "i18n-management"
description: "管理项目国际化配置。当用户需要添加新语言或更新翻译时调用。"
---

# 国际化管理

本技能为管理项目中的国际化提供指导。

## 核心功能

### 1. 语言文件
- **位置**: `src/i18n/`
- **文件**:
  - `en.json`: 英文翻译
  - `zh.json`: 中文翻译
- **结构**:
  ```json
  {
    "pageName": {
      "title": "页面标题",
      "description": "页面描述",
      "breadcrumb": {
        "pageName": "面包屑名称",
        "description": "面包屑描述"
      }
    }
  }
  ```

### 2. 翻译函数
- **t18n**: 用于单行文本
  ```tsx
  t18n('pageName.title', language)
  ```
- **t18nArray**: 用于多行文本
  ```tsx
  t18nArray('pageName.description', language)
  ```
- **useLanguage Hook**:
  ```tsx
  const language = useLanguage();
  ```

### 3. 添加新语言
1. **创建语言文件**: `src/i18n/[lang].json`
2. **更新翻译**: 为所有键添加翻译
3. **更新i18n索引**: 导入新语言文件
4. **更新语言切换器**: 将语言添加到下拉菜单

### 4. 添加新翻译
1. **更新语言文件**: 向`en.json`和`zh.json`添加新键
2. **在组件中使用**: 使用`t18n()`引用新键
3. **测试**: 验证两种语言的翻译都有效

### 5. 翻译最佳实践
- **一致的键**: 对嵌套键使用点符号
- **有意义的键**: 使用描述性的键名
- **避免硬编码**: 始终使用翻译函数
- **处理缺失翻译**: 如果找不到翻译，翻译函数返回键

### 6. 语言切换
- **Cookie存储**: 语言首选项存储在cookie中
- **LocalStorage**: 语言首选项的备份存储
- **事件系统**: `languageChange`事件用于跨组件更新

### 7. 多行文本
- **数组格式**: 对多行描述使用数组
  ```json
  "description": [
    "第一段",
    "第二段"
  ]
  ```
- **渲染**:
  ```tsx
  t18nArray('pageName.description', language).map((line, index) => (
    <p key={index}>{line}</p>
  ))
  ```

## 示例

**添加新页面翻译**:

1. **更新en.json**:
  ```json
  {
    "newPage": {
      "title": "New Page",
      "description": "This is a new page"
    }
  }
  ```

2. **更新zh.json**:
  ```json
  {
    "newPage": {
      "title": "新页面",
      "description": "这是一个新页面"
    }
  }
  ```

3. **在组件中使用**:
  ```tsx
  <h1>{t18n('newPage.title', language)}</h1>
  <p>{t18n('newPage.description', language)}</p>
  ```