const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950/90 backdrop-blur-sm z-50 px-6 py-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <span className="text-yellow-400 font-bold text-xl">Pablo</span>
        <ul className="flex gap-6 text-gray-400">
          <li><a href="#skills" className="hover:text-yellow-400 transition">Habilidades</a></li>
          <li><a href="#projects" className="hover:text-yellow-400 transition">Proyectos</a></li>
          <li><a href="#contact" className="hover:text-yellow-400 transition">Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar