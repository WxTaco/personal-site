# Contributor Guidelines - Taco's Personal Website

This document provides detailed guidelines for contributors to my personal portfolio website. While this is primarily a personal project, I welcome contributions that enhance the codebase quality, performance, and user experience.

## 🎯 Project Vision

This personal website serves as a professional portfolio showcasing my work, skills, and experience as a full-stack developer. The goal is to create a **memorable, accessible, and performant** web experience that effectively represents my professional brand.

## 🏗️ Architecture Overview

### Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom component classes
- **Animations**: Framer Motion for smooth, professional interactions
- **Icons**: Lucide React for consistent iconography
- **Routing**: React Router for client-side navigation

### Design Principles

1. **Performance First**: Every feature should load quickly and run smoothly
2. **Accessibility**: WCAG 2.1 AA compliance is mandatory
3. **Mobile Responsive**: Mobile-first design approach
4. **Professional Aesthetic**: Clean, modern, and impressive design
5. **Type Safety**: Comprehensive TypeScript coverage

## 📐 Component Architecture

### Component Hierarchy

```
App
├── Layout Components (Navbar, Footer)
├── Page Components (HomePage, AboutPage, SkillsPage, etc.)
├── Feature Components (HeroSection, ProjectCard, SkillCategory, etc.)
└── UI Components (Button, Card, Modal, etc.)
```

### Component Guidelines

#### 1. Component Structure

```typescript
// ComponentName.tsx
import { motion } from 'framer-motion'
import { ComponentProps } from './ComponentName.types'

export const ComponentName = ({ 
  title, 
  description, 
  className = '',
  ...props 
}: ComponentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`component-name ${className}`}
      {...props}
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}
```

#### 2. Props Interface

```typescript
// ComponentName.types.ts
export interface ComponentProps {
  // Content props
  title: string
  description: string
  
  // Optional styling
  className?: string
  variant?: 'default' | 'featured'
  
  // Event handlers
  onClick?: () => void
  
  // Children and HTML attributes
  children?: React.ReactNode
}
```

#### 3. Animation Patterns

```typescript
// Common animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.2 }
}
```

## 🎨 Styling Guidelines

### Tailwind CSS Best Practices

#### 1. Component Classes

```css
/* src/index.css */
@layer components {
  .btn-primary {
    @apply bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/25 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-950;
  }
  
  .card {
    @apply bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-200;
  }
  
  .gradient-text {
    @apply bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent;
  }
}
```

#### 2. Responsive Design Patterns

```typescript
// Mobile-first responsive grid
<div className="
  grid grid-cols-1 gap-4
  md:grid-cols-2 md:gap-6
  lg:grid-cols-3 lg:gap-8
  xl:grid-cols-4
">
  {items.map(item => <ItemCard key={item.id} {...item} />)}
</div>

// Responsive typography
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
  Responsive Heading
</h1>
```

#### 3. Custom Animations

```css
/* Custom keyframe animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.floating {
  animation: float 6s ease-in-out infinite;
}

.gradient-shift {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}
```

## 🎭 Animation Guidelines

### Framer Motion Best Practices

#### 1. Performance Optimization

```typescript
// ✅ Good - Use transform properties
const slideIn = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
}

// ✅ Good - Viewport optimization
<motion.div
  variants={slideIn}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true, margin: "-100px" }}
>
  Content
</motion.div>

// ❌ Avoid - Layout-triggering properties
const badAnimation = {
  initial: { width: 0, height: 0 },
  animate: { width: 300, height: 200 }
}
```

#### 2. Staggered Animations

```typescript
const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

<motion.div variants={containerVariants} initial="initial" animate="animate">
  {items.map((item, index) => (
    <motion.div key={index} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

#### 3. Accessibility Considerations

```typescript
// Respect user preferences
const respectMotionPreference = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 0.6 
  }
}
```

## 📱 Page Development

### Page Structure Template

```typescript
// PageName.tsx
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const PageName = () => {
  return (
    <>
      <Helmet>
        <title>Page Title - Taco</title>
        <meta name="description" content="Page description for SEO" />
      </Helmet>
      
      <div className="pt-16">
        {/* Header Section */}
        <section className="section-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Page <span className="gradient-text">Title</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Page description
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Content Sections */}
        {/* ... */}
      </div>
    </>
  )
}

