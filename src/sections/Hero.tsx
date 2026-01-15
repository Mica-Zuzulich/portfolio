import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPhp,
} from "react-icons/fa";
import { SiMysql, SiTailwindcss } from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center 
      bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 relative"
    >
      {/* Glow suave atrás del texto */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>

      {/* Contenido principal */}
      <div className="relative z-10 mt-10">
        {/* Título */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hola, soy{" "}
          <span className="text-pink-300">Micaela Zuzulich</span> 💫
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="text-lg md:text-2xl text-gray-100 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Frontend Developer • Diseñadora UI/UX • Apasionada por crear experiencias hermosas y funcionales.
        </motion.p>

        {/* ÍCONOS DEL STACK */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-10 text-5xl text-white/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <FaHtml5 className="hover:scale-110 transition" />
          <FaCss3Alt className="hover:scale-110 transition" />
          <FaJsSquare className="hover:scale-110 transition" />
          <FaReact className="hover:scale-110 transition" />
          <FaPhp className="hover:scale-110 transition" />
          <SiMysql className="hover:scale-110 transition" />
          <SiTailwindcss className="hover:scale-110 transition" />
        </motion.div>

        {/* BOTONES */}
        <motion.div
          className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold 
            hover:bg-gray-100 transition shadow-md"
          >
            Ver mis proyectos 🚀
          </button>

          {/* Botón de CV */}
          <a
            href="/Micaela_Zuzulich_CV.pdf"
            download
            className="px-6 py-3 border-2 border-white rounded-full font-semibold 
            hover:bg-white/20 transition shadow-md"
          >
            Descargar CV 📄
          </a>
        </motion.div>

        {/* Indicador de scroll hacia abajo */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-3xl opacity-80"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
