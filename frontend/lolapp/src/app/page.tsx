"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-textPrimary px-6 text-center">
      {/* Animação do título */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-gold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Bem-vindo ao League of Legends Champions
      </motion.h1>

      {/* Animação do subtítulo */}
      <motion.p
        className="mt-4 text-textSecondary text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Explore os campeões e suas histórias!
      </motion.p>

      {/* Botão animado */}
      <motion.a
        href="/champions"
        className="mt-8 px-8 py-4 bg-gold border text-background font-bold text-lg rounded-full shadow-lg transition-transform transform hover:scale-110  focus:ring-4 focus:ring-gold"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Explorar Campeões
      </motion.a>
    </main>
  );
}
