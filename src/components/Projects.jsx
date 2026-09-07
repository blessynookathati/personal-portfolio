import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa'
import { projectsData } from '../data'

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-wider text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20"
        >
          Featured Work
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-3"
        >
          Selected Projects
        </motion.h2>
        <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A showcase of full-stack systems, interactive tools, and developer platforms engineered for performance and reliability.
        </p>
      </div>

      {/* Projects Grid with data-testid="project-grid" */}
      <div
        data-testid="project-grid"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            data-testid="project-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="flex flex-col justify-between p-7 rounded-2xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:shadow-xl hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm group"
          >
            <div>
              {/* Card Top Bar */}
              <div className="flex items-center justify-between mb-5">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400">
                  <FaFolder className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    {project.badge}
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                    className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo for ${project.title}`}
                    className="text-slate-500 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-700/50">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects