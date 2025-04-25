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
      <div className="bg-gray-100 p-4">
        <ul className="flex flex-wrap gap-4">
          {categories.map((category, index) => (
            <li key={index} className="hover:text-blue-600 cursor-pointer">
              {category}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Navigation;