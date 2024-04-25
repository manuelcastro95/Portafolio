// Carousel.js
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ imagenes }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 2,
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
            className="mx-5 w-52 h-40 rounded-xl"
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
