---
name: "testing"
description: "提供Next.js项目的测试指导和最佳实践。当用户需要创建、修改或优化测试时调用。"
---

# 测试

本技能提供Next.js项目的测试指导，重点关注单元测试、集成测试和端到端测试策略。

## 核心功能

### 1. 测试框架
- **Jest**: JavaScript测试框架
- **React Testing Library**: React组件测试库
- **Cypress**: 端到端测试框架
- **Playwright**: 端到端测试框架
- **Vitest**: 现代测试框架，与Vite集成

### 2. 单元测试
- **组件测试**: 测试单个组件
- **Hook测试**: 测试自定义Hook
- **工具函数测试**: 测试工具函数
- **API测试**: 测试API端点
- **状态管理测试**: 测试状态管理逻辑

### 3. 集成测试
- **组件集成**: 测试组件交互
- **页面集成**: 测试完整页面
- **API集成**: 测试API集成
- **数据库集成**: 测试数据库交互
- **第三方集成**: 测试第三方服务集成

### 4. 端到端测试
- **用户流程**: 测试完整的用户流程
- **表单提交**: 测试表单提交
- **导航**: 测试页面间导航
- **认证**: 测试认证流程
- **错误处理**: 测试错误处理场景

### 5. 测试最佳实践
- **测试覆盖率**: 目标80%+测试覆盖率
- **测试隔离**: 隔离测试组件
- **Mock**: Mock外部依赖
- **测试命名**: 使用描述性的测试名称
- **测试组织**: 按功能或组件组织测试

### 6. 测试工具
- **测试运行器**: Jest, Vitest
- **测试库**: React Testing Library, Enzyme
- **Mock库**: Jest Mock, MSW
- **断言库**: Jest, Chai
- **快照测试**: Jest快照测试

### 7. CI/CD集成
- **GitHub Actions**: 在CI/CD流水线中运行测试
- **GitLab CI**: 在GitLab流水线中运行测试
- **CircleCI**: 在CircleCI流水线中运行测试
- **Jenkins**: 在Jenkins流水线中运行测试
- **测试覆盖率报告**: 生成测试覆盖率报告

## 测试示例

### 1. 组件测试

```tsx
// components/Button.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button组件', () => {
  test('渲染带有子元素的按钮', () => {
    render(<Button>点击我</Button>);
    expect(screen.getByText('点击我')).toBeInTheDocument();
  });

  test('点击时调用onClick处理程序', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>点击我</Button>);
    fireEvent.click(screen.getByText('点击我'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('默认渲染主变体', () => {
    render(<Button>点击我</Button>);
    expect(screen.getByText('点击我')).toHaveClass('bg-blue-600');
  });

  test('指定时渲染次变体', () => {
    render(<Button variant="secondary">点击我</Button>);
    expect(screen.getByText('点击我')).toHaveClass('bg-gray-600');
  });

  test('disabled为true时禁用', () => {
    render(<Button disabled>点击我</Button>);
    expect(screen.getByText('点击我')).toBeDisabled();
  });
});
```

### 2. Hook测试

```tsx
// hooks/useLanguage.test.ts
import { renderHook, act } from '@testing-library/react';
import { useLanguage } from './useLanguage';

describe('useLanguage Hook', () => {
  test('返回默认语言en', () => {
    const { result } = renderHook(() => useLanguage());
    expect(result.current).toBe('en');
  });

  test('调用setLanguage时更新语言', () => {
    const { result } = renderHook(() => useLanguage());
    act(() => {
      result.current = 'zh';
    });
    expect(result.current).toBe('zh');
  });
});
```

### 3. API测试

```tsx
// api/products.test.ts
import { getProducts } from './products';

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([{ id: 1, title: '产品1' }]),
  })
) as jest.Mock;

describe('产品API', () => {
  test('getProducts返回产品', async () => {
    const products = await getProducts();
    expect(products).toEqual([{ id: 1, title: '产品1' }]);
  });

  test('getProducts处理错误', async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        status: 500,
      })
    );

    await expect(getProducts()).rejects.toThrow('获取产品失败');
  });
});
```

### 4. 端到端测试

