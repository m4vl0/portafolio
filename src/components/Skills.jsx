const skills = [
  { category: "Diseño Industrial", items: ["AutoCAD", "Revit", "Navisworks", "Diseño 3D", "BIM"] },
  { category: "Programación", items: ["HTML", "CSS", "JavaScript", "React", "Git"] },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Mis <span className="text-yellow-400">Habilidades</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((group) => (
            <div key={group.category} className="bg-gray-900 rounded-2xl p-6">
              <h3 className="text-yellow-400 font-semibold text-lg mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills