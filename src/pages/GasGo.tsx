import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GasGo = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-600 via-orange-500 to-yellow-400 text-white py-20 px-6 md:px-20">
      <motion.div
        className="max-w-5xl mx-auto flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
          GasGo 🚚
        </h1>

        <p className="text-lg max-w-3xl text-gray-100 mb-8 leading-relaxed">
          ✨ <span className="font-semibold text-white">¡Mi primera app en marcha!</span> ✨  
          <br />
          Hace meses que vengo trabajando en este proyecto, entre estudio y trabajo, y no siempre tuve tiempo de mostrar todo lo que fui creando.  
          <br />
          <br />
          <span className="font-semibold text-white">GasGo</span> es una aplicación móvil desarrollada con{" "}
          <span className="font-semibold">React Native</span>,{" "}
          <span className="font-semibold">Node.js</span> y{" "}
          <span className="font-semibold">PostgreSQL</span>.  
          Permite gestionar pedidos, asignar repartos y hacer seguimiento de entregas en tiempo real.  
          Ya está desplegada en <span className="font-semibold">Railway</span> 🚀
        </p>

        <div className="w-full max-w-3xl aspect-video mb-10 rounded-3xl overflow-hidden shadow-2xl border border-white/30">
          <iframe
            src="https://www.youtube.com/embed/W056Z-2rSp4"
            title="Demo GasGo App"
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["⚛️ React Native", "🗄️ PostgreSQL", "🔗 REST API / Express", "🚀 Deploy en Railway"].map((tech) => (
            <span
              key={tech}
              className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://www.youtube.com/shorts/W056Z-2rSp4"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            🎥 Ver demo
          </a>

          <Link
            to="/"
            className="bg-white/10 px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition"
          >
            ← Volver al portfolio
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default GasGo;
