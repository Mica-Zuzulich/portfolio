import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("micaela.designs.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // vuelve al estado normal
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-20"
    >
      {/* Bloque de texto */}
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
          Estoy abierta a colaborar en proyectos creativos, desarrollo web o diseño UI/UX.  
          Si tenés una idea, ¡contame y vemos cómo hacerla realidad! 🚀
        </p>

        <div className="flex flex-col gap-3 text-lg">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 hover:text-pink-200 transition"
          >
            📧 micaela.designs.dev@gmail.com
            {copied && <span className="text-sm text-pink-200">✔ Copiado</span>}
          </button>

          <a
            href="https://www.linkedin.com/in/micaela-zuzulich-88851b275/"
            target="_blank"
            className="hover:underline hover:text-pink-200 transition"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/Mica-Zuzulich"
            target="_blank"
            className="hover:underline hover:text-pink-200 transition"
          >
            💻 GitHub
          </a>
        </div>
      </motion.div>

      {/* Formulario conectado a Formspree */}
      <motion.form
        action="https://formspree.io/f/mdkyndqn"
        method="POST"
        className="md:w-1/2 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg flex flex-col gap-4 w-full max-w-md"
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
          className="bg-white text-gray-900 font-semibold py-3 rounded-md hover:bg-gray-100 transition"
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
