const projects = [
  {
    title: "Atlético 27 F.C.",
    description: "Sitio web para club de fútbol con match center, countdown, plantel de jugadores y resultados.",
    tags: ["React", "Vite", "CSS"],
    link: "https://a27-pi.vercel.app/"
  },
  {
    title: "Diseño BIM",
    description: "Modelado y coordinación de proyectos industriales usando Revit y Navisworks.",
    tags: ["Revit", "Navisworks", "BIM"],
    link: "#"
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Mis <span className="text-yellow-400">Proyectos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-950 rounded-2xl p-6 hover:border border-yellow-400 transition">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-gray-800 text-yellow-400 px-3 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" className="text-yellow-400 text-sm hover:underline">
                Ver proyecto →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects