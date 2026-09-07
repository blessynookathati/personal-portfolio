import { motion } from 'framer-motion'
import { skillsData } from '../data'

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-wider text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20"
        >
          Technical Proficiencies
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-3"
        >
          Skills & Expertise
        </motion.h2>
        <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A toolkit honed through production engineering, algorithmic problem solving, and modern full-stack development.
        </p>
      </div>

      {/* Skills Container with data-testid="skills-list" */}
      <div
        data-testid="skills-list"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            data-testid="skill-item"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="p-6 rounded-2xl border transition-all duration-300 bg-white/70 dark:bg-slate-800/70 border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:shadow-md hover:border-cyan-500/50 dark:hover:border-cyan-400/50 backdrop-blur-sm group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300">
                {skill.category}
              </span>
              <span className="text-xs font-medium text-cyan-600 dark:text-cyan-400">
                {skill.level}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
              {skill.name}
            </h3>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills