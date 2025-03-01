'use client';
import { useState } from 'react';
import Image from 'next/image';

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white p-4">
      {!submitted ? (
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold"> </h1>
          </div>
          
          {/* Main Content */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">CONSIGUE MÁS CLIENTES SIN GASTAR EN ADS</h2>
            <p className="text-xl">Automatizamos tu captación de leads para que solo cierres ventas.</p>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu Nombre Aquí"
                required
                className="w-full p-4 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/70"
              />
            </div>
            <div>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="Tu WhatsApp Aquí"
                required
                className="w-full p-4 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white/70"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-4 rounded-md transition-all duration-300 transform hover:scale-105"
            >
              QUIERO CLIENTES AHORA
            </button>
            <p className="text-xs text-center text-white/70 mt-2">
              No compartiremos tu información. Sin spam.
            </p>
          </form>
        </div>
      ) : (
        <div className="text-center">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-bold mb-2">¡Gracias!</h2>
          <p>Te contactaremos en breve.</p>
        </div>
      )}
    </div>
  );
}
