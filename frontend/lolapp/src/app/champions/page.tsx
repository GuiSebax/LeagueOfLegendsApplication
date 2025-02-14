"use client";

import { useEffect, useState } from "react";
import ChampionCard from "@/components/ChampionCard";
import ChampionModal from "@/components/ChampionModal";
import { AnimatePresence, motion } from "framer-motion";

interface Champion {
  name: string;
  image: string;
  blurb: string;
}

export default function ChampionsPage() {
  const [champions, setChampions] = useState<{ [key: string]: Champion }>({});
  const [selectedChampion, setSelectedChampion] = useState<Champion | null>(
    null
  );

  useEffect(() => {
    fetch("http://localhost:8080/api/champions")
      .then((res) => res.json())
      .then((data) => setChampions(data))
      .catch((error) => console.error("Erro ao buscar campeões:", error));
  }, []);

  return (
    <main className="min-h-screen bg-background text-white p-10">
      <motion.h1
        className="text-4xl font-bold text-center text-gold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Campeões de League of Legends
      </motion.h1>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        {Object.keys(champions).map((key, index) => (
          <ChampionCard
            key={key}
            name={champions[key].name}
            image={champions[key].image}
            onClick={() => setSelectedChampion(champions[key])}
            index={index}
          />
        ))}
      </motion.div>

      {/* Modal de campeão (aparece quando um campeão é clicado) */}
      <AnimatePresence>
        {selectedChampion && (
          <ChampionModal
            name={selectedChampion.name}
            blurb={selectedChampion.blurb}
            image={selectedChampion.image}
            onClose={() => setSelectedChampion(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
