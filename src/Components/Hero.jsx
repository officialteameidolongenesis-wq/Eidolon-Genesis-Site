// src/Components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center"
      <section
  id="hero"
  className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center"
  style={{
    backgroundImage: "url('https://raw.githubusercontent.com/<officialteameidolongenesis-wq>/<Eidolon-Genesis-Site>/main/Eidolongenesislogo.png')"
  }}
    >
      {/* Overlay scuro */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Contenuto */}
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
          Benvenuti in <span className="text-indigo-400">Eidolon Genesis</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-6">
          Un mondo post-Cataclisma, tra sopravvivenza, mistero e potere.  
          Scopri gli Eidolon e le leggende che hanno plasmato il destino dell’umanità.
        </p>
        <a
          href="#eidolon"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-full font-semibold text-white transition"
        >
          Esplora Ora
        </a>
      </div>
    </section>
  );
};

export default Hero;
