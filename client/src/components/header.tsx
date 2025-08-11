import { useState } from "react";
import studioLogo from "@assets/Eidolongenesislogo-v2.png";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-dark-bg/90 backdrop-blur-md border-b border-dark-tertiary z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Studio Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-dark-secondary rounded-lg flex items-center justify-center scanline-effect">
              <img 
                src={studioLogo} 
                alt="Studio Logo" 
                className="w-8 h-8 hover:animate-glitch transition-all duration-300"
              />
            </div>
            <span className="font-orbitron font-bold text-xl text-neon-blue">Studio</span>
          </div>
          
          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="hover:text-neon-blue transition-colors duration-300 border-b-2 border-transparent hover:border-neon-blue pb-1"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('storia')}
              className="hover:text-neon-blue transition-colors duration-300 border-b-2 border-transparent hover:border-neon-blue pb-1"
            >
              Storia
            </button>
            <button 
              onClick={() => scrollToSection('fazioni')}
              className="hover:text-neon-blue transition-colors duration-300 border-b-2 border-transparent hover:border-neon-blue pb-1"
            >
              Fazioni
            </button>
            <button 
              onClick={() => scrollToSection('personaggi')}
              className="hover:text-neon-blue transition-colors duration-300 border-b-2 border-transparent hover:border-neon-blue pb-1"
            >
              Personaggi
            </button>
            <button 
              onClick={() => scrollToSection('alberi')}
              className="hover:text-neon-blue transition-colors duration-300 border-b-2 border-transparent hover:border-neon-blue pb-1"
            >
              Alberi di Nirn
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="hover:text-neon-blue transition-colors duration-300 border-b-2 border-transparent hover:border-neon-blue pb-1"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contatti')}
              className="hover:text-neon-blue transition-colors duration-300 border-b-2 border-transparent hover:border-neon-blue pb-1"
            >
              Contatti
            </button>
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-neon-blue text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-secondary border-t border-dark-tertiary">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block hover:text-neon-blue transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('storia')}
              className="block hover:text-neon-blue transition-colors duration-300"
            >
              Storia
            </button>
            <button 
              onClick={() => scrollToSection('fazioni')}
              className="block hover:text-neon-blue transition-colors duration-300"
            >
              Fazioni
            </button>
            <button 
              onClick={() => scrollToSection('personaggi')}
              className="block hover:text-neon-blue transition-colors duration-300"
            >
              Personaggi
            </button>
            <button 
              onClick={() => scrollToSection('alberi')}
              className="block hover:text-neon-blue transition-colors duration-300"
            >
              Alberi di Nirn
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="block hover:text-neon-blue transition-colors duration-300"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contatti')}
              className="block hover:text-neon-blue transition-colors duration-300"
            >
              Contatti
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
