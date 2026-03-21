---
name: "contact-form"
description: "处理联系表单提交和管理。当用户需要设置表单提交逻辑或邮件通知时调用。"
---

# 联系表单管理

本技能为管理项目中的联系表单提供指导。

## 核心功能

### 1. 表单结构
- **文件**: `src/components/Contact/index.tsx`
- **字段**:
  - 姓名
  - 邮箱
  - 留言
- **表单验证**:
  - 必填字段
  - 邮箱格式
  - 留言长度

### 2. 表单提交
- **客户端验证**:
  - 提交前验证
  - 显示错误消息
- **服务器端处理**:
  - 表单提交的API路由
  - 邮件通知
  - 数据存储

### 3. 邮件集成
- **SMTP配置**:
  - SMTP设置的环境变量
  - 邮件模板
- **通知邮件**:
  - 管理员通知
  - 用户确认

### 4. 表单样式
- **输入字段**:
  ```html
  <input 
    type="text" 
    placeholder={t18n('contact.name', language)}
    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20"
  />
  ```
- **文本域**:
  ```html
  <textarea 
    rows={5}
    placeholder={t18n('contact.message', language)}
    className="w-full resize-none border border-gray-300 rounded-md px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20"
  ></textarea>
  ```
- **提交按钮**:
  ```html
  <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
    {t18n('contact.sendMessage', language)}
  </button>
  ```

### 5. 表单提交逻辑
- **API路由**:
  - `src/app/api/contact/route.ts`
  - 处理POST请求
  - 验证和处理表单数据
- **响应处理**:
  - 成功消息
  - 错误消息
  - 加载状态

### 6. 新闻订阅
- **文件**: `src/components/Contact/NewsLatterBox.tsx`
- **字段**:
  - 邮箱
- **集成**:
  - Mailchimp
  - SendGrid
  - 自定义邮件列表

### 7. 二维码区域
- **文件**: `src/components/Contact/QRCodeSection.tsx`
- **用途**:
  - 显示微信和WhatsApp二维码
  - 允许用户扫描和连接

### 8. 隐私和安全
- **GDPR合规**:
  - 隐私政策链接
  - 同意复选框
- **垃圾邮件防护**:
  - reCAPTCHA
  - 蜜罐字段
- **数据安全**:
  - 加密敏感数据
  - 安全存储

## 示例

**设置表单提交**:

1. **创建API路由**:
  ```typescript
  // src/app/api/contact/route.ts
  export async function POST(request: Request) {
    const formData = await request.json();
    
    // 验证表单数据
    if (!formData.name || !formData.email || !formData.message) {
      return new Response(JSON.stringify({ error: '所有字段都是必填的' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 处理表单提交
    // 发送邮件、存储数据等

    return new Response(JSON.stringify({ success: '消息发送成功' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  ```

2. **更新联系组件**:
  ```tsx
  // src/components/Contact/index.tsx
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      setResponse({ error: '发送消息失败' });
    } finally {
      setIsSubmitting(false);
    }
  };
  ```