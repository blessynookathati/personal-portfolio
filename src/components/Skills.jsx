const skills = {
  Languages: ['Python', 'Java', 'C++', 'JavaScript'],
  Frontend: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
  Backend: ['Node.js', 'REST APIs', 'Webhooks'],
  Tools: ['Git', 'GitHub', 'Docker'],
}

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary">
      <h2 className="section-title">Skills</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="glass p-6 rounded-2xl">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span key={skill} className="bg-cyan-500/20 px-4 py-2 rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills