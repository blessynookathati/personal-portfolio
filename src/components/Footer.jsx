import { FaGithub, FaLinkedin, FaCode, FaHeart } from 'react-icons/fa'
import { personalInfo } from '../data'

const Footer = () => {
  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 py-12 px-4 sm:px-6 lg:px-8 bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            {personalInfo.name} — Portfolio
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center justify-center sm:justify-start gap-1">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.codechef}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CodeChef Profile"
            className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
          >
            <FaCode className="w-4 h-4" />
          </a>
        </div>

        <p className="text-xs text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer