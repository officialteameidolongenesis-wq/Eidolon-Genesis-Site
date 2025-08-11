export default function AlberiSection() {
  return (
    <section id="alberi" className="py-20 relative section-fade">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-secondary/30 to-transparent"></div>
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
              <span className="text-neon-blue">ALBERI</span> 
              <span className="text-emerald-500"> DI NIRN</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--neon-blue)] to-emerald-500 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Colossali guardiani vegetali che canalizzano l'energia para-dimensionale
            </p>
          </div>
          
          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual Representation */}
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500/20 via-neon-blue/10 to-purple-500/20 p-12 rounded-xl backdrop-blur-sm border border-emerald-500/30">
                <div className="text-center space-y-8">
                  {/* Tree Visualization */}
                  <div className="relative mx-auto w-64 h-64">
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/30 to-transparent rounded-full animate-pulse"></div>
                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-4 bg-gradient-to-t from-amber-600 to-emerald-500 h-32 rounded-full"></div>
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-emerald-400 to-neon-blue rounded-full opacity-60 animate-float"></div>
                    <div className="absolute top-12 left-1/3 w-24 h-24 bg-gradient-to-br from-emerald-500 to-purple-500 rounded-full opacity-40 animate-pulse"></div>
                    <div 
                      className="absolute top-16 right-1/3 w-20 h-20 bg-gradient-to-br from-neon-blue to-emerald-400 rounded-full opacity-50 animate-float" 
                      style={{ animationDelay: '2s' }}
                    ></div>
                  </div>
                  
                  {/* Energy Indicators */}
                  <div className="flex justify-center space-x-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-emerald-500/30 rounded-full flex items-center justify-center mb-2">
                        <i className="fas fa-bolt text-emerald-500"></i>
                      </div>
                      <p className="text-xs text-gray-400">Para-Energia</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-neon-blue/30 rounded-full flex items-center justify-center mb-2">
                        <i className="fas fa-sync-alt text-neon-blue"></i>
                      </div>
                      <p className="text-xs text-gray-400">Risonanza</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-500/30 rounded-full flex items-center justify-center mb-2">
                        <i className="fas fa-eye text-purple-500"></i>
                      </div>
                      <p className="text-xs text-gray-400">Coscienza</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Description Content */}
            <div className="space-y-6">
              <div className="bg-dark-secondary/50 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300">
                <h3 className="font-orbitron font-bold text-2xl text-emerald-500 mb-4">Proprietà Para-Energetiche</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Gli Alberi di Nirn sono organismi colossali che possono raggiungere altezze di diversi chilometri. 
                  Le loro radici si estendono attraverso multiple dimensioni, assorbendo energia da realtà parallele.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Ogni albero funge da <span className="text-neon-blue font-semibold">stabilizzatore dimensionale</span>, 
                  mantenendo l'equilibrio energetico in un raggio di centinaia di chilometri.
                </p>
              </div>
              
              <div className="bg-dark-secondary/50 backdrop-blur-sm p-8 rounded-xl border border-neon-blue/30 hover:border-neon-blue/50 transition-all duration-300">
                <h3 className="font-orbitron font-bold text-2xl text-neon-blue mb-4">Importanza Culturale</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Considerati sacri da tutte le fazioni, gli Alberi sono luoghi di pellegrinaggio e meditazione. 
                  I Nexus Guardians credono che possiedano una forma di coscienza collettiva antica.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  La loro linfa cristallizzata è utilizzata per potenziare gli Eidolon e stabilizzare i nodi energetici.
                </p>
              </div>
              
              <div className="bg-dark-secondary/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="font-orbitron font-bold text-2xl text-purple-500 mb-4">Leggende e Misteri</h3>
                <p className="text-gray-300 leading-relaxed">
                  Le leggende narrano che gli Alberi di Nirn esistevano già prima del Cataclisma, 
                  forse come guardiani piantati da una civiltà perduta per prevenire exactly quello che è accaduto. 
                  Alcuni sussurrano che siano l'ultima difesa contro un'apocalisse ancora più devastante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
