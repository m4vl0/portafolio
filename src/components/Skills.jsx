const skills = [
  { name: "AutoCAD", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Autodesk_AutoCAD_logo.svg" },
{ name: "Revit", icon: "https://upload.wikimedia.org/wikipedia/commons/8/85/Revit-logo.svg" },
{ name: "Navisworks", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Navisworks_2024_lockup_OL_no_year_stacked.svg/250px-Navisworks_2024_lockup_OL_no_year_stacked.svg.png" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-black mb-12">
          Tech <span className="text-yellow-400">Stack</span>
        </h2>

        <div className="grid grid-cols-4 md:grid-cols-9 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-2 group">
              <div className="bg-gray-900 p-4 rounded-2xl group-hover:bg-gray-800 transition flex items-center justify-center w-16 h-16">
                {skill.icon 
                  ? <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                  : <span className="text-3xl">{skill.emoji}</span>
                }
              </div>
              <span className="text-gray-500 text-xs text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills