import React from 'react'

function Details() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-md-6">
          <div
            id="myCarousel"
            className="carousel slide"
            data-ride="carousel"
            align="center"
          >
            <div className="carousel-inner">
              {" "}
              <div className="carousel-item active">
                <img src="https://i.imgur.com/bV1xmG5.jpg" className="rounded" />
              </div>{" "}
              <div className="carousel-item">
                <img src="https://i.imgur.com/vgMi4nw.jpg" className="rounded" />
              </div>{" "}
              <div className="carousel-item">
                <img src="https://i.imgur.com/hRlGe10.jpg" className="rounded" />
              </div>
            </div>
            <ol className="carousel-indicators list-inline">
              <li className="list-inline-item active">
                <a
                  id="carousel-selector-0"
                  className="selected"
                  data-slide-to="0"
                  data-target="#myCarousel"
                >
                  <img
                    src="https://i.imgur.com/bV1xmG5.jpg"
                    className="img-fluid rounded"
                  />
                </a>{" "}
              </li>{" "}
              <li className="list-inline-item">
                <a
                  id="carousel-selector-1"
                  data-slide-to="1"
                  data-target="#myCarousel"
                >
                  <img
                    src="https://i.imgur.com/vgMi4nw.jpg"
                    className="img-fluid rounded"
                  />
                </a>{" "}
              </li>{" "}
              <li className="list-inline-item">
                {" "}
                <a
                  id="carousel-selector-2"
                  data-slide-to="2"
                  data-target="#myCarousel"
                >
                  <img
                    src="https://i.imgur.com/hRlGe10.jpg"
                    className="img-fluid rounded"
                  />
                </a>{" "}
              </li>{" "}
            </ol>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default Details
