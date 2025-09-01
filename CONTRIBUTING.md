# Contributing to Taco's Personal Website

Thank you for your interest in contributing to my personal website! While this is primarily a personal portfolio, I welcome contributions that improve the codebase, fix bugs, or enhance the user experience.

## 🤝 Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment:

- **Be respectful**: Treat all contributors with kindness and respect
- **Be constructive**: Provide helpful feedback and suggestions
- **Be patient**: Everyone has different experience levels
- **Be collaborative**: Work together to improve the project

## 🚀 Getting Started

### Prerequisites

Before contributing, ensure you have:

- [Node.js](https://nodejs.org/) 18+ or [Bun](https://bun.sh/) (recommended)
- [Git](https://git-scm.com/) for version control
- A code editor (VS Code recommended)
- Basic knowledge of React, TypeScript, and Tailwind CSS

### Development Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/personal-website.git
   cd personal-website
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   bun run dev
   # or
   npm run dev
   ```

4. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Types of Contributions

### 🐛 Bug Reports

When reporting bugs, please include:

- **Clear description** of the issue
- **Steps to reproduce** the problem
- **Expected vs actual behavior**
- **Screenshots** if applicable
- **Browser and device** information
- **Console errors** if any

### ✨ Feature Suggestions

For new features, please provide:

- **Clear description** of the proposed feature
- **Use case** and motivation
- **Mockups or examples** if applicable
- **Implementation suggestions** (optional)

Note: Since this is a personal website, feature requests should align with the portfolio's purpose and aesthetic.

### 🔧 Code Contributions

We accept contributions for:

- **Bug fixes**
- **Performance improvements**
- **Accessibility enhancements**
- **Code quality improvements**
- **Documentation updates**
- **Animation and UX improvements**

## 🛠️ Development Guidelines

### Code Style

#### TypeScript
- Use **strict mode** TypeScript
- Prefer **interfaces** over types for object shapes
- Use **explicit return types** for functions
- Avoid **any** types

```typescript
// ✅ Good
interface ProjectProps {
  title: string
  description: string
  technologies: string[]
}

const ProjectCard = ({ title, description, technologies }: ProjectProps): JSX.Element => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

// ❌ Avoid
const ProjectCard = (props: any): any => {
  return <div>{props.title}</div>
}
```

#### React Components
- Use **functional components** with hooks
- Prefer **named exports** over default exports
- Use **TypeScript interfaces** for props
- Keep components **focused and reusable**

```typescript
// ✅ Good
interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary',
  disabled = false 
}: ButtonProps) => {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`btn-${variant} ${disabled ? 'opacity-50' : ''}`}
    >
      {children}
    </button>
  )
}
```

#### Styling with Tailwind CSS
- Use **utility classes** for styling
- Create **component classes** for reusable patterns
- Follow **mobile-first** responsive design
- Use **semantic color names**

```css
/* ✅ Good - Component class */
.btn-primary {
  @apply bg-primary-500 hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary-500;
}

/* ✅ Good - Responsive utilities */
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
```

### Animation Guidelines

#### Framer Motion Best Practices

```typescript
// ✅ Good - Reusable animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// ✅ Good - Performance-conscious animations
<motion.div
  variants={fadeInUp}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
>
  Content
</motion.div>
```

#### Performance Considerations
- Use `transform` properties for animations
- Implement `will-change` sparingly
- Support `prefers-reduced-motion`
- Optimize for 60fps

### File Organization

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks (if needed)
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
└── styles/             # Global styles and animations
```

### Naming Conventions

- **Components**: PascalCase (`ProjectCard.tsx`)
- **Files**: camelCase (`animationUtils.ts`)
- **Variables**: camelCase (`projectData`)
- **Constants**: UPPER_SNAKE_CASE (`ANIMATION_DURATION`)
- **CSS Classes**: kebab-case (`project-card`)

## 🧪 Testing

### Manual Testing Checklist

Before submitting a PR, please test:

- [ ] **Responsive design** on different screen sizes
- [ ] **Keyboard navigation** works properly
- [ ] **Animations** are smooth and performant
- [ ] **Links** work correctly
- [ ] **Forms** submit properly (if applicable)
- [ ] **Accessibility** with screen reader
- [ ] **Performance** with Lighthouse

### Browser Testing

Test on:
- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 📋 Pull Request Process

### Before Submitting

1. **Test thoroughly** on multiple devices
2. **Run linting** and fix any issues
3. **Check accessibility** compliance
4. **Optimize performance** if needed
5. **Update documentation** if necessary

### PR Guidelines

1. **Create descriptive title**
   - ✅ `feat: add smooth scroll animation to navigation`
   - ❌ `update stuff`

2. **Write clear description**
   - What changes were made
   - Why the changes were necessary
   - How to test the changes
   - Screenshots/GIFs if visual changes

3. **Link related issues**
   - Use `Fixes #123` or `Closes #123`

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Performance improvement
- [ ] Accessibility enhancement
- [ ] Documentation update

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested keyboard navigation
- [ ] Checked accessibility
- [ ] Verified performance

## Screenshots
(If applicable - before/after images)

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] No console errors
- [ ] Responsive design verified
```

## 🎨 Design Guidelines

### Visual Principles

- **Minimalism**: Clean, uncluttered design
- **Consistency**: Uniform spacing, colors, and typography
- **Accessibility**: High contrast and readable fonts
- **Performance**: Optimized images and animations
- **Mobile-first**: Responsive design approach

### Color Palette

- **Primary**: Blue tones (#0ea5e9, #0284c7)
- **Accent**: Purple/pink tones (#d946ef, #c026d3)
- **Neutral**: Gray scale for backgrounds and text
- **Success**: Green for positive actions
- **Warning**: Yellow for cautions
- **Error**: Red for errors

### Typography

- **Font Family**: Inter (system fallback)
- **Headings**: Bold weights (600-800)
- **Body Text**: Regular weight (400)
- **Code**: Monospace font

## 🚀 Deployment

The website is automatically deployed when changes are merged to the main branch. No manual deployment steps are required.

## 📞 Getting Help

If you need help:

1. **Check existing issues** and documentation
2. **Create an issue** for bugs or questions
3. **Reach out directly** via email or Discord

## 🏆 Recognition

Contributors will be:

- **Acknowledged** in the project README
- **Mentioned** in release notes (if applicable)
- **Credited** for significant contributions

## 📄 License

By contributing, you agree that your contributions will be licensed under the same MIT License that covers the project.

Thank you for helping improve this personal website! 🎉
