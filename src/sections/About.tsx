import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 bg-gray-50 text-gray-800"
    >
      {/* Imagen o avatar */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-pink-300"
      >
        <img
          src="https://avatars.githubusercontent.com/u/9919?v=4"
          alt="Micaela"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Texto descriptivo */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-lg text-center md:text-left"
      >
        <h2 className="text-4xl font-bold mb-4">
          Sobre <span className="text-pink-500">mí</span>
        </h2>

        <p className="text-lg leading-relaxed text-gray-600">
          Soy <strong>Micaela</strong>, una desarrolladora full stack apasionada
          por construir aplicaciones que combinan un diseño atractivo con una
          lógica sólida y funcional. Me encanta trabajar tanto en el{" "}
          <span className="font-medium text-pink-500">frontend</span> como en el{" "}
          <span className="font-medium text-pink-500">backend</span>, y disfruto
          el proceso completo de crear algo desde cero.
        </p>

        <p className="mt-4 text-lg text-gray-600">
          Trabajo con tecnologías modernas como{" "}
          <strong>React, Vite y Tailwind</strong> para el lado visual, y{" "}
          <strong>Node.js, PHP, Express y PostgreSQL</strong> para la parte del
          servidor y bases de datos. Cada proyecto me enseña algo nuevo, y eso
          es lo que más me motiva a seguir aprendiendo 🚀
        </p>

        <p className="mt-4 text-lg text-gray-600">
          Cuando no estoy programando, disfruto de diseñar, aprender cosas nuevas
          y tomar café mientras pienso en mi próximo proyecto ☕✨
        </p>
      </motion.div>
    </section>
  );
};

export default About;
