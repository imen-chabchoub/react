import React from 'react';
import './Footer.css';
import './InfoSection/InfoSection.js';
import InfoSection from './components/InfoSection/InfoSection';
const Footer = () => {
  return (
    <footer className="tunisianet-footer">
      <div className="footer-content">
        <InfoSection/>
        <p>© 2025 - Tunisianet™</p>
      </div>
    </footer>
  );
};

export default Footer;