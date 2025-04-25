import React, { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    {
      title: "Informatique",
      submenu: [
        "Ordinateurs portables",
        "PC de bureau",
        "Composants PC",
        "Périphériques"
      ]
    },
    {
      title: "Téléphonie & Tablette",
      submenu: [
        "Smartphones",
        "Tablettes",
        "Accessoires téléphone",
        "Montres connectées"
      ]
    },
    {
      title: "Stockage",
      submenu: [
        "Disques durs",
        "SSD",
        "Clés USB",
        "Cartes mémoire"
      ]
    },
    // Ajoutez les autres catégories de la même manière
    {
      title: "Impression",
      submenu: [

        "Imprimantes",
        "Fax",
        "Scanners",
        "Consommables"
      ]
    },
    {
      title: "TV-Son-Photos",
      submenu: [
        "Téléviseurs",
        "Home cinéma",
        "Caméras",
        "Accessoires photo"
      ]
    },
    {
      title: "Electroménager",
      submenu: [
        "Réfrigérateurs",
        "Lave-linge",
        "Sèche-linge",
        "Petits électroménagers"
      ]
    },
    {
      title: "Sécurité",
      submenu: [
        "Caméras de surveillance",
        "Alarmes",
        "Détecteurs de fumée",
        "Accessoires de sécurité"
      ]
    },
    {
      title: "Bureautique",
      submenu: [
        "Imprimantes",
        "Scanners",
        "Fax",
        "Accessoires de bureau"

      ]
    },
    {
      title: "Réseau & Connectiques",
      submenu: [
        "Routeurs",
        "Switches",
        "Câbles réseau",
        "Accessoires réseau"
      ]
    }
  ];

  return (
    <nav className="tunisianet-nav">
      <ul className="nav-list">
        {menuItems.map((item, index) => (
          <li 
            key={index}
            className="nav-item"
            onMouseEnter={() => setActiveMenu(index)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <span>{item.title}</span>
            {item.submenu && item.submenu.length > 0 && activeMenu === index && (
              <ul className="submenu">
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex} className="submenu-item">
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;