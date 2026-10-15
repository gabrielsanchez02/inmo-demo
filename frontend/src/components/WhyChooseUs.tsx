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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Por qué elegirnos en Galicia?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre las razones por las que somos la mejor opción para tu búsqueda inmobiliaria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Misión</h3>
              <p className="text-gray-600 mb-4">
                Facilitar el proceso de compra, venta o alquiler de propiedades en Galicia, 
                brindando un servicio de excelencia y una experiencia única para cada cliente.
              </p>
              <p className="text-gray-600">
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