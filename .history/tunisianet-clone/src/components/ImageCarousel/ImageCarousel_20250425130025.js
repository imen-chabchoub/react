import React from 'react';
import Slider from 'react-slick';
import './ImageCarousel.css';

// Importez vos images ou utilisez des URLs
const carouselImages = [
  {
    id: 1,
    
    imageUrl: "https://www.tunisianet.com.tn/modules/wbimageslider/views/img/d96593f74549b519fcc9bebc84e1fa436c1aa025_facebook%20banner.jpg"
  },
  {
    id: 2,
    
    imageUrl: "https://www.tunisianet.com.tn/modules/wbimageslider/views/img/5bfe5d37668b32055d3ce55828095c63ed4d1450_beko%20mal.jpg"
  },
  {
    id: 3,
    
    imageUrl: "https://www.tunisianet.com.tn/modules/wbimageslider/views/img/13241fd00723fb9cd7dc52af1d0b291f2fcb24a4_asus%20promo.jpg"
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