import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Model3D from './components/Model3D'

function App() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Model3D />
    </main>
  )
}

export default App