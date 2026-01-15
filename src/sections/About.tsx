import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaJsSquare,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiPostgresql, SiExpress } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 bg-gray-50 text-gray-800 py-20"
    >
      {/* Imagen o avatar */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-pink-300"
      >
        <img
          src="https://avatars.githubusercontent.com/u/9919?v=4"
          alt="Micaela"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Texto */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-xl text-center md:text-left"
      >
        <h2 className="text-4xl font-bold mb-4">
          Sobre <span className="text-pink-500">mí</span>
        </h2>

        <p className="text-lg leading-relaxed text-gray-600">
          Soy <strong>Micaela</strong>, una desarrolladora full stack apasionada
          por crear aplicaciones que combinan diseño atractivo y lógica sólida.
          Me encanta trabajar tanto en el{" "}
          <span className="font-medium text-pink-500">frontend</span> como en el{" "}
          <span className="font-medium text-pink-500">backend</span>, y disfruto
          del proceso completo de convertir ideas en realidad.
        </p>

        <p className="mt-4 text-lg text-gray-600">
          Trabajo con tecnologías modernas como{" "}
          <strong>React, Vite y Tailwind CSS</strong> en la parte visual, y{" "}
          <strong>Node.js, PHP, Express y PostgreSQL/MySQL</strong> para la
          lógica del servidor y las bases de datos.
        </p>

        <p className="mt-4 text-lg text-gray-600">
          Cuando no estoy programando, me gusta diseñar, aprender cosas nuevas y
          tomar café mientras imagino mi próximo proyecto ☕✨
        </p>

        {/* SKILLS GRID */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-pink-500">
            Tecnologías que uso
          </h3>

          <div className="grid grid-cols-4 sm:grid-cols-6 gap-6 text-4xl text-gray-700">
            <FaHtml5 className="hover:text-pink-500 transition-transform hover:scale-110" />
            <FaCss3Alt className="hover:text-pink-500 transition-transform hover:scale-110" />
            <FaJsSquare className="hover:text-pink-500 transition-transform hover:scale-110" />
            <FaReact className="hover:text-pink-500 transition-transform hover:scale-110" />
            <SiTailwindcss className="hover:text-pink-500 transition-transform hover:scale-110" />
            <FaPhp className="hover:text-pink-500 transition-transform hover:scale-110" />
            <FaNodeJs className="hover:text-pink-500 transition-transform hover:scale-110" />
            <SiExpress className="hover:text-pink-500 transition-transform hover:scale-110" />
            <SiPostgresql className="hover:text-pink-500 transition-transform hover:scale-110" />
            <SiMysql className="hover:text-pink-500 transition-transform hover:scale-110" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
