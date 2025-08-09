import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import EidolonSection from "./EidolonSection";
import Characters from "./Characters";
import Factions from "./Factions";
import World from "./World";
import AlberiSection from "./AlberiSection";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <EidolonSection />
        <Characters />
        <Factions />
        <World />
        <AlberiSection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
