import Slider from "react-slick";
import Popup from "reactjs-popup";

import "./index.css";
import PlaylistDetails from "../PlaylistDetails";
import ContextValues from "../../context";

const Tunes = (props) => {
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
  let count = () => {
    if (width > 600 && width < 1024) {
      return 5;
    } else if (width > 1024) {
      return 10;
    } else {
      return 1;
    }
  };
  const position = () => {
    if (width > 400 && width < 1024) {
      return width - 300;
    } else if (width > 1024) {
      return width - 500;
    } else {
      return width - 200;
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

  const { newReleases } = props;
  if (newReleases === undefined) {
    return null;
  }
  return (
    <ContextValues.Consumer>
      {(value) => {
        const { accessToken } = value;
        return (
          <Slider
            style={{ width: "75vw", position: "relative", top: "10px" }}
            {...settings}
          >
            {newReleases.map((tune) => (
              <div className="item" key={tune.id}>
                <Popup
                  trigger={
                    <button className="button">
                      <img
                        className="image"
                        src={tune.images[0].url}
                        alt="tune"
                      />
                      <p className="width">{tune.name}</p>
                    </button>
                  }
                  modal
                  nested
                >
                  {(close) => (
                    <div className="modal">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="cards">
                        <PlaylistDetails token={accessToken} item={tune} />{" "}
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            ))}
          </Slider>
        );
      }}
    </ContextValues.Consumer>
  );
};

export default Tunes;
