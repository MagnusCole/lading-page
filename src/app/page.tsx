'use client';
import { useState } from 'react';
import Image from 'next/image';

// Preload critical images
const preloadImages = () => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = '/globe.svg';
  document.head.appendChild(link);
};

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    // For MVP, we're just showing the success message
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-trust to-black text-white p-4 sm:p-6 md:p-10 lg:p-16 h-[100dvh] overflow-hidden">
      <div className="w-full max-w-6xl h-full flex items-center justify-center">
        {!submitted ? (
          <section className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-black/30 p-4 sm:p-6 lg:p-8 rounded-lg shadow-xl backdrop-blur-sm" role="region" aria-labelledby="main-heading">
            {/* Logo */}
            <header className="mb-3 sm:mb-4 lg:mb-6 text-center">
              <h1 id="main-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-trust">LEAD<span className="text-white">MAGNET</span></h1>
            </header>
            
            {/* Main Content - Optimized for Mobile */}
            <section className="text-center mb-4 sm:mb-6 lg:mb-8 space-y-3 sm:space-y-4 lg:space-y-5" aria-labelledby="main-title">
              <h2 id="main-title" className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-5 lg:mb-6 leading-tight text-white">CONSIGUE MÁS CLIENTES SIN GASTAR EN ADS</h2>
              <p className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-5 lg:mb-6 text-blue-100">Automatizamos tu captación de leads para que <strong>solo cierres ventas</strong>.</p>
              
              {/* Compact bullet points */}
              <ul className="text-left space-y-2 sm:space-y-3 lg:space-y-4 mb-4 lg:mb-6 mx-auto max-w-sm lg:max-w-md text-sm sm:text-base lg:text-lg" aria-label="Beneficios principales">
                <li className="flex items-start">
                  <span className="text-security mr-2" aria-hidden="true">✓</span>
                  <span>Captación <strong>automática</strong> de prospectos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-security mr-2" aria-hidden="true">✓</span>
                  <span>Sin necesidad de gastar en publicidad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-security mr-2" aria-hidden="true">✓</span>
                  <span>Resultados en <strong>menos de 30 días</strong></span>
                </li>
              </ul>
            </section>
            
            {/* Compact Form */}
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-5" aria-labelledby="form-heading"> 
              <h3 id="form-heading" className="sr-only">Formulario de contacto</h3>
              <div className="mb-3 sm:mb-4 lg:mb-5">
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-blue-300 mb-1">Tu Nombre</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Escribe tu nombre completo"
                  required
                  className="w-full p-3 rounded-md bg-white/10 border border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/50 text-base sm:text-lg"
                  aria-required="true"
                />
              </div>
              <div className="mb-4 lg:mb-5">
                <label htmlFor="whatsapp" className="block text-xs sm:text-sm font-medium text-blue-300 mb-1">Tu WhatsApp</label>
                <input
                  id="whatsapp"
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="Ej: +51 912 345 678"
                  required
                  pattern="[+]?[0-9\s]{9,15}"
                  className="w-full p-3 rounded-md bg-white/10 border border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/50 text-base sm:text-lg"
                  aria-required="true"
                />
              </div>
              <div className="pt-3 sm:pt-4 lg:pt-5"> 
                <button
                  type="submit"
                  className="w-full bg-urgency hover:bg-urgency/90 text-white font-extrabold text-xl sm:text-2xl py-4 sm:py-5 lg:py-4 px-6 sm:px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-urgency/30 uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-urgency"
                  aria-label="Solicitar clientes"
                >
                  QUIERO CLIENTES AHORA
                </button>
                <p className="text-xs sm:text-sm text-center text-blue-200 mt-2" id="privacy-note" aria-live="polite">
                  No compartiremos tu información. Sin spam.
                </p>
              </div>
            </form>
          </section>
        ) : (
          <section className="text-center bg-black/40 p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-2xl max-w-md md:max-w-lg lg:max-w-xl w-full backdrop-blur-sm border border-blue-500/30" role="alert" aria-live="assertive"> 
            <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6 md:mb-8 animate-bounce" aria-hidden="true">✅</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-blue-400">¡Gracias!</h2>
            <p className="text-xl sm:text-2xl mb-2 sm:mb-4">Te contactaremos en breve por WhatsApp.</p>
            <p className="text-base sm:text-lg text-blue-200 mt-3 sm:mt-4 md:mt-6">Prepárate para aumentar tus ventas</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-4 sm:mt-6 md:mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label="Volver al formulario"
            >
              Volver al formulario
            </button>
          </section>
        )}
      </div>
    </main>
  );
}
