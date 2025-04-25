import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="tunisianet-header">
      <div className="header-content">
        <h1>Tunisianet</h1>
        <div className="header-contact">
          <span>Contactez-nous: +218 31 31 00 00</span>
        </div>
      </div>
    </header>
  );
};

export default Header;