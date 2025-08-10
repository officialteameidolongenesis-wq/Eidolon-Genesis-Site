import React from "react";
import bgHero from "../Eidolongenesislogo.png"; // importa l'immagine dalla root

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold">Eidolon Genesis</h1>
        <p className="mt-4 text-lg md:text-2xl">Benvenuto nel mondo post-Cataclisma</p>
      </div>
    </section>
  );
}
