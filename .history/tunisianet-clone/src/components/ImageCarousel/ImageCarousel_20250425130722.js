import React from 'react';
import Slider from 'react-slick';
import './ImageCarousel.css';

// Importez vos images ou utilisez des URLs
const carouselImages = [
  {
    id: 1,
    title: "تأصيل",
    subtitle: "شرور",
    description: "Sans intérêt",
    imageUrl: "https://www.tunisianet.com.tn/modules/wbimageslider/views/img/321484e1ebd756bdf6393edad26648545cb21679_12x%20sans%20interet.jpg"
  },
  {
    id: 2,
    title: "نوصلوك للدار بالاش",
    subtitle: "في تونس الكل",
    imageUrl: "https://www.tunisianet.com.tn/modules/wbimageslider/views/img/13241fd00723fb9cd7dc52af1d0b291f2fcb24a4_asus%20promo.jpg"
  },
  {
    id: 3,
    title: "عروض خاصة",
    subtitle: "خصومات تصل إلى 40%",
    imageUrl: "https://www.tunisianet.com.tn/modules/wbimageslider/views/img/4d77a532ec955f61ceeb15ceaa53c81b540e143c_Banni%C3%A8re-1580X460.jpg"
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
            <img src={item.imageUrl} alt={item.title} className="carousel-image" />
           
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;