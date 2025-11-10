function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">Micaela</h1>
        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="#about" className="hover:text-indigo-600">Sobre mí</a>
          <a href="#projects" className="hover:text-indigo-600">Proyectos</a>
          <a href="#contact" className="hover:text-indigo-600">Contacto</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
