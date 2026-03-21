---
name: "typescript-types"
description: "为项目提供TypeScript类型定义和类型安全编码实践。当用户需要TypeScript类型指导或类型定义创建时调用。"
---

# TypeScript类型定义

本技能为项目中的TypeScript类型定义和类型安全编码实践提供指导。

## 核心功能

### 1. 类型定义
- **文件结构**: `src/types/`目录用于共享类型
- **常见类型**: 为API响应、表单数据和组件props定义可重用类型
- **类型安全**: 使用严格的TypeScript设置以获得更好的类型检查
- **类型推断**: 利用TypeScript的类型推断编写更简洁的代码

### 2. 组件Props
- **接口定义**: 为组件props创建接口
- **可选Props**: 对可选属性使用`?`
- **默认Props**: 为props提供默认值
- **泛型Props**: 对可重用组件使用泛型

### 3. 数据类型
- **联合类型**: 对多个可能的值使用联合类型
- **字面量类型**: 对特定字符串或数字值使用字面量类型
- **枚举类型**: 对相关的常量值使用枚举
- **类型守卫**: 实现类型守卫进行运行时类型检查

### 4. 类型工具
- **Partial**: 使所有属性变为可选
- **Required**: 使所有属性变为必需
- **Pick**: 从类型中选择特定属性
- **Omit**: 从类型中排除特定属性
- **Record**: 创建具有特定键值对的类型

### 5. 常见类型模式
- **产品类型**: 定义产品相关类型
- **菜单类型**: 定义菜单相关类型
- **语言类型**: 定义语言相关类型
- **表单类型**: 定义表单相关类型

## 类型定义示例

```typescript
// src/types/product.ts
export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  features: string[];
}

// src/types/menu.ts
export interface MenuItem {
  id: string;
  title: string;
  href: string;
  visible: boolean;
  submenu?: MenuItem[];
}

// src/types/language.ts
export type Language = 'en' | 'zh';

export interface LanguageData {
  [key: string]: any;
}

// src/types/form.ts
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
```

## TypeScript最佳实践

### 1. 严格模式
- 在tsconfig.json中启用`strict: true`
- 使用`noImplicitAny: true`避免隐式any类型
- 使用`strictNullChecks: true`正确处理null和undefined

### 2. 类型命名
- 接口和类型使用PascalCase
- 类型属性使用camelCase
- 常量使用UPPER_CASE
- 类型使用描述性名称

### 3. 类型推断
- 尽可能让TypeScript推断类型
- 为复杂对象显式定义类型
- 对可重用类型使用类型别名
- 对有方法的对象使用接口

### 4. 类型守卫
- 对原始类型使用`typeof`检查
- 对类实例使用`instanceof`检查
- 对复杂类型使用自定义类型守卫
- 谨慎使用类型断言

### 5. 性能考虑
- 避免过度使用泛型
- 对复杂类型转换使用映射类型
- 对类型逻辑使用条件类型
- 使用类型推断获得更好的性能

## 常见类型问题

### 1. 类型不匹配
- 检查组件之间的类型兼容性
- 确保API响应的类型一致
- 必要时在运行时验证类型

### 2. 类型推断问题
- 为复杂对象显式定义类型
- 对函数参数使用类型注解
- 仅在必要时使用类型断言

### 3. 类型定义维护
- 类型定义与API更改保持同步
- 组件props更改时更新类型
- 移除未使用的类型定义
- 记录复杂的类型定义

### 4. TypeScript配置
- 为项目配置tsconfig.json
- 使用适当的编译器选项
- 在构建过程中设置类型检查
- 将TypeScript与IDE集成

## TypeScript工具

### 1. 开发工具
- TypeScript语言服务器
- 带有TypeScript插件的ESLint
- 用于代码格式化的Prettier
- VS Code TypeScript扩展

### 2. 类型定义库
- 第三方库的DefinitelyTyped
- 运行TypeScript文件的ts-node
- 测试TypeScript代码的ts-jest
- 实用类型的type-fest

### 3. TypeScript资源
- TypeScript文档
- TypeScript手册
- TypeScript Playground
- TypeScript社区

本技能帮助在整个项目中维护类型安全，减少运行时错误并提高代码质量。