import studioLogo from "@assets/Eidomalogo.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-dark-secondary/80 backdrop-blur-sm border-t border-dark-tertiary py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-dark-bg rounded-lg flex items-center justify-center">
                  <img src={studioLogo} alt="Studio Logo" className="w-6 h-6" />
                </div>
                <span className="font-orbitron font-bold text-xl text-neon-blue">Eidolon Genesis</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Un progetto dark fantasy sci-fi che esplora le fratture dell'anima 
                in un mondo post-apocalittico ricco di mistero e meraviglia.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h5 className="font-orbitron font-bold text-white mb-4">Link Rapidi</h5>
              <div className="space-y-2 text-sm">
                <button 
                  onClick={() => scrollToSection('storia')}
                  className="block text-gray-400 hover:text-neon-blue transition-colors duration-300 text-left"
                >
                  Storia
                </button>
                <button 
                  onClick={() => scrollToSection('fazioni')}
                  className="block text-gray-400 hover:text-neon-blue transition-colors duration-300 text-left"
                >
                  Fazioni
                </button>
                <button 
                  onClick={() => scrollToSection('personaggi')}
                  className="block text-gray-400 hover:text-neon-blue transition-colors duration-300 text-left"
                >
                  Personaggi
                </button>
                <button 
                  onClick={() => scrollToSection('alberi')}
                  className="block text-gray-400 hover:text-neon-blue transition-colors duration-300 text-left"
                >
                  Alberi di Nirn
                </button>
              </div>
            </div>
            
            {/* Social & Contact */}
            <div>
              <h5 className="font-orbitron font-bold text-white mb-4">Contattaci</h5>
              <div className="space-y-3 text-sm">
                <a 
                  href="mailto:official.team.eidolon.genesis@gmail.com" 
                  className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors duration-300"
                >
                  <i className="fas fa-envelope"></i>
                  <span>Email Ufficiale</span>
                </a>
                <a 
                  href="https://www.instagram.com/eidolon_genesis_project__?igsh=dnRmdWplcjV6NWg2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-deep-red transition-colors duration-300"
                >
                  <i className="fab fa-instagram"></i>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-dark-tertiary mt-8 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              &copy; 2025 Eidolon Genesis Project. Tutti i diritti riservati. 
              Un progetto originale indipendente.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
