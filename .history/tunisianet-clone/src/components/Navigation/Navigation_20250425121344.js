import React from 'react';
import './Navigation.css';

const Navigation = () => {
  const categories = [
    "Informatique",
    "Téléphonie & Tablette",
    "Stockage",
    "Impression",
    "TV-Son-Photos",
    "Electroménager",
    "Sécurité",
    "Bureautique",
    "Réseau & Connectiques"
  ];

  return (
    <nav className="tunisianet-nav">
      <ul className="nav-list">
        {categories.map((category, index) => (
          <li key={index} className="nav-item">
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;