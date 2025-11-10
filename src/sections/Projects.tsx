import { motion } from "framer-motion";
import chatImg from "../assets/chat-bot-preview.png";
import rizziImg from "../assets/rizzi-preview.png";
import gasgoImg from "../assets/gasgo-preview.png";

const projects = [
  {
    title: "Chat de Mica 🤖",
    description:
      "Asistente virtual con IA desarrollado con JavaScript, HTML5 y CSS3. Soporta 5 idiomas, integra Groq API (Llama 3.1) y cuenta con modo claro/oscuro.",
    image: chatImg,
    link: "https://mica-zuzulich.github.io/chat-bot/",
    code: "https://github.com/mica-zuzulich/chat-bot",
  },
  {
    title: "Rizzi Inversiones 💼",
    description:
      "Sitio web moderno para empresa de inversión inmobiliaria. Incluye secciones dinámicas, contacto integrado y diseño responsive.",
    image: rizziImg ,
    link: "https://rizziinversiones.com/",
  },
  {
    title: "GasGo 🚚",
    description:
      "Aplicación móvil creada con React Native para gestión y reparto de gas. Permite registrar pedidos, asignar rutas y controlar entregas en tiempo real.",
    image: gasgoImg,
    link: "/gasgo",
  },
];


const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-white text-gray-800 py-20 px-6 md:px-20"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Mis <span className="text-pink-500">Proyectos</span>
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col justify-between h-48">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 font-medium hover:underline"
              >
                Ver proyecto →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
