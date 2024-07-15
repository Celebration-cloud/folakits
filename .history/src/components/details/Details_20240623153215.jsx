import React from 'react'

function Details() {
  return (
    <div Cl="container">
      <div Cl="row d-flex justify-content-center mt-5">
        <div Cl="col-md-6">
          <div
            id="myCarousel"
            Cl="carousel slide"
            data-ride="carousel"
            align="center"
          >
            <div Cl="carousel-inner">
              {" "}
              <div Cl="carousel-item active">
                <img src="https://i.imgur.com/bV1xmG5.jpg" Cl="rounded" />
              </div>{" "}
              <div Cl="carousel-item">
                <img src="https://i.imgur.com/vgMi4nw.jpg" Cl="rounded" />
              </div>{" "}
              <div Cl="carousel-item">
                <img src="https://i.imgur.com/hRlGe10.jpg" Cl="rounded" />
              </div>
            </div>
            <ol Cl="carousel-indicators list-inline">
              <li Cl="list-inline-item active">
                <a
                  id="carousel-selector-0"
                  Cl="selected"
                  data-slide-to="0"
                  data-target="#myCarousel"
                >
                  <img
                    src="https://i.imgur.com/bV1xmG5.jpg"
                    Cl="img-fluid rounded"
                  />
                </a>{" "}
              </li>{" "}
              <li Cl="list-inline-item">
                <a
                  id="carousel-selector-1"
                  data-slide-to="1"
                  data-target="#myCarousel"
                >
                  <img
                    src="https://i.imgur.com/vgMi4nw.jpg"
                    Cl="img-fluid rounded"
                  />
                </a>{" "}
              </li>{" "}
              <li Cl="list-inline-item">
                {" "}
                <a
                  id="carousel-selector-2"
                  data-slide-to="2"
                  data-target="#myCarousel"
                >
                  <img
                    src="https://i.imgur.com/hRlGe10.jpg"
                    Cl="img-fluid rounded"
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
