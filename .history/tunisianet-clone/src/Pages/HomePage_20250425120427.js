import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const featuredProducts = [
    {
      title: "GIGABYTE JG WUXGA RTA'4DBQ",
      description: "Ecran Gaming 24\" Fuillib IPS 180 Hz 1ms",
      price: "459DT"
    },
    {
      title: "SMART 9",
      description: "4GO + 349",
      price: "Prix spécial"
    },
    {
      title: "Infinix",
      description: "Nouvelle Imprimante",
      price: "Prix à venir"
    }
  ];

  return (
    <div>
      <section className="bg-gray-50 p-8">
        <h2 className="text-2xl font-bold mb-6">Produits en vedette</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>
      
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Informations pratiques</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p>Livraison en 24h (+°) Hors confinement</p>
          <p>Ouvert tous les jours de 8h00 à 19h00</p>
          <p>Contactez-nous au +218 31 31 00 00</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;