"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ChampionDetail from "@/components/ChampionDetail";

interface Champion {
  name: string;
  blurb: string;
  image: string;
}

export default function ChampionPage() {
  const { id } = useParams();
  const [champion, setChampion] = useState<Champion | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/champions")
      .then((res) => res.json())
      .then((data) => setChampion(data[id as string]))
      .catch((error) => console.error("Erro ao buscar campeão:", error));
  }, [id]);

  if (!champion) return <p className="text-center text-white">Carregando...</p>;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background relative">
      {/* Adicionando um efeito de sobreposição escura */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <ChampionDetail
        name={champion.name}
        blurb={champion.blurb}
        image={champion.image}
      />
    </main>
  );
}
