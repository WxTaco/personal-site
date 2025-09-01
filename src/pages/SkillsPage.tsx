import { motion } from 'framer-motion'
import { useState } from 'react'
import { Code, Database, Server, Palette, Zap, Shield, Globe, Smartphone } from 'lucide-react'

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: <Palette className="w-6 h-6" />,
      color: 'from-pink-500 to-purple-500',
      skills: [
        { name: 'React', level: 95, description: 'Advanced component architecture, hooks, context' },
        { name: 'TypeScript', level: 90, description: 'Type-safe development, advanced patterns' },
        { name: 'Tailwind CSS', level: 85, description: 'Responsive design, custom components' },
        { name: 'Framer Motion', level: 80, description: 'Complex animations, gesture handling' },
        { name: 'Next.js', level: 75, description: 'SSR, SSG, API routes, optimization' },
        { name: 'Vite', level: 85, description: 'Build optimization, plugin development' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Node.js', level: 90, description: 'Express, Fastify, microservices' },
        { name: 'Discord.js', level: 95, description: 'Bot development, slash commands, interactions' },
        { name: 'REST APIs', level: 85, description: 'RESTful design, authentication, rate limiting' },
        { name: 'WebSockets', level: 80, description: 'Real-time communication, Socket.io' },
        { name: 'Microservices', level: 75, description: 'Service architecture, communication patterns' },
        { name: 'API Design', level: 85, description: 'OpenAPI, versioning, documentation' }
      ]
    },
    database: {
      title: 'Database & Storage',
      icon: <Database className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'PostgreSQL', level: 85, description: 'Complex queries, optimization, indexing' },
        { name: 'Redis', level: 80, description: 'Caching, sessions, pub/sub patterns' },
        { name: 'Drizzle ORM', level: 75, description: 'Type-safe database operations' },
        { name: 'Database Design', level: 80, description: 'Normalization, relationships, performance' },
        { name: 'Data Migration', level: 75, description: 'Schema evolution, data transformation' },
        { name: 'Query Optimization', level: 70, description: 'Performance tuning, indexing strategies' }
      ]
    },
    devops: {
      title: 'DevOps & Tools',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Docker', level: 80, description: 'Containerization, multi-stage builds' },
        { name: 'Git', level: 90, description: 'Advanced workflows, branching strategies' },
        { name: 'Linux', level: 75, description: 'Server administration, shell scripting' },
        { name: 'CI/CD', level: 70, description: 'GitHub Actions, automated deployment' },
        { name: 'Monitoring', level: 65, description: 'Application monitoring, logging' },
        { name: 'Security', level: 75, description: 'Authentication, authorization, best practices' }
      ]
    }
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Skills & <span className="gradient-text">Expertise</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and experience across 
              the full development stack.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg transform scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category.icon}
                <span>{category.title}</span>
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                  <span className="text-sm font-medium text-primary-400">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-gray-800 rounded-full h-3 mb-3 overflow-hidden">
                  <motion.div
                    className={`h-3 rounded-full bg-gradient-to-r ${skillCategories[activeCategory as keyof typeof skillCategories].color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  />
                </div>
                
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Experience Timeline</h2>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
              
              <div className="space-y-12">
                {[
                  {
                    year: '2024',
                    title: 'Wrapped Platform',
                    description: 'Built comprehensive Discord analytics platform serving 10,000+ users',
                    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL']
                  },
                  {
                    year: '2023',
                    title: 'Developer Tools Suite',
                    description: 'Created collection of 22+ web-based developer utilities',
                    tech: ['React', 'Vite', 'Tailwind CSS']
                  },
                  {
                    year: '2022',
                    title: 'Discord Bot Development',
                    description: 'Started building Discord bots and learning backend development',
                    tech: ['Discord.js', 'Node.js', 'JavaScript']
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div className="card">
                        <div className="text-primary-400 font-bold text-lg mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-300 mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.tech.map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-gray-800 rounded text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-4 border-gray-950"></div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SkillsPage
