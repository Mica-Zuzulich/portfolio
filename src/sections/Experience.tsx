import { motion } from "framer-motion";
import { FaUniversity, FaLaptopCode, FaShieldAlt, FaBriefcase } from "react-icons/fa";

const items = [
  {
    icon: <FaUniversity size={24} />,
    title: "Tecnicatura en Desarrollo de Aplicaciones",
    place: "Universidad Nacional del Centro (UNICEN)",
    date: "2023 - Actualidad",
  },
  {
    icon: <FaShieldAlt size={24} />,
    title: "Curso de Ciberseguridad",
    place: "UTN Facultad Regional Delta",
    date: "2025 - En curso",
  },
  {
    icon: <FaLaptopCode size={24} />,
    title: "Proyectos personales y prácticas",
    place: "Frontend • Backend • React • Node • PHP",
    date: "2023 - Actualidad",
  },
  {
    icon: <FaBriefcase size={24} />,
    title: "Experiencia laboral previa",
    place: "Administración, atención al cliente, gestión",
    date: "2014 - 2024",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-20 bg-gradient-to-r from-purple-50 to-pink-50 text-gray-800"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Mi <span className="text-pink-500">Trayectoria</span>
      </motion.h2>

      <div className="max-w-3xl mx-auto border-l-4 border-pink-300 pl-6 space-y-10">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Punto del timeline */}
            <div className="absolute -left-7 bg-pink-500 w-4 h-4 rounded-full border-4 border-white shadow-md" />

            <div className="flex items-start gap-4">
              <div className="text-pink-500">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.place}</p>
                <p className="text-sm text-pink-500 font-medium mt-1">
                  {item.date}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
