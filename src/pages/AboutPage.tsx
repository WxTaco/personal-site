import { motion } from 'framer-motion'
import { useState } from 'react'
import { Coffee, Music, Gamepad2, Code, Heart, Zap, Target, Users } from 'lucide-react'

const AboutPage = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const interests = [
    { icon: <Code className="w-6 h-6" />, title: 'Coding', description: 'Building tools that solve real problems' },
    { icon: <Music className="w-6 h-6" />, title: 'Music', description: 'Electronic, ambient, and lo-fi beats' },
    { icon: <Gamepad2 className="w-6 h-6" />, title: 'Gaming', description: 'Strategy games and indie titles' },
    { icon: <Coffee className="w-6 h-6" />, title: 'Coffee', description: 'Fuel for late-night coding sessions' }
  ]

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Community First',
      description: 'Building tools that bring people together and help communities thrive.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Matters',
      description: 'Creating fast, efficient, and scalable solutions that users love.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Purpose Driven',
      description: 'Every line of code should serve a purpose and solve a real problem.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'User Experience',
      description: 'Technology should be accessible, intuitive, and delightful to use.',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const stats = [
    { number: '10K+', label: 'Users Served', description: 'Across all projects' },
    { number: '99.4%', label: 'Uptime', description: 'Reliable service' },
    { number: '22+', label: 'Tools Built', description: 'Developer utilities' },
    { number: '3+', label: 'Years', description: 'Development experience' }
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h1>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hey! I'm Taco, a passionate full-stack developer who loves building tools 
                  that make a real difference. My journey started with curiosity about how 
                  Discord bots work, and it's evolved into creating platforms that serve 
                  thousands of users.
                </p>
                <p>
                  I believe in the power of technology to bring communities together. That's 
                  why I built Wrapped - not just as a Discord bot, but as a comprehensive 
                  analytics and automation platform that gives server owners complete control 
                  over their communities.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open source projects, or helping other developers learn and grow. I'm 
                  always excited to collaborate on projects that have a positive impact.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="card p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-2xl font-bold gradient-text mb-1">{stat.number}</div>
                        <div className="text-sm font-medium text-white mb-1">{stat.label}</div>
                        <div className="text-xs text-gray-400">{stat.description}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full floating"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-full floating-delayed"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-900/30">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Drives Me</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles and values that guide my work and decision-making.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="card group cursor-pointer overflow-hidden relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`p-4 bg-gradient-to-br ${value.color} bg-opacity-20 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Beyond Code</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              When I'm not building software, here's what keeps me inspired and motivated.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="card text-center group hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="p-4 bg-primary-500/20 rounded-lg w-fit mx-auto mb-4 group-hover:bg-primary-500/30 transition-colors">
                  {interest.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{interest.title}</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary-500/10 to-accent-500/10">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something Amazing</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always interested in new projects, collaborations, and opportunities to create 
              tools that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="mailto:taco@wrapped.site"
                className="btn-primary"
              >
                Get In Touch
              </a>
              <a
                href="https://github.com/WxTaco"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View My Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
