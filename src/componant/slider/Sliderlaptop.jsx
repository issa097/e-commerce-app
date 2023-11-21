import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import Rating from "../rating/Rating";
import { Link } from "react-router-dom";
const Sliderlaptop = ({ data }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="card">

      <Slider {...settings}>
        {data.map((d) => (
          <Link to={`/products/${d.id}`}  key={d.id} className="cardd">
            <div className="card-top">
              <img
                className="book-slide-item-img"
                src={d.image}
                alt={d.title}
              />
              <h1>{d.title}</h1>
            </div>
            <div className="card-bottom">
              <Rating rating={d.rating} review={d.reviews} />

              <div className="rat">${d.price}</div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Sliderlaptop;
