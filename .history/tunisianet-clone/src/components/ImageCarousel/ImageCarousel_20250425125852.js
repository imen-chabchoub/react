import React from 'react';
import Slider from 'react-slick';
import './ImageCarousel.css';

// Importez vos images ou utilisez des URLs
const carouselImages = [
  {
    id: 1,
    
    imageUrl: "https://example.com/path/to/your/image1.jpg"
  },
  {
    id: 2,
    
    imageUrl: "https://example.com/path/to/your/image2.jpg"
  },
  {
    id: 3,
    
    imageUrl: "https://example.com/path/to/your/image3.jpg"
  }
];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    rtl: true // Pour le support arabe (défilement de droite à gauche)
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {carouselImages.map((item) => (
          <div key={item.id} className="carousel-slide">
            <img src={item.imageUrl}  className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;