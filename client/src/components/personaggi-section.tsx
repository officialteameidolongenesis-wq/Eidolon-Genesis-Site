export default function PersonaggiSection() {
  const characters = [
    {
      name: "Kamiya Kazushiro",
      role: "Protagonista",
      icon: "fas fa-user-circle",
      color: "neon-blue",
      description: "Silenzioso, acuto, dietro lo sguardo assente si nasconde una mente in allerta e un cuore che lotta per non spezzarsi. Il suo Eidolon inizia a manifestarsi… ma non come potere: come riflesso di ciò che lo divora dentro.",
      eidolon: "In futuro?",
      trait: "segnato dal trauma ma non si scoraggia"
    },
    {
      name: "Ema Kazushiro",
      role: "Sorella maggiore",
      icon: "fas fa-female",
      color: "purple-500",
      description: "Sorella maggiore di Kamiya. Dolce ma logorata, è la bussola emotiva di Kamiya. Non possiede un Eidolon, ma sente qualcosa che la chiama nel silenzio.",
      eidolon: "non ne ha uno",
      trait: "tiene alla sopravvivenza della famiglia"
    },
    {
      name: "Mika Kazushiro",
      role: "Madre",
      icon: "fas fa-leaf",
      color: "emerald-500",
      description:" Madre scomparsa. Figura centrale e misteriosa nel destino della famiglia Kazushiro. Il suo nome echeggia nei ricordi frantumati dei figli.",
      eidolon: "Non si sa",
      trait: "Scomparsa"
    },
    {
      name: "Vista Kazushiro",
      role: "Padre",
      icon: "fas fa-user-tie",
      color: "deep-red",
      description: "Ex tecnico militare, padre di famiglia,studioso degli Eidolon. Potrebbe nascondere dei segreti all'interno del suo passato",
      eidolon: "non lo ha",
      trait: "Determinato con un senso di responsabilità incolmabile"
    }
  ];

  return (
    <section id="personaggi" className="py-20 relative section-fade">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
              <span className="text-deep-red">I</span> 
              <span className="text-neon-blue"> PERSONAGGI</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--deep-red)] to-[var(--neon-blue)] mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto"> 
           </p>
          </div>
          
          {/* Characters Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {characters.map((character) => (
              <div 
                key={character.name}
                className={`bg-gradient-to-br from-${character.color}/10 to-transparent p-8 rounded-xl border border-${character.color}/30 hover:border-${character.color} hover:shadow-2xl hover:shadow-${character.color}/20 transition-all duration-300`}
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-20 h-20 bg-${character.color}/20 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <i className={`${character.icon} text-3xl text-${character.color}`}></i>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className={`font-orbitron font-bold text-2xl text-${character.color}`}>
                        {character.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{character.role}</p>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {character.description}
                    </p>
                    <div className="space-y-2 text-sm text-gray-400">
                      <p>
                        <i className={`fas fa-star text-${character.color} mr-2`}></i>
                        Eidolon: {character.eidolon}
                      </p>
                      <p>
                        <i className="fas fa-heart text-deep-red mr-2"></i>
                        Trait: {character.trait}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
