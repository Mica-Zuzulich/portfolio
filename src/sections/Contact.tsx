import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("micaela.designs.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-20"
    >
      {/* Texto */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          ¡Hablemos! 💬
        </h2>

        <p className="text-lg mb-6 text-gray-100">
          ¿Tenés un proyecto, idea o querés colaborar?  
          ¡Estoy lista para crear algo increíble con vos! 🚀
        </p>

        <div className="flex flex-col gap-4 text-lg mt-6">

          {/* Botón de copiar mail */}
          <button
            onClick={handleCopy}
            className="flex items-center justify-center md:justify-start gap-3 hover:text-pink-200 transition"
          >
            <FiMail size={22} />
            micaela.designs.dev@gmail.com
            {copied && (
              <span className="text-sm text-pink-200 ml-1">✔ Copiado</span>
            )}
          </button>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/micaela-zuzulich-88851b275/"
            target="_blank"
            className="flex items-center justify-center md:justify-start gap-3 hover:text-pink-200 transition"
          >
            <FaLinkedin size={22} />
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Mica-Zuzulich"
            target="_blank"
            className="flex items-center justify-center md:justify-start gap-3 hover:text-pink-200 transition"
          >
            <FaGithub size={22} />
            GitHub
          </a>
        </div>
      </motion.div>

      {/* Formulario */}
      <motion.form
        action="https://formspree.io/f/mdkyndqn"
        method="POST"
        className="md:w-1/2 bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-lg flex flex-col gap-4 w-full max-w-md border border-white/20 shadow-pink-400/30"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          className="p-3 rounded-md bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          className="p-3 rounded-md bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
          required
        />
        <textarea
          name="message"
          placeholder="Tu mensaje..."
          rows={4}
          className="p-3 rounded-md bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
          required
        />

        <motion.button
          type="submit"
          className="bg-white text-gray-900 font-semibold py-3 rounded-md hover:bg-gray-100 transition shadow-lg shadow-pink-300/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enviar mensaje ✉️
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
