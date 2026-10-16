import React from 'react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "Experiencia Local",
      description: "Más de 15 años de experiencia en el mercado inmobiliario gallego con un profundo conocimiento del sector.",
      icon: "🏛️"
    },
    {
      title: "Equipo Profesional",
      description: "Nuestro equipo está compuesto por profesionales altamente cualificados y comprometidos con la satisfacción del cliente.",
      icon: "👥"
    },
    {
      title: "Atención Personalizada",
      description: "Ofrecemos un servicio personalizado y adaptado a cada necesidad y preferencia del cliente.",
      icon: "✨"
    },
    {
      title: "Red de Contactos",
      description: "Accedemos a una amplia red de contactos en el sector inmobiliario para ofrecer mejores oportunidades.",
      icon: "🤝"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-blue-100 rounded-full mb-4">
            <span className="text-sm font-medium text-blue-800">Nuestra Ventaja</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Por qué elegirnos en Galicia?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Descubre las razones por las que somos la mejor opción para tu búsqueda inmobiliaria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-5xl mb-4 text-center">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Nuestra Misión</h3>
              <p className="text-blue-100 mb-4 leading-relaxed">
                Facilitar el proceso de compra, venta o alquiler de propiedades en Galicia, 
                brindando un servicio de excelencia y una experiencia única para cada cliente.
              </p>
              <p className="text-blue-100 leading-relaxed">
                Nos comprometemos a ser el referente en el sector inmobiliario gallego, 
                con una visión innovadora y un enfoque centrado en el cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;