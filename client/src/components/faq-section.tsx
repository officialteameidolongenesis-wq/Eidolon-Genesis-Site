import { useState } from "react";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      question: "Cos'è esattamente un Eidolon?",
      answer: "Un Eidolon è una frattura animica catalizzata che permette a un individuo di manipolare l'energia dimensionale. Si manifesta come un'abilità unica legata alla personalità e alle esperienze traumatiche del portatore. Non tutti possono sviluppare un Eidolon - richiede una predisposizione genetica e un evento scatenante emotivamente intenso."
    },
    {
      question: "Che tipo di media sarà Eidolon Genesis?",
      answer: "Eidolon Genesis è concepito come un progetto multimediale che includerà una serie animata, romanzi light novel, e potenzialmente un videogioco. La storia principale sarà raccontata attraverso episodi animati, con contenuti supplementari che esploreranno il mondo e i personaggi in maggiore profondità."
    },
    {
      question: "Quando sarà rilasciato il primo contenuto?",
      answer: "Il progetto è attualmente in fase di pre-produzione. Stiamo lavorando sui concept art, la sceneggiatura e la ricerca di partner per la produzione. I primi contenuti ufficiali (trailer, artwork) dovrebbero essere rilasciati nel corso del 2024."
    },
    {
      question: "Il mondo di Eidolon Genesis è collegato ad altre opere?",
      answer: "Eidolon Genesis è un universo completamente originale e indipendente. Tuttavia, stiamo progettando un multiverso che potrebbe includere opere future ambientate in realtà parallele o periodi temporali diversi dello stesso universo dimensionale."
    },
    {
      question: "Come posso supportare il progetto?",
      answer: "Attualmente, il modo migliore per supportarci è seguire i nostri social media, condividere i nostri contenuti e diffondere la parola sul progetto. In futuro lanceremo una campagna di crowdfunding dove i fan potranno contribuire direttamente e ricevere merchandise esclusivo e contenuti bonus."
    }
  ];

  return (
    <section id="faq" className="py-20 relative section-fade">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
              <span className="text-deep-red">DOMANDE</span> 
              <span className="text-neon-blue"> FREQUENTI</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--deep-red)] to-[var(--neon-blue)] mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Tutto quello che devi sapere sul progetto Eidolon Genesis
            </p>
          </div>
          
          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="faq-item bg-dark-secondary/50 backdrop-blur-sm rounded-xl border border-dark-tertiary overflow-hidden"
              >
                <button 
                  onClick={() => toggleFAQ(index + 1)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-dark-tertiary/30 transition-all duration-300"
                >
                  <h3 className="font-semibold text-lg text-white">{faq.question}</h3>
                  <i 
                    className={`fas fa-chevron-down text-neon-blue transition-transform duration-300 ${
                      openFAQ === index + 1 ? 'rotate-180' : ''
                    }`}
                  ></i>
                </button>
                {openFAQ === index + 1 && (
                  <div className="px-6 pb-6 animate-slide-up">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
