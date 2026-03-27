const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 pt-20">
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-yellow-400 text-lg mb-4 tracking-widest uppercase">Hola, soy</p>
        <h1 className="text-7xl md:text-9xl font-black text-white leading-none mb-6">
          Pablo
        </h1>
        <p className="text-2xl md:text-3xl text-gray-400 font-light mb-8">
          Diseñador Industrial <span className="text-white">&</span> Desarrollador Web
        </p>
        <p className="text-gray-500 max-w-xl text-lg mb-10">
          Combino el mundo del diseño 3D industrial con el desarrollo web. 
          Desde modelos BIM hasta aplicaciones React.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition">
            Ver proyectos
          </a>
          <a href="#contact" className="border border-gray-700 text-gray-400 px-8 py-4 rounded-full font-bold text-lg hover:border-yellow-400 hover:text-yellow-400 transition">
            Contacto
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero