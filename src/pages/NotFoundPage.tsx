import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* 404 Animation */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="text-8xl md:text-9xl font-bold gradient-text mb-4">404</div>
            <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-300 mb-8 max-w-md mx-auto"
          >
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link to="/" className="btn-primary inline-flex items-center space-x-2">
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </motion.div>

          {/* Floating elements */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full floating"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-full floating-delayed"></div>
          <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-full floating"></div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFoundPage
