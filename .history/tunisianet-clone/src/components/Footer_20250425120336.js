const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-8 mt-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">NOTRE SOCIÉTÉ</h3>
            <ul className="space-y-2">
              <li>Contactez-nous</li>
              <li>À propos</li>
              <li>Nos Magasins</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">INFORMATIONS LÉGALES</h3>
            <ul className="space-y-2">
              <li>Livraison</li>
              <li>Conditions d'utilisation</li>
              <li>Paiement sécurisé</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">YOUR ACCOUNT</h3>
            <ul className="space-y-2">
              <li>Personal info</li>
              <li>Ordens</li>
              <li>Credit slips</li>
              <li>Addresses</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">CONTACT</h3>
            <address>
              <p><strong>Tunisianet</strong></p>
              <p>10 Rue Saint Augustin</p>
              <p>1002 Tunis</p>
              <p>Tunisie</p>
              <p>+218 31 31 00 00</p>
              <p>+218 32 40 66 06</p>
              <p>contact@tunisianet.com.tn</p>
            </address>
          </div>
        </div>
        <div className="text-center mt-8 pt-4 border-t border-gray-700">
          <p>© 2025 - Tunisianet™</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;