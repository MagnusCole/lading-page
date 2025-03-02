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
          <section className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-black/30 p-6 sm:p-8 lg:p-10 rounded-lg shadow-xl backdrop-blur-sm" role="region" aria-labelledby="main-heading">
            {/* Logo */}
            <header className="mb-5 sm:mb-6 lg:mb-8 text-center">
              <h1 id="main-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-trust">LEAD<span className="text-white">MAGNET</span></h1>
            </header>
            
            {/* Main Content - Optimized for Mobile */}
            <section className="text-center mb-6 sm:mb-8 lg:mb-10 space-y-4 sm:space-y-5 lg:space-y-6" aria-labelledby="main-title">
              <h2 id="main-title" className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 lg:mb-8 leading-tight text-white">CONSIGUE MÁS CLIENTES SIN GASTAR EN ADS</h2>
              <p className="text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 lg:mb-8 text-blue-100">Automatizamos tu captación de leads para que <strong>solo cierres ventas</strong>.</p>
              
              {/* Compact bullet points */}
              <ul className="text-left space-y-3 sm:space-y-4 lg:space-y-5 mb-6 lg:mb-8 mx-auto max-w-sm lg:max-w-md text-sm sm:text-base lg:text-lg" aria-label="Beneficios principales">
                <li className="flex items-start py-1">
                  <span className="text-security mr-3" aria-hidden="true">✓</span>
                  <span>Captación <strong>automática</strong> de prospectos</span>
                </li>
                <li className="flex items-start py-1">
                  <span className="text-security mr-3" aria-hidden="true">✓</span>
                  <span>Sin necesidad de gastar en publicidad</span>
                </li>
                <li className="flex items-start py-1">
                  <span className="text-security mr-3" aria-hidden="true">✓</span>
                  <span>Resultados en <strong>menos de 30 días</strong></span>
                </li>
              </ul>
            </section>
            
            {/* Compact Form */}
            <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6" aria-labelledby="form-heading"> 
              <h3 id="form-heading" className="sr-only">Formulario de contacto</h3>
              <div className="mb-4 sm:mb-5 lg:mb-6">
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-blue-300 mb-2">Tu Nombre</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Escribe tu nombre completo"
                  required
                  className="w-full p-3 sm:p-4 rounded-md bg-white/10 border border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/50 text-base sm:text-lg"
                  aria-required="true"
                />
              </div>
              <div className="mb-5 lg:mb-6">
                <label htmlFor="whatsapp" className="block text-xs sm:text-sm font-medium text-blue-300 mb-2">Tu WhatsApp</label>
                <input
                  id="whatsapp"
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="Ej: +51 912 345 678"
                  required
                  pattern="[+]?[0-9\s]{9,15}"
                  className="w-full p-3 sm:p-4 rounded-md bg-white/10 border border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/50 text-base sm:text-lg"
                  aria-required="true"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-4 px-6 bg-urgency hover:bg-red-700 text-white text-lg sm:text-xl font-bold rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] mt-4"
                aria-label="Solicitar información"
              >
                QUIERO CLIENTES AHORA
              </button>
            </form>
          </section>
        ) : (
          <div className="card text-center">
            <h2 className="main-title">¡Gracias por tu interés!</h2>
            <p className="subtitle">Te contactaremos pronto a través de WhatsApp.</p>
            <Image src="/globe.svg" alt="Éxito" width={120} height={120} className="mx-auto my-8" />
          </div>
        )}
      </div>
    </main>
  );
}
