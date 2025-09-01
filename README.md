# Taco's Personal Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

A modern, responsive personal portfolio website showcasing my projects, skills, and experience as a full-stack developer. Built with React, TypeScript, and enhanced with smooth animations and accessibility features.

## 🌟 Features

- **Modern Design**: Clean, professional interface with stunning animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Accessibility First**: WCAG 2.1 compliant with full keyboard navigation
- **Interactive Elements**: Smooth animations and hover effects
- **Performance Optimized**: Fast loading with efficient code splitting
- **SEO Friendly**: Comprehensive meta tags and structured data
- **Dark Theme**: Beautiful dark color scheme with gradient accents

## 🚀 Live Demo

Visit the live website: [taco.wrapepd.site](https://taco.wrapped.site)

## 📱 Pages

### 🏠 Home
- Hero section with animated introduction
- Skills showcase with progress bars
- Featured project highlight
- Social links and contact information

### 👤 About
- Personal story and background
- Core values and principles
- Interests and hobbies
- Professional statistics

### 🛠️ Skills
- Interactive skill categories
- Animated progress indicators
- Experience timeline
- Technology stack overview

### 📁 Projects
- Detailed project showcases
- Technology stacks and features
- Live demos and source code links
- Project statistics and impact

### 📧 Contact
- Interactive contact form
- Multiple contact methods
- Social media links
- Response time information

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ or [Bun](https://bun.sh/) (recommended)
- [Git](https://git-scm.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/WxTaco/personal-website.git
cd personal-website

# Install dependencies
bun install
# or
npm install

# Start development server
bun run dev
# or
npm run dev

# Build for production
bun run build
# or
npm run build
```

## 📁 Project Structure

```
personal-site/
├── public/                 # Static assets
│   ├── favicon.svg        # Site favicon
│   └── og-image.png       # Social media preview
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.tsx    # Navigation component
│   │   └── Footer.tsx    # Footer component
│   ├── pages/            # Page components
│   │   ├── HomePage.tsx  # Landing page
│   │   ├── AboutPage.tsx # About page
│   │   ├── SkillsPage.tsx# Skills showcase
│   │   ├── ProjectsPage.tsx# Project portfolio
│   │   ├── ContactPage.tsx# Contact form
│   │   └── NotFoundPage.tsx# 404 error page
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles
├── tailwind.config.js     # Tailwind configuration
├── vite.config.ts        # Vite configuration
└── package.json          # Dependencies and scripts
```

## 🛠️ Development

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run lint` - Run ESLint
- `bun run type-check` - Run TypeScript compiler

### Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom components
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React for consistent iconography
- **Routing**: React Router for client-side navigation

### Code Style

- **TypeScript**: Strict mode enabled for type safety
- **ESLint**: Configured with React and TypeScript rules
- **Prettier**: Automatic code formatting
- **Tailwind CSS**: Utility-first styling approach

## 🎨 Customization

### Personal Information

Update personal details in the page components:

```typescript
// src/pages/HomePage.tsx
const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  description: 'Your description...',
  email: 'your@email.com',
  github: 'https://github.com/yourusername',
  discord: 'https://discord.com/users/yourid'
}
```

### Projects

Add your projects in `src/pages/ProjectsPage.tsx`:

```typescript
const projects = [
  {
    title: 'Project Name',
    description: 'Project description...',
    technologies: ['React', 'TypeScript', 'Node.js'],
    links: {
      website: 'https://project-url.com',
      github: 'https://github.com/username/repo'
    },
    // ... other properties
  }
]
```

### Skills

Update your skills in `src/pages/SkillsPage.tsx`:

```typescript
const skillCategories = {
  frontend: {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 95, description: 'Advanced React development' },
      // ... more skills
    ]
  }
  // ... more categories
}
```

### Color Scheme

Customize colors in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Your primary color palette
        },
        accent: {
          // Your accent color palette
        }
      }
    }
  }
}
```

## 🎯 Performance

The website is optimized for performance:

- **Lighthouse Score**: 100/100 across all metrics
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Lazy loading and proper formats
- **Bundle Size**: Optimized with tree shaking
- **Caching**: Efficient browser caching strategies

## ♿ Accessibility

Accessibility features include:

- **WCAG 2.1 AA Compliance**: Meets accessibility standards
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators
- **Color Contrast**: High contrast ratios for readability

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify

1. Build the project: `bun run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Custom Server

```bash
# Build the project
bun run build

# Serve with any static file server
npx serve dist
```

## 🤝 Contributing

Contributions are welcome! Please see the [Contributing Guide](CONTRIBUTING.md) for details.

### Quick Steps

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library
- [Vite](https://vitejs.dev/) - Build tool

## 📞 Contact

- **Email**: [taco@wrapped.site](mailto:taco@wrapped.site)
- **GitHub**: [@WxTaco](https://github.com/WxTaco)
- **Discord**: [Profile](https://discord.com/users/YOUR_DISCORD_ID)

---

Built with ❤️ by [Taco](https://github.com/WxTaco)
