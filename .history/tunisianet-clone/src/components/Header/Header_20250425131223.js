import React from 'react';
import { FiSearch, FiShoppingCart, FiUser, FiSettings } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  return (
    <header className="tunisianet-header">
      <div className="header-container">
        {/* Logo à gauche */}
        <div className="header-logo">
          <h1>Tunisianet</h1>
        </div>

        {/* Barre de recherche au centre */}
        <div className="header-search">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Rechercher des produits..." 
              className="search-input"
            />
            <button className="search-button">
              <FiSearch className="search-icon" />
            </button>
          </div>
        </div>

        {/* Icônes à droite */}
        <div className="header-icons">
          <div className="icon-wrapper">
            <FiShoppingCart className="header-icon" />
            <span className="icon-badge">0</span>
          </div>
          <div className="icon-wrapper">
            <FiUser className="header-icon" />
          </div>
          <div className="icon-wrapper">
            <FiSettings className="header-icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;