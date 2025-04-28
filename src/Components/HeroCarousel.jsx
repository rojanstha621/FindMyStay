import React from 'react';
import Slider from "react-slick";
import modern1 from '../assets/ModernHouse1.avif';
import modern2 from '../assets/ModernHouse2.avif';
import modern3 from '../assets/pexels-binyaminmellish-186077.jpg';

const heroImages = [
  { id: 1, src: modern1, alt: "Modern House 1" },
  { id: 2, src: modern2, alt: "Modern House 2" },
  { id: 3, src: modern3, alt: "Modern House 3" },
];

function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="relative w-full h-screen overflow-cover">
      {/* Image Slider */}
      <Slider {...settings} className="h-screen">
        {heroImages.map((img) => (
          <div key={img.id} className="w-full h-screen">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-screen object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Optional Dark Overlay */}
      

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-20">
        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-xl">
          Find Your Dream Stay
        </h1>
        <p className="text-lg md:text-xl mt-4 drop-shadow-md">
          Browse. Filter. Discover Comfort.
        </p>
      </div>
    </div>
  );
}

export default HeroCarousel;