```tsx
// cypress/e2e/homepage.cy.ts
describe('首页', () => {
  it('成功加载', () => {
    cy.visit('/');
    cy.get('h1').should('be.visible');
  });

  it('导航到关于页面', () => {
    cy.visit('/');
    cy.get('a[href="/about"]').click();
    cy.url().should('include', '/about');
    cy.get('h1').should('contain', '关于');
  });

  it('导航到产品页面', () => {
    cy.visit('/');
    cy.get('a[href="/products"]').click();
    cy.url().should('include', '/products');
    cy.get('h1').should('contain', '产品');
  });

  it('导航到联系页面', () => {
    cy.visit('/');
    cy.get('a[href="/contact"]').click();
    cy.url().should('include', '/contact');
    cy.get('h1').should('contain', '联系');
  });
});
```

### 5. 快照测试

```tsx
// components/Header.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header组件', () => {
  test('正确渲染', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
```

## 测试最佳实践

### 1. 测试组织
- **文件结构**: 将测试放在组件旁边
- **测试命名**: 使用描述性的测试名称
- **测试分组**: 按功能或组件分组测试
- **测试隔离**: 隔离测试组件
- **测试清理**: 测试后清理

### 2. 测试编写
- **Arrange-Act-Assert**: 使用AAA模式
- **单一职责**: 每个测试只测试一个功能
- **描述性名称**: 使用描述性的测试名称
- **边界情况**: 测试边界情况
- **错误处理**: 测试错误场景

### 3. Mock
- **Mock外部依赖**: Mock API调用、localStorage等
- **Mock组件**: 测试父组件时Mock子组件
- **Mock函数**: Mock函数以测试其调用
- **Mock定时器**: Mock定时器以测试时间相关代码
- **Mock浏览器API**: Mock浏览器API如window、document等

### 4. 测试覆盖率
- **代码覆盖率**: 目标80%+测试覆盖率
- **覆盖率报告**: 生成覆盖率报告
- **覆盖率分析**: 分析覆盖率报告以识别未测试的代码
- **测试关键路径**: 测试关键用户路径
- **测试边界情况**: 测试边界情况和错误场景

### 5. CI/CD集成
- **在CI中运行测试**: 在CI/CD流水线中运行测试
- **测试覆盖率阈值**: 设置测试覆盖率阈值
- **测试矩阵**: 在多个环境中测试
- **测试并行化**: 并行运行测试以加快结果
- **测试报告**: 为CI/CD生成测试报告

## 测试工具

### 1. 测试运行器
- **Jest**: JavaScript测试框架
- **Vitest**: 现代测试框架，与Vite集成
- **Mocha**: 灵活的测试框架
- **Jasmine**: 行为驱动测试框架

### 2. 测试库
- **React Testing Library**: React组件测试库
- **Enzyme**: React测试工具
- **Vue Test Utils**: Vue组件测试库
- **Angular Testing Utilities**: Angular测试工具

### 3. 端到端测试
- **Cypress**: 端到端测试框架
- **Playwright**: 端到端测试框架
- **Puppeteer**: Headless Chrome Node.js API
- **Selenium**: Web浏览器自动化

### 4. Mock库
- **Jest Mock**: Jest内置Mock
- **MSW (Mock Service Worker)**: API Mock库
- **Sinon**: 独立的测试spy、stub和mock
- **Nock**: HTTP服务器Mock

### 5. 断言库
- **Jest断言**: Jest内置断言
- **Chai**: BDD/TDD断言库
- **Expect.js**: BDD风格断言
- **Should.js**: BDD风格断言

## 常见测试问题及解决方案

### 1. 测试不稳定
- **问题**: 测试有时通过有时失败
- **解决方案**: 使用确定性测试数据，Mock外部依赖，使用适当的等待策略

### 2. 测试速度慢
- **问题**: 测试运行时间过长
- **解决方案**: 并行运行测试，Mock昂贵的操作，使用更快的测试框架

### 3. 测试维护
- **问题**: 代码更改时测试中断
- **解决方案**: 编写弹性测试，使用抽象层，代码更改时更新测试

### 4. 测试覆盖率
- **问题**: 测试覆盖率低
- **解决方案**: 设置覆盖率目标，分析覆盖率报告，优先测试关键路径

### 5. Mock复杂性
- **问题**: Mock设置复杂
- **解决方案**: 使用MSW进行API Mock，使用高级Mock，抽象Mock设置

本技能帮助为Next.js项目创建全面的测试套件，确保代码质量、可靠性和可维护性。