export default PageName
```

### SEO Optimization

```typescript
// SEO component for consistent meta tags
interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
}

export const SEO = ({ title, description, image, url }: SEOProps) => (
  <Helmet>
    <title>{title} - Taco</title>
    <meta name="description" content={description} />
    
    {/* Open Graph */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image || '/og-image.png'} />
    <meta property="og:url" content={url || window.location.href} />
    
    {/* Twitter */}
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image || '/og-image.png'} />
  </Helmet>
)
```

## 🔧 Feature Development

### Adding New Sections

1. **Create component** in appropriate directory
2. **Add animations** with Framer Motion
3. **Ensure responsiveness** across all breakpoints
4. **Test accessibility** with keyboard navigation
5. **Optimize performance** with lazy loading if needed

### Interactive Elements

```typescript
// Interactive skill progress bar
const SkillBar = ({ name, level, delay = 0 }: SkillBarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-primary-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: delay + 0.3 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  )
}
```

## 📊 Performance Guidelines

### Code Splitting

```typescript
// Lazy load pages for better performance
import { lazy, Suspense } from 'react'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
  </div>
)

// App component with Suspense
<Suspense fallback={<PageLoader />}>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/projects" element={<ProjectsPage />} />
  </Routes>
</Suspense>
```

### Image Optimization

```typescript
// Optimized image component
interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '' 
}: OptimizedImageProps) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    loading="lazy"
    decoding="async"
    className={`transition-opacity duration-300 ${className}`}
    onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
    onError={(e) => e.currentTarget.classList.add('opacity-50')}
  />
)
```

## ♿ Accessibility Guidelines

### Keyboard Navigation

```typescript
// Accessible interactive elements
const AccessibleButton = ({ children, onClick, ...props }: ButtonProps) => (
  <button
    onClick={onClick}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        onClick()
      }
    }}
    className="focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-950"
    {...props}
  >
    {children}
  </button>
)
```

### ARIA Labels

```typescript
// Proper ARIA labeling
<nav aria-label="Main navigation">
  <ul role="list">
    {navItems.map((item) => (
      <li key={item.href} role="listitem">
        <Link
          to={item.href}
          aria-current={isActive(item.href) ? 'page' : undefined}
          className="nav-link"
        >
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
</nav>
```

## 🚀 Deployment Guidelines

### Build Optimization

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          router: ['react-router-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  }
})
```

### Environment Configuration

```typescript
// Environment-specific settings
const config = {
  development: {
    baseUrl: 'http://localhost:5173',
    analytics: false
  },
  production: {
    baseUrl: 'https://taco.wrapped.site',
    analytics: true
  }
}

export const getConfig = () => {
  return config[import.meta.env.MODE as keyof typeof config] || config.development
}
```

## 📚 Documentation Standards

### Component Documentation

```typescript
/**
 * ProjectCard component displays project information with interactive hover effects
 * 
 * @example
 * ```tsx
 * <ProjectCard
 *   title="My Project"
 *   description="Project description"
 *   technologies={['React', 'TypeScript']}
 *   links={{ website: 'https://example.com', github: 'https://github.com/...' }}
 * />
 * ```
 */
export const ProjectCard = ({ title, description, technologies, links }: ProjectCardProps) => {
  // Implementation
}
```

### README Updates

When making significant changes:

1. Update feature descriptions
2. Add new screenshots if UI changed
3. Update installation instructions if needed
4. Document any new environment variables

## 🎉 Recognition

Contributors who make meaningful improvements will be:

- Acknowledged in the project README
- Credited in commit messages
- Mentioned in any project showcases
- Invited to provide feedback on future updates

Thank you for helping make this personal website even better! 🚀
