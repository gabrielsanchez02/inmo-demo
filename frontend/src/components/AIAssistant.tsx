import React, { useState } from 'react';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<{id: number, text: string, isUser: boolean}[]>([
    { id: 1, text: "¡Hola! Soy tu asistente IA inmobiliario. ¿En qué puedo ayudarte hoy?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Añadir mensaje del usuario
    const newUserMessage = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');

    // Simular respuesta del asistente IA (en una aplicación real, esto sería una llamada a una API)
    setTimeout(() => {
      const aiResponses = [
        "Entiendo tu solicitud. ¿Podrías proporcionar más detalles sobre el tipo de propiedad que buscas?",
        "Gracias por tu mensaje. Para ayudarte mejor, ¿qué tipo de propiedad estás buscando?",
        "Tengo información sobre propiedades en varias zonas de Galicia. ¿En qué provincia estás interesado?",
        "¿Te gustaría que te ayude a filtrar propiedades según tus preferencias específicas?",
        "Puedo ayudarte a encontrar las mejores opciones según tu presupuesto y necesidades."
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const newAIMessage = {
        id: messages.length + 2,
        text: randomResponse,
        isUser: false
      };
      
      setMessages(prev => [...prev, newAIMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Asistente IA Inmobiliario</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tu asistente virtual para encontrar la propiedad perfecta en Galicia
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="text-xl font-semibold flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
                Asistente IA
              </h3>
            </div>
            
            <div className="h-96 overflow-y-auto p-4 bg-white">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex mb-4 ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.isUser 
                        ? 'bg-blue-600 text-white rounded-br-none' 
                        : 'bg-gray-200 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu mensaje..."
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition"
                >
                  Enviar
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                El asistente IA puede ayudarte a encontrar propiedades según tus preferencias
              </p>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-600 mb-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Búsqueda Inteligente</h3>
              <p className="text-gray-600">Encuentra propiedades que se ajusten perfectamente a tus necesidades y preferencias.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-600 mb-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Respuestas Rápidas</h3>
              <p className="text-gray-600">Obtén respuestas inmediatas a tus preguntas sobre propiedades y servicios.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-600 mb-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Disponible 24/7</h3>
              <p className="text-gray-600">Tu asistente está disponible las 24 horas del día, los 7 días de la semana.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;