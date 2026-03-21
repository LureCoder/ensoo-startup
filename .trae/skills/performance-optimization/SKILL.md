---
name: "performance-optimization"
description: "提供Next.js项目的性能优化指导和最佳实践。当用户需要性能改进或优化策略时调用。"
---

# 性能优化

本技能提供优化Next.js项目性能的指导，重点关注速度、效率和用户体验。

## 核心功能

### 1. 图片优化
- **Next.js图片组件**: 使用`next/image`进行自动图片优化
- **图片格式**: 使用现代图片格式如WebP和AVIF
- **响应式图片**: 为不同设备生成多种图片尺寸
- **懒加载**: 对首屏以下的图片进行懒加载
- **图片缓存**: 缓存图片以加快后续加载

### 2. 代码分割
- **自动代码分割**: 利用Next.js的自动代码分割
- **动态导入**: 使用`import()`进行组件懒加载
- **基于路由的分割**: 按路由分割代码以加快初始加载
- **基于组件的分割**: 按组件分割代码以获得更好的性能
- **第三方库**: 将第三方库分割到单独的块中

### 3. 服务器端渲染(SSR)
- **服务器组件**: 对静态内容使用服务器组件
- **客户端组件**: 对交互功能使用客户端组件
- **数据获取**: 使用`async`服务器组件优化数据获取
- **缓存**: 缓存服务器渲染页面以加快后续加载
- **增量静态再生(ISR)**: 对动态内容使用ISR

### 4. 客户端优化
- **最小化JavaScript**: 减少包大小
- **Tree Shaking**: 移除未使用的代码
- **代码压缩**: 压缩CSS和JavaScript
- **压缩**: 启用gzip或Brotli压缩
- **缓存**: 在浏览器中缓存静态资源

### 5. 网络优化
- **HTTP/2**: 使用HTTP/2进行更快的并行请求
- **HTTP/3**: 考虑使用HTTP/3以获得更好的性能
- **CDN**: 使用CDN加快内容交付
- **预加载**: 预加载关键资源
- **预获取**: 预获取可能的下一页导航资源

### 6. 渲染优化
- **避免布局偏移**: 为图片使用`width`和`height`属性
- **最小化重新渲染**: 对组件和值使用记忆化
- **优化动画**: 使用CSS动画代替JavaScript
- **虚拟化**: 对长列表使用虚拟化
- **Suspense**: 使用React Suspense获得更好的加载状态

### 7. 构建优化
- **TurboPack**: 使用Turbopack加快构建
- **构建缓存**: 缓存构建输出
- **增量构建**: 使用增量构建加快开发
- **包分析器**: 分析包大小以识别优化机会
- **Tree Shaking**: 确保依赖项的正确tree shaking

## 优化示例

### 1. 图片优化

```tsx
import Image from 'next/image';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={300}
        priority={product.isFeatured}
        placeholder="blur"
        blurDataURL={product.blurDataURL}
        className="product-image"
      />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
    </div>
  );
};
```

### 2. 代码分割

```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>加载中...</p>,
  ssr: false,
});

const Page = () => {
  return (
    <div>
      <h1>页面标题</h1>
      <HeavyComponent />
    </div>
  );
};
```

### 3. 服务器端渲染

```tsx
// 服务器组件
async function Page() {
  const data = await fetch('https://api.example.com/data');
  const products = await data.json();

  return (
    <div>
      <h1>产品</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
```

### 4. 客户端优化

```tsx
import { useMemo } from 'react';

const ExpensiveComponent = ({ data }) => {
  const processedData = useMemo(() => {
    // 昂贵的计算
    return data.map(item => item * 2);
  }, [data]);

  return (
    <div>
      {processedData.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};
```

### 5. 网络优化

```html
<!-- 预加载关键字体 -->
<link rel="preload" href="/fonts/inter-regular.woff2" as="font" type="font/woff2" crossorigin>

<!-- 预获取下一页 -->
<link rel="prefetch" href="/about" as="document">
```

## 性能优化最佳实践

### 1. 测量性能
- 使用Lighthouse进行性能审计
- 使用Chrome DevTools性能标签
- 使用Web Vitals测量核心网页指标
- 在生产环境中监控性能
- 设置性能预算

### 2. 优化关键渲染路径
- 最小化HTML、CSS和JavaScript
- 内联关键CSS
- 延迟非关键JavaScript
- 优化字体加载
- 对关键资源使用预加载

### 3. 改善加载时间
- 减少服务器响应时间
- 使用CDN
- 启用压缩
- 缓存静态资源
- 优化图片

### 4. 增强运行时性能
- 最小化JavaScript执行时间
- 优化DOM操作
- 对动画使用requestAnimationFrame
- 避免布局抖动
- 使用被动事件监听器

### 5. 优化移动端
- 使用响应式设计
- 优化移动端图片
- 最小化JavaScript包大小
- 使用Service Workers实现离线支持
- 在实际移动设备上测试

## 性能优化工具

### 1. 开发工具
- Lighthouse
- Chrome DevTools
- WebPageTest
- Next.js包分析器
- SpeedCurve

### 2. 构建工具
- Turbopack
- Webpack
- Rollup
- Vite
- ESBuild

### 3. 监控工具
- New Relic
- Datadog
- Sentry
- Google Analytics
- Web Vitals

### 4. 优化库
- next/image用于图片优化
- next/dynamic用于代码分割
- react-lazyload用于懒加载
- react-window用于虚拟化
- swr用于数据获取

## 常见性能问题及解决方案

### 1. 大包大小
- **问题**: JavaScript包太大
- **解决方案**: 代码分割、tree shaking、最小化依赖

### 2. 初始加载慢
- **问题**: 页面初始加载时间过长
- **解决方案**: SSR、ISR、预加载、图片优化

### 3. 布局偏移
- **问题**: 加载过程中页面内容偏移
- **解决方案**: 设置图片尺寸、使用占位符加载状态

### 4. 运行时性能慢
- **问题**: 页面交互响应慢
- **解决方案**: 记忆化、避免不必要的重新渲染、优化动画

### 5. 移动端性能差
- **问题**: 页面在移动设备上运行缓慢
- **解决方案**: 响应式设计、优化图片、最小化JavaScript

本技能帮助优化Next.js项目的性能，确保在所有设备上快速加载、流畅交互和出色的用户体验。