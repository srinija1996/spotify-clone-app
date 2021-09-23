import Slider from "react-slick";

import "./index.css";

const Genres = (props) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "grey",
          top: -35,
          left: position() + 30,
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "grey",
          top: -35,
          left: position(),
        }}
        onClick={onClick}
      />
    );
  }

  const width = window.screen.width;
  const position = () => {
    if (width > 400 && width < 1024) {
      return width - 300;
    } else if (width > 1024) {
      return width - 500;
    } else {
      return width - 200;
    }
  };

  let count = () => {
    if (width > 600 && width < 1024) {
      return 5;
    } else if (width > 1024) {
      return 10;
    } else {
      return 1;
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: count(),
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const { genreList } = props;
  if (genreList === undefined) {
    return null;
  }
  return (
    <div>
      <Slider
        style={{ width: "75vw", position: "relative", top: "10px" }}
        {...settings}
      >
        {genreList.map((genre) => (
          <div key={genre}>
            <p className="genre">{genre}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Genres;
