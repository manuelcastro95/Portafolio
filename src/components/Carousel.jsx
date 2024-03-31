// Carousel.js
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ imagenes }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {imagenes.map((imagen, index) => (
        <div key={index} className="pt-2 px-3">
          <img
            src={imagen.ruta}
            alt={`Slide ${index + 1}`}
            className="mx-auto max-w-full h-44 rounded-xl"
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
