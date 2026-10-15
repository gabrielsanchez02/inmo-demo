import React, { useState } from 'react';
import { leadService } from '../services/leadService';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Enviar datos a la API
      const leadData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        status: 'new' as const
      };
      
      await leadService.createLead(leadData);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error('Error al enviar el formulario:', err);
      setError('Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Contacta con nosotros</h3>
      
      {submitSuccess ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          <p>¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</p>
        </div>
      ) : null}
      
      {error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>{error}</p>
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">Nombre completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="tu@email.com"
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 mb-2">Teléfono (opcional)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tu número de teléfono"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 mb-2">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Cuéntanos sobre tus necesidades inmobiliarias..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 ${
            isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;