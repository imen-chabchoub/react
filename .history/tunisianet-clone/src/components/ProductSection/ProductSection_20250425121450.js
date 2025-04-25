import React from 'react';
import './ProductSection.css';

const ProductSection = () => {
  const products = [
    {
      brand: "GIGABYTE",
      model: "JG\"WUXGA RTA'4DBQ",
      description: "Ecran Gaming 24\"\nFuillib IPS\n180 Hz 1ms",
      price: "459DT"
    },
    {
      brand: "SMART 9",
      description: "4GO + 349",
      price: "Special Price"
    },
    {
      brand: "Infinix",
      description: "Nouvelle Imprimante",
      price: "Coming Soon"
    }
  ];

  return (
    <section className="product-section">
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-brand">{product.brand}</div>
            <div className="product-model">{product.model}</div>
            <div className="product-description">
              {product.description.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <div className="product-price">{product.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;