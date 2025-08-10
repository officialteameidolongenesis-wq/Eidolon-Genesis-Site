// src/Components/EidolonSection.jsx
import React from "react";

const EidolonSection = () => {
  return (
    <section
      id="eidolon"
      className="py-20 px-6 bg-gray-900 text-gray-100 text-center"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Gli <span className="text-indigo-400">Eidolon</span>
      </h2>
      <p className="max-w-3xl mx-auto text-lg md:text-xl mb-10 text-gray-300">
        Gli Eidolon non sono magie né semplici poteri:  
        sono <span className="text-indigo-300">Fratture Animiche Catalizzate</span>,  
        entità legate a traumi profondi che lasciano un’impronta indelebile  
        sulla realtà stessa. Visti come benedizioni, maledizioni o malattie,  
        la loro presenza altera chi li ospita e il mondo circostante.
      </p>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/50 transition">
          <h3 className="text-xl font-semibold mb-3 text-indigo-300">Origine</h3>
          <p className="text-gray-400">
            Nati dal collasso del Nirn dopo il Cataclisma,  
            gli Eidolon si manifestano quando dolore e volontà  
            raggiungono una risonanza estrema.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/50 transition">
          <h3 className="text-xl font-semibold mb-3 text-indigo-300">Effetti</h3>
          <p className="text-gray-400">
            Possono alterare la percezione, mutare il corpo,  
            o generare fenomeni instabili, ma sempre a un prezzo.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/50 transition">
          <h3 className="text-xl font-semibold mb-3 text-indigo-300">Leggende</h3>
          <p className="text-gray-400">
            Alcune culture li venerano come spiriti guida,  
            altre li temono come presagi di rovina.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EidolonSection;
