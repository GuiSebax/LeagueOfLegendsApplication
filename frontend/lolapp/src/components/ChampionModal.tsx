import React from "react";
import { motion } from "framer-motion";

interface ChampionModalProps {
  name: string;
  blurb: string;
  image: string;
  onClose: () => void;
}

const ChampionModal: React.FC<ChampionModalProps> = ({
  name,
  blurb,
  image,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md z-50">
      <motion.div
        className="relative bg-secondary p-6 rounded-lg shadow-2xl flex flex-col md:flex-row items-center max-w-4xl w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        {/* Botão de fechar */}
        <button
          className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gold transition"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Imagem do campeão */}
        <img
          src={image}
          alt={name}
          className="w-full md:w-[500px] h-auto rounded-lg shadow-lg object-cover"
        />

        {/* Informações do campeão */}
        <div className="p-6 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gold">{name}</h2>
          <p className="text-textSecondary text-lg mt-4 leading-relaxed">
            {blurb}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ChampionModal;
