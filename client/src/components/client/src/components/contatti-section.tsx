export default function ContattiSection() {
  return (
    <section id="contatti" className="py-20 relative section-fade">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-secondary/30 to-transparent"></div>
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
              <span className="text-neon-blue">CONTATTI</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--deep-red)] mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Rimani connesso con il progetto Eidolon Genesis
            </p>
          </div>
          
          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Email Card */}
            <div className="bg-dark-secondary/80 backdrop-blur-sm p-8 rounded-xl border border-neon-blue/30 hover:border-neon-blue hover:shadow-2xl hover:shadow-neon-blue/20 transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-envelope text-3xl text-neon-blue"></i>
              </div>
              <h3 className="font-orbitron font-bold text-xl text-neon-blue mb-4">Email Ufficiale</h3>
              <p className="text-gray-300 mb-6">
                Per collaborazioni, domande sul progetto o richieste media
              </p>
              <a 
                href="mailto:official.team.eidolon.genesis@gmail.com" 
                className="inline-block bg-neon-blue text-dark-bg px-6 py-3 rounded-lg font-semibold hover:bg-neon-blue/80 transition-all duration-300 transform hover:scale-105"
              >
                official.team.eidolon.genesis@gmail.com
              </a>
            </div>
            
            {/* Instagram Card */}
            <div className="bg-dark-secondary/80 backdrop-blur-sm p-8 rounded-xl border border-deep-red/30 hover:border-deep-red hover:shadow-2xl hover:shadow-deep-red/20 transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fab fa-instagram text-3xl text-white"></i>
              </div>
              <h3 className="font-orbitron font-bold text-xl text-deep-red mb-4">Seguici su Instagram</h3>
              <p className="text-gray-300 mb-6">
                Seguici per altri aggiornamenti sul progetto
              </p>
              <a 
                href="https://www.instagram.com/eidolon_genesis_project__?igsh=dnRmdWplcjV6NWg2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                @eidolon_genesis_project__
              </a>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-dark-secondary/30 backdrop-blur-sm p-8 rounded-xl border border-dark-tertiary">
              <h4 className="font-orbitron font-bold text-lg text-white mb-4">Resta Aggiornato</h4>
              <p className="text-gray-400 leading-relaxed">
                Il progetto Eidolon Genesis è in continua evoluzione. 
                Seguici sui nostri canali social per non perdere nessun aggiornamento su concept art, 
                trailer, e annunci importanti. La tua community è fondamentale per il successo del progetto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
