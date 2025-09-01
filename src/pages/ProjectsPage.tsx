import { motion } from 'framer-motion'
import { Github, ExternalLink, Users, BarChart3, Wrench, Globe } from 'lucide-react'

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  stats: { label: string; value: string }[]
  links: {
    website: string
    github?: string
  }
  icon: React.ReactNode
  featured: boolean
}

const ProjectsPage = () => {
  const projects: Project[] = [
    {
      title: 'Wrapped',
      description: 'Discord analytics and automation platform serving 10,000+ users with comprehensive community insights, smart automation, and developer tools.',
      image: '/wrapped-preview.png',
      technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Discord.js', 'Docker'],
      stats: [
        { label: 'Users', value: '10K+' },
        { label: 'Uptime', value: '99.4%' },
        { label: 'Messages/Day', value: '10K+' }
      ],
      links: {
        website: 'https://wrapped.site'
      },
      icon: <BarChart3 className="w-6 h-6" />,
      featured: true
    },
    {
      title: 'Developer Tools Suite',
      description: 'Collection of 22+ web-based developer tools including JSON debugger, color palette generator, markdown editor, and more.',
      image: '/tools-preview.png',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      stats: [
        { label: 'Tools', value: '22+' },
        { label: 'Users', value: '1K+' },
        { label: 'Performance', value: '100%' }
      ],
      links: {
        website: 'https://wrapped.site/tools',
        github: 'https://github.com/WxTaco/main-website'
      },
      icon: <Wrench className="w-6 h-6" />,
      featured: false
    },
    {
      title: 'Personal Portfolio',
      description: 'Modern, responsive personal website built with React and Framer Motion, showcasing projects and skills.',
      image: '/portfolio-preview.png',
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      stats: [
        { label: 'Performance', value: '100%' },
        { label: 'Accessibility', value: '100%' },
        { label: 'SEO', value: '100%' }
      ],
      links: {
        website: 'https://taco.dev',
        github: 'https://github.com/WxTaco/personal-website'
      },
      icon: <Globe className="w-6 h-6" />,
      featured: false
    }
  ]

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
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A collection of projects I've built, from Discord bots serving thousands 
              of users to developer tools that make coding more efficient.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card ${project.featured ? 'border-primary-500/50 bg-primary-500/5' : ''}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className={project.featured ? 'lg:order-1' : index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-primary-500/20 rounded-lg">
                        {project.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      {project.featured && (
                        <span className="px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {project.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                          <div className="text-lg font-bold gradient-text">{stat.value}</div>
                          <div className="text-xs text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex space-x-4">
                      <a
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center space-x-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Visit Site</span>
                      </a>
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary inline-flex items-center space-x-2"
                        >
                          <Github className="w-4 h-4" />
                          <span>View Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className={project.featured ? 'lg:order-2' : index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="relative">
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 border border-gray-700">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            {project.icon}
                          </div>
                          <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                          <p className="text-gray-400 text-sm">
                            {project.featured ? 'Production Ready' : 'Live Project'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold mb-4">Interested in collaborating?</h3>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new projects and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="https://github.com/WxTaco"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Github className="w-5 h-5" />
                <span>Follow on GitHub</span>
              </a>
              <a
                href="https://discord.com/users/905201724539666503"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <Users className="w-5 h-5" />
                <span>Connect on Discord</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage
