# Ensoo Startup - Free Next.js Startup Website Template

Ensoo Startup is a premium, open-source Next.js website template designed specifically for startups, SaaS businesses, and tech companies. Built with Next.js 16 and Tailwind CSS, it offers a modern, responsive design with both light and dark mode support. 

This template comes fully equipped with all essential sections including hero, features, pricing, blog, and contact, making it the perfect starting point for launching your online presence. With built-in internationalization support for English and Chinese, you can easily reach a global audience.

Whether you're building a new startup, showcasing a SaaS product, or creating a corporate website, Ensoo Startup provides a professional foundation that's both visually appealing and technically robust.

## ✨ Key Features

- Crafted for Startup and SaaS Business
- Next.js and Tailwind CSS
- All Essential Business Sections and Pages
- High-quality and Clean Design
- Dark and Light Version
- TypeScript Support
- and Much More ...

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm 6 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/LureCoder/ensoo-startup.git
   cd ensoo-startup
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To build the project for production:

```bash
npm run build
```

This will create an optimized production build in the `.next` directory.

### Starting the Production Server

After building, you can start the production server:

```bash
npm start
```

### Exporting Static Files

To export the project as static files:

```bash
npx next export
```

This will create an `out` directory with all static files, which can be deployed to any static hosting service.

## 🌐 Internationalization (i18n)

The template supports internationalization with English and Chinese languages. You can manage translations in the `src/i18n/` directory:

- `src/i18n/en.json` - English translations
- `src/i18n/zh.json` - Chinese translations

To add a new translation key, simply add it to both JSON files. To use translations in components, import the `t18n` function:

```tsx
import { t18n } from "@/i18n";
import { useLanguage } from "@/hooks/useLanguage";

const MyComponent = () => {
  const language = useLanguage();
  
  return (
    <div>
      <h1>{t18n('hero.title', language)}</h1>
      <p>{t18n('hero.description', language)}</p>
    </div>
  );
};
```

## ⚙️ Configuration

The template includes configuration files to control various aspects of the website:

### Section Visibility

Control which sections are displayed on the homepage in `src/config/sectionsVisibility.ts`:

```typescript
// Example configuration
const sectionConfig = {
  hero: true,           // Show hero section
  features: true,       // Show features section
  video: true,          // Show video section
  brands: true,         // Show brands section
  aboutSectionOne: true, // Show about section 1
  aboutSectionTwo: true, // Show about section 2
  testimonials: true,    // Show testimonials section
  pricing: true,         // Show pricing section
  blog: true,            // Show blog section
  contact: true          // Show contact section
};
```

### Menu Visibility

Control which menu items are visible in `src/config/menuVisibility.ts`:

```typescript
// Example configuration
const menuVisibilityConfig = {
  home: true,           // Show home menu item
  about: true,          // Show about menu item
  contact: true,        // Show contact menu item
  ourProducts: true,    // Show our products menu item
  blog: false,          // Hide blog menu item
  pages: false,         // Hide pages menu item
  submenu: {
    aboutPage: true,    // Show about page in submenu
    // ... other submenu items
  }
};
```

### Authentication Buttons Visibility

Control the visibility of sign-in and sign-up buttons in `src/config/authVisibility.ts`:

```typescript
// Example configuration
const authVisibilityConfig = {
  signIn: true,         // Show sign-in button
  signUp: true          // Show sign-up button
};
```

## 📁 Project Structure

```
startup-nextjs/
├── public/           # Static assets
├── src/
│   ├── app/          # Next.js App Router pages
│   ├── components/   # Reusable components
│   ├── config/       # Configuration files
│   ├── hooks/        # Custom React hooks
│   ├── i18n/         # Internationalization files
│   ├── styles/       # Global styles
│   └── types/        # TypeScript types
├── .eslintrc.json    # ESLint configuration
├── next.config.js    # Next.js configuration
├── package.json      # Project dependencies
└── tsconfig.json     # TypeScript configuration
```