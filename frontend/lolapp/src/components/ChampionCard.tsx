import React from "react";
import { motion } from "framer-motion";

interface ChampionCardProps {
  name: string;
  image: string;
  onClick: () => void;
  index: number; // Adicionamos um índice para o delay progressivo
}

const ChampionCard: React.FC<ChampionCardProps> = ({
  name,
  image,
  onClick,
  index,
}) => {
  return (
    <motion.div
      className="relative cursor-pointer transition-transform transform hover:scale-105"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-auto rounded-lg shadow-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
        <h2 className="text-white text-xl font-bold">{name}</h2>
      </div>
    </motion.div>
  );
};

export default ChampionCard;
