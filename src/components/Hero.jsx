import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          Hi, I'm <span className="text-cyan-400">Blessy Nookathati</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          Full-Stack Developer | Competitive Programmer | React Specialist
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="bg-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-600">
            View My Work
          </a>
          <a href="/resume.pdf" download className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-500">
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero