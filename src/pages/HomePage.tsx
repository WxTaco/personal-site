import { motion } from 'framer-motion'
import { Github, MessageCircle, ExternalLink, Code, Zap, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const skills = [
    { name: 'TypeScript', level: 95 },
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Discord.js', level: 95 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'Docker', level: 75 },
  ]

  const highlights = [
    {
      icon: <Users className="w-6 h-6" />,
      title: '10K+ Users',
      description: 'Serving thousands of users across my projects'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Full Stack',
      description: 'Frontend to backend, databases to deployment'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance',
      description: 'Building fast, scalable, and reliable applications'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Hey, I'm <span className="gradient-text gradient-shift">Taco</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Full-stack developer and creator of <strong>Wrapped</strong> - a Discord analytics 
                and automation platform serving 10,000+ users. I build tools that help communities 
                thrive and developers work more efficiently.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <a
                  href="https://github.com/WxTaco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <Github className="w-5 h-5" />
                  <span>View GitHub</span>
                </a>
                <a
                  href="https://discord.com/users/YOUR_DISCORD_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Discord Profile</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="p-3 bg-primary-500/20 rounded-lg w-fit mx-auto mb-2">
                      {highlight.icon}
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{highlight.title}</h3>
                    <p className="text-xs text-gray-400">{highlight.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="card">
                <h3 className="text-xl font-semibold mb-6">Skills & Technologies</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="section-padding bg-gray-900/30">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Project</h2>
            <p className="text-xl text-gray-300">My latest and most impactful work</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="card max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">Wrapped</h3>
                <p className="text-gray-300 mb-6">
                  A comprehensive Discord analytics and automation platform that gives server owners 
                  complete control over their communities. Features include detailed analytics, 
                  smart automation, moderation tools, and a growing suite of developer utilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Discord.js', 'Docker'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://wrapped.site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Visit Site</span>
                  </a>
                  <Link to="/projects" className="btn-secondary">
                    View All Projects
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg p-8 text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">10K+</div>
                  <div className="text-gray-300">Active Users</div>
                  <div className="mt-4 text-2xl font-bold gradient-text">99.4%</div>
                  <div className="text-gray-300">Uptime</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
