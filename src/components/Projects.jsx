const projects = [
  {
    title: 'Real-Time Collaborative Whiteboard',
    desc: 'Multi-user collaborative drawing platform using React, Canvas API, and Socket.io.',
    tech: 'React, Node.js, Socket.io',
    github: '#',
  },
  {
    title: 'Payment Gateway System',
    desc: 'Production-ready payment system with webhooks and async processing.',
    tech: 'Python, REST APIs',
    github: '#',
  },
  {
    title: 'Product Filtering App',
    desc: 'Advanced filtering UI with performance optimization and accessibility.',
    tech: 'React, Tailwind',
    github: '#',
  },
]
const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="section-title">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="glass p-6 rounded-2xl hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-3">{project.desc}</p>
            <p className="text-cyan-400 mb-4">{project.tech}</p>
            <a href={project.github} className="text-white bg-cyan-500 px-4 py-2 rounded-lg">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects