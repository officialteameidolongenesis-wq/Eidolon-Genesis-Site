// src/components/App.jsx
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import EidolonSection from "./EidolonSection";

const App = () => {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <EidolonSection />
      </main>
    </div>
  );
};

export default App;
