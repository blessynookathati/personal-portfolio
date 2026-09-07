import { motion } from 'framer-motion'
import { FaGraduationCap, FaLaptopCode, FaTrophy, FaLightbulb } from 'react-icons/fa'
import { personalInfo } from '../data'

const About = () => {
  const stats = [
    { label: 'Coding Problems Solved', value: '1377+', icon: FaTrophy, desc: 'CodeChef & LeetCode' },
    { label: 'Production Projects', value: '6+', icon: FaLaptopCode, desc: 'Full-stack & Frontend' },
    { label: 'CS Focus', value: 'B.Tech CSE', icon: FaGraduationCap, desc: 'Algorithms & Architecture' },
    { label: 'Continuous Learning', value: '100%', icon: FaLightbulb, desc: 'Modern Web & AI' },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-wider text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20"
        >
          Background & Journey
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-3"
        >
          About Me
        </motion.h2>
        <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Passionate about building intuitive software products and solving complex computational challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Bio Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg"
        >
          <p>
            Hello! I'm <strong className="text-slate-900 dark:text-white">{personalInfo.name}</strong>, a Computer Science undergraduate and enthusiastic full-stack developer based in India.
          </p>
          <p>
            My journey bridges robust algorithmic problem-solving with dynamic, pixel-perfect frontend engineering. I specialize in building reactive user interfaces using <span className="text-cyan-500 font-semibold">React.js</span>, <span className="text-cyan-500 font-semibold">Tailwind CSS</span>, and <span className="text-cyan-500 font-semibold">Framer Motion</span>, paired with dependable backend APIs using Node.js and Python.
          </p>
          <p>
            With over 1,300+ problems solved across competitive programming platforms, I bring disciplined algorithmic optimization and data structure proficiency to every application I engineer.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 shadow-sm backdrop-blur-sm"
              >
                <div className="p-2.5 w-fit rounded-xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl font-black text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {stat.desc}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About