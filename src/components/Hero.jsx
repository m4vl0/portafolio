const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Hola, soy <span className="text-yellow-400">Pablo</span>
        </h1>
        <p className="text-xl text-gray-400 mb-2">
          Diseñador Industrial & Desarrollador Web
        </p>
        <p className="text-gray-500 max-w-lg mx-auto mb-8">
          Combino el diseño 3D y la ingeniería con el desarrollo web. 
          AutoCAD · Revit · Navisworks · React
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
            Ver proyectos
          </a>
          <a href="#contact" className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition">
            Contacto
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero