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
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-trust to-black text-white p-6 md:p-8">
      {!submitted ? (
        <section className="w-full max-w-md bg-black/30 p-8 rounded-lg shadow-xl backdrop-blur-sm" role="region" aria-labelledby="main-heading">
          {/* Logo */}
          <header className="mb-10 text-center">
            <h1 id="main-heading" className="text-3xl font-bold text-trust">LEAD<span className="text-white">MAGNET</span></h1>
          </header>
          
          {/* Main Content - Improved Visual Hierarchy */}
          <section className="text-center mb-10 space-y-4" aria-labelledby="main-title">
            <h2 id="main-title" className="text-5xl font-extrabold mb-6 leading-tight text-white">CONSIGUE MÁS CLIENTES SIN GASTAR EN ADS</h2>
            <p className="text-xl mb-6 text-blue-100">Automatizamos tu captación de leads para que <strong>solo cierres ventas</strong>.</p>
            
            {/* Added scannable bullet points with improved accessibility */}
            <ul className="text-left space-y-3 mb-8 mx-auto max-w-sm" aria-label="Beneficios principales">
              <li className="flex items-start">
                <span className="text-security mr-2 text-xl" aria-hidden="true">✓</span>
                <span>Captación <strong>automática</strong> de prospectos</span>
              </li>
              <li className="flex items-start">
                <span className="text-security mr-2 text-xl" aria-hidden="true">✓</span>
                <span>Sin necesidad de gastar en publicidad</span>
              </li>
              <li className="flex items-start">
                <span className="text-security mr-2 text-xl" aria-hidden="true">✓</span>
                <span>Resultados en <strong>menos de 30 días</strong></span>
              </li>
            </ul>
          </section>
          
          {/* Form - Improved White Space and Accessibility */}
          <form onSubmit={handleSubmit} className="space-y-8" aria-labelledby="form-heading"> 
            <h3 id="form-heading" className="sr-only">Formulario de contacto</h3>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-blue-300 mb-2">Tu Nombre</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Escribe tu nombre completo"
                required
                className="w-full p-4 rounded-md bg-white/10 border border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/50 text-lg"
                aria-required="true"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="whatsapp" className="block text-sm font-medium text-blue-300 mb-2">Tu WhatsApp</label>
              <input
                id="whatsapp"
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="Ej: +34 612 345 678"
                required
                pattern="[+]?[0-9\s]{9,15}"
                className="w-full p-4 rounded-md bg-white/10 border border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/50 text-lg"
                aria-required="true"
              />
            </div>
            {/* CTA Button - Enhanced with better contrast and visual prominence */}
            <div className="pt-6"> 
              <button
                type="submit"
                className="w-full bg-urgency hover:bg-urgency/90 text-white font-extrabold text-2xl py-6 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-urgency/30 uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-urgency"
                aria-label="Solicitar clientes"
              >
                QUIERO CLIENTES AHORA
              </button>
              <p className="text-sm text-center text-blue-200 mt-4" id="privacy-note" aria-live="polite">
                No compartiremos tu información. Sin spam.
              </p>
            </div>
          </form>
        </section>
      ) : (
        <section className="text-center bg-black/40 p-10 rounded-lg shadow-2xl max-w-md w-full backdrop-blur-sm border border-blue-500/30" role="alert" aria-live="assertive"> 
          <div className="text-7xl mb-8 animate-bounce" aria-hidden="true">✅</div>
          <h2 className="text-4xl font-extrabold mb-6 text-blue-400">¡Gracias!</h2>
          <p className="text-2xl mb-4">Te contactaremos en breve por WhatsApp.</p>
          <p className="text-lg text-blue-200 mt-6">Prepárate para aumentar tus ventas</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-label="Volver al formulario"
          >
            Volver al formulario
          </button>
        </section>
      )}
    </main>
  );
}
