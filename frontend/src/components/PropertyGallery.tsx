import React, { useState } from 'react';

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

const PropertyGallery: React.FC<PropertyGalleryProps> = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            {images.length > 0 ? (
              <img 
                src={images[selectedImage]} 
                alt={`Vista ${selectedImage + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                Imagen no disponible
              </div>
            )}
          </div>
        </div>
        <div className="space-y-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`h-24 bg-gray-200 rounded-lg cursor-pointer overflow-hidden ${
                selectedImage === index ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={image} 
                alt={`Vista ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyGallery;