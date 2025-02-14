import React from "react";

interface ChampionDetailProps {
  name: string;
  blurb: string;
  image: string;
}

const ChampionDetail: React.FC<ChampionDetailProps> = ({
  name,
  blurb,
  image,
}) => {
  return (
    <div className="flex flex-col items-center p-10">
      <img
        src={image}
        alt={name}
        className="w-full md:w-[600px] h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
      />
      <h1 className="text-4xl font-bold text-gold mt-6">{name}</h1>
      <p className="text-textSecondary text-lg text-center mt-4 max-w-2xl">
        {blurb}
      </p>
    </div>
  );
};

export default ChampionDetail;
