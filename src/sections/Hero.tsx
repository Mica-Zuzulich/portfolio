import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4"
    >
      {/* Título animado */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hola, soy <span className="text-pink-300">Micaela Zuzulich</span> 💫
      </motion.h1>

      {/* Subtítulo animado */}
      <motion.p
        className="text-lg md:text-2xl text-gray-100 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Frontend Developer • Diseñadora UI/UX • Apasionada por crear experiencias hermosas y funcionales.
      </motion.p>

      {/* Botón animado */}
      <motion.button
        onClick={() =>
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
        }
        className="mt-8 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Ver mis proyectos 🚀
      </motion.button>
    </section>
  );
};

export default Hero;
