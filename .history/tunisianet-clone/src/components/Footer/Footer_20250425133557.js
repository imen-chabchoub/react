import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaYoutube
} from 'react-icons/fa';
import './Footer.css';
import InfoSection from '../InfoSection/InfoSection'; // Assurez-vous que le chemin est correct
const Footer = () => {
  return (
    <footer className="tunisianet-footer">
      <div className="footer-content">
        {/* Les sections d'informations sont gérées par InfoSections */}
        <InfoSection />
        {/* Ajout de la section des réseaux sociaux */}
        <div className="social-section">
          <div className="social-icons-container">
            <h3>SUIVEZ-NOUS</h3>
            <div className="social-icons">
              <a href="https://facebook.com/tunisianet" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="social-icon" />
              </a>
              <a href="https://twitter.com/tunisianet" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" />
              </a>
              <a href="https://instagram.com/tunisianet" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
              <a href="https://linkedin.com/company/tunisianet" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="social-icon" />
              </a>
              <a href="https://youtube.com/tunisianet" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 - Tunisianet™</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;