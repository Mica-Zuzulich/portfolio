import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Inicio", href: "#hero" },
    { name: "Sobre mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md shadow-md z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold tracking-wider">
          Mica<span className="text-pink-400">Dev</span>
        </h1>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-pink-300 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa (mobile) */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú mobile desplegable */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/10 backdrop-blur-lg text-center py-4 space-y-3 text-lg"
        >
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block hover:text-pink-300 transition"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
