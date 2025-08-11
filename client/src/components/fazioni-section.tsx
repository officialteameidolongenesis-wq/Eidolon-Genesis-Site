export default function FazioniSection() {
  const factions = [
    {
      name: "Arca Imperiale",
      icon: "fas fa-crown",
      color: "neon-blue",
      description: [
        "L'ordine antico che cerca di restaurare la stabilità pre-Cataclisma attraverso il controllo tecnologico.",
        "Credono che solo una gerarchia rigida possa contenere il caos energetico.",
        "Possiedono le tecnologie più avanzate per la manipolazione dei nodi.",
        "La loro capitale fluttuante domina i cieli settentrionali."
      ]
    },
    {
      name: "I Crepitanti",
      icon: "fas fa-fire",
      color: "deep-red",
      description: [
        "Fanatici che abbracciano il caos del Cataclisma come evoluzione naturale dell'umanità.",
        "Modificano i propri corpi per sincronizzarsi con i fenomeni instabili.",
        "Considerano gli Eidolon come doni divini da una dimensione superiore.",
        "Le loro città sotterranee pulsano con energia dimensionale grezza."
      ]
    },
    {
      name: "Umbral Synthesis",
      icon: "fas fa-dna",
      color: "purple-500",
      description: [
        "Scienziati e ricercatori che studiano la fusione tra dimensioni organiche e digitali.",
        "Sviluppano interfacce neurali per comunicare con entità extra-dimensionali.",
        "I loro laboratori esistono simultaneamente in multiple realtà.",
        "Credono nell'evoluzione guidata attraverso la sintesi trans-dimensionale."
      ]
    },
    {
      name: "Void Corsairs",
      icon: "fas fa-ship",
      color: "cyan-400",
      description: [
        "Nomadi dimensionali che navigano tra le fratture spazio-temporali.",
        "Commerciano risorse e conoscenze attraverso portali instabili.",
        "Le loro flotte fantasma appaiono e scompaiono senza preavviso.",
        "Mantengono una rigida neutralità tra le fazioni territoriali."
      ]
    },
    {
      name: "Nexus Guardians",
      icon: "fas fa-shield-alt",
      color: "emerald-500",
      description: [
        "Protettori mistici che sorvegliano i nodi energetici più critici.",
        "Tramandano antichi rituali per stabilizzare le fratture dimensionali.",
        "Comunicano attraverso legami psichici con gli Alberi di Nirn.",
        "La loro origine precede il Cataclisma di millenni."
      ]
    }
  ];

  return (
    <section id="fazioni" className="py-20 relative section-fade">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-secondary/30 to-transparent"></div>
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
              <span className="text-neon-blue">LE</span> 
              <span className="text-deep-red"> FAZIONI</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--deep-red)] mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Cinque fazioni dominano il mondo post-Cataclisma, ognuna con la propria visione del futuro
            </p>
          </div>
          
          {/* Factions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {factions.map((faction, index) => (
              <div 
                key={faction.name}
                className={`bg-dark-secondary/80 backdrop-blur-sm p-8 rounded-xl border border-${faction.color}/30 hover:border-${faction.color} hover:shadow-2xl hover:shadow-${faction.color}/20 transition-all duration-300 group ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto bg-${faction.color}/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-${faction.color}/30 transition-all duration-300`}>
                    <i className={`${faction.icon} text-2xl text-${faction.color}`}></i>
                  </div>
                  <h3 className={`font-orbitron font-bold text-xl text-${faction.color}`}>
                    {faction.name}
                  </h3>
                </div>
                <div className="space-y-3 text-sm text-gray-300">
                  {faction.description.map((desc, i) => (
                    <p key={i}>{desc}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
