import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaCode, FaArrowRight, FaEnvelope } from 'react-icons/fa'
import { personalInfo } from '../data'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Decorative Ambient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 dark:bg-cyan-500/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center z-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{personalInfo.location}</span>
        </motion.div>

        {/* Hero Heading as a Framer Motion Component */}
        <motion.h1
          data-testid="hero-heading"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Subtitle / Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-200 mb-4 max-w-3xl mx-auto"
        >
          {personalInfo.role}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all"
          >
            Explore Projects
            <FaArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:-translate-y-0.5 transition-all"
          >
            <FaEnvelope className="w-3.5 h-3.5" />
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-5 text-slate-500 dark:text-slate-400"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110 transition-all border border-slate-200 dark:border-slate-700"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110 transition-all border border-slate-200 dark:border-slate-700"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.codechef}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CodeChef Profile"
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110 transition-all border border-slate-200 dark:border-slate-700"
          >
            <FaCode className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero