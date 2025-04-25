import React from 'react';
import './InfoSection.css';

const InfoSection = () => {
  return (
    <div className="info-sections">
      <div className="info-section">
        <h3>Tous</h3>
        <ul>
          <li>Livraison en 24h (+°) Hors confinement</li>
          <li>Ouvert tous les jours de 8h00 à 19h00</li>
          <li>Contactez-nous au +218 31 31 00 00</li>
        </ul>
      </div>

      <div className="info-section">
        <h3>NOTRE SOCIÉTÉ</h3>
        <ul>
          <li>Contactez-nous</li>
          <li>À propos</li>
          <li>Nos Magasins</li>
        </ul>
      </div>

      <div className="info-section">
        <h3>INFORMATIONS LÉGALES</h3>
        <ul>
          <li>Livraison</li>
          <li>Conditions d'utilisation</li>
          <li>Paiement sécurisé</li>
        </ul>
      </div>

      <div className="info-section">
        <h3>YOUR ACCOUNT</h3>
        <ul>
          <li>Personal info</li>
          <li>Ordens</li>
          <li>Credit slips</li>
          <li>Addresses</li>
        </ul>
      </div>

      <div className="info-section contact-info">
        <h3>CONTACT</h3>
        <address>
          <strong>Tunisianet</strong><br />
          10 Rue Saint Augustin<br />
          1002 Tunis<br />
          Tunisie<br />
          +218 31 31 00 00<br />
          +218 32 40 66 06<br />
          contact@tunisianet.com.tn
        </address>
      </div>
    </div>
  );
};

export default InfoSection;