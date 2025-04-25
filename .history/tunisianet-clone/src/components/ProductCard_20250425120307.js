const ProductCard = ({ title, description, price }) => {
    return (
      <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-blue-600 font-semibold mt-2">{price}</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Ajouter au panier
        </button>
      </div>
    );
  };
  
  export default ProductCard;