/* eslint-disable react/prop-types */
import { useState } from "react";
import "./CarouselImage.css"
function CarouselImage({image}) {
    const [view , setView] = useState(0)
    console.log(view, image)
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-20">
          <div
            id="custCarousel"
            className="carousel slide"
            data-ride="carousel"
            align="center"
          >
            {/* <!-- slides --> */}
            <div className="carousel-inner">
              {image.map((item, index) => (
                <div key={index} className={`carousel-item ${view === index && `active`}`}>
                <img src={item} alt="Hills" />
              </div>
              ))}
              
            </div>

            {/* <!-- Left right --> */}
            <a
              className="carousel-control-prev"
              href="#custCarousel"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a
              className="carousel-control-next"
              href="#custCarousel"
              data-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </a>

            {/* <!-- Thumbnails --> */}
            <ol className="carousel-indicators list-inline">
              {image.map((item, index) => (
                  ))}
              <li
                onClick={() => setView(0)}
                className={`list-inline-item ${view === 0 && `active`}`}
              >
                <a
                  id="carousel-selector-0"
                  className="selected"
                  data-slide-to="0"
                  data-target="#custCarousel"
                >
                  <img
                    src="https://i.imgur.com/weXVL8M.jpg"
                    className="img-fluid"
                  />
                </a>
              </li>

              <li
                onClick={() => setView(1)}
                className={`list-inline-item ${view === 1 && `active`}`}
              >
                <a
                  id="carousel-selector-1"
                  data-slide-to="1"
                  data-target="#custCarousel"
                >
                  <img
                    src="https://i.imgur.com/Rpxx6wU.jpg"
                    className="img-fluid"
                  />
                </a>
              </li>

              <li
                onClick={() => setView(2)}
                className={`list-inline-item ${view === 2 && `active`}`}
              >
                <a
                  id="carousel-selector-2"
                  data-slide-to="2"
                  data-target="#custCarousel"
                >
                  <img
                    src="https://i.imgur.com/83fandJ.jpg"
                    className="img-fluid"
                  />
                </a>
              </li>

              <li
                onClick={() => setView(3)}
                className={`list-inline-item ${view === 3 && `active`}`}
              >
                <a
                  id="carousel-selector-3"
                  data-slide-to="3"
                  data-target="#custCarousel"
                >
                  <img
                    src="https://i.imgur.com/JiQ9Ppv.jpg"
                    className="img-fluid"
                  />
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselImage
