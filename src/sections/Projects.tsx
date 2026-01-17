import { motion } from "framer-motion";
import { FaReact, FaJs, FaNode, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiPhp, SiPostgresql, SiReact } from "react-icons/si";

import chatImg from "../assets/chat-bot-preview.png";
import rizziImg from "../assets/rizzi-preview.png";
import rizziSubirImg from "../assets/rizzi-pag.png";
import gasgoImg from "../assets/gasgo-preview.png";

const iconMap: any = {
  js: <FaJs size={22} className="text-yellow-400" />,
  html: <FaHtml5 size={22} className="text-orange-500" />,
  css: <FaCss3Alt size={22} className="text-blue-400" />,
  react: <FaReact size={22} className="text-cyan-300" />,
  rn: <SiReact size={22} className="text-cyan-300" />,
  php: <SiPhp size={22} className="text-indigo-300" />,
  node: <FaNode size={22} className="text-green-500" />,
  pg: <SiPostgresql size={22} className="text-blue-500" />,
  tailwind: <SiTailwindcss size={22} className="text-teal-300" />,
};

const projects = [
  {
    title: "Rizzi Inversiones 💼",
    description:
      "Sitio web moderno para empresa inmobiliaria, con secciones dinámicas y diseño responsive.",
    tech: ["react", "tailwind", "php"],
    image: rizziImg,
    link: "https://fusion-rizzi.vercel.app/",
    code: "https://github.com/mica-zuzulich/fusion-rizzi",
  },
  {
    title: "Rizzi - Segunda Página 🏢",
    description:
      "Segunda página para la misma empresa, con información complementaria y estilo coherente.",
    tech: ["html", "css", "php"],
    image: rizziSubirImg,
    link: "https://rizzi-subir.vercel.app/",
    code: "https://github.com/Mica-Zuzulich/rizzi-subir",
  },
  {
    title: "Chat de Mica 🤖",
    description:
      "Asistente virtual con IA desarrollado con JavaScript, HTML5 y CSS3. Soporta 5 idiomas, integra Groq API (Llama 3.1) y modo claro/oscuro.",
    tech: ["js", "html", "css"],
    image: chatImg,
    link: "https://mica-zuzulich.github.io/chat-bot/",
    code: "https://github.com/mica-zuzulich/chat-bot",
  },
  {
    title: "GasGo 🚚",
    description:
      "App móvil con React Native para gestionar pedidos, rutas y entregas en tiempo real.",
    tech: ["rn", "node", "pg"],
    image: gasgoImg,
    link: "/gasgo", 
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-50 py-20 px-6 md:px-20"
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

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/70 backdrop-blur-lg border border-white/30 rounded-xl overflow-hidden shadow-lg hover:shadow-pink-300/50 transition transform hover:-translate-y-2 hover:scale-[1.02]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            <div className="p-6 flex flex-col h-52 justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{project.description}</p>

                <div className="flex gap-2 mt-2">
                  {project.tech.map((t) => (
                    <span key={t}>{iconMap[t]}</span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  className="text-pink-500 font-medium hover:underline"
                >
                  Ver proyecto →
                </a>

                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    className="text-gray-700 hover:text-black transition"
                  >
                    <FaGithub size={22} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
