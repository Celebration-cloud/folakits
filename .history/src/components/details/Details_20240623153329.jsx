import React from 'react'

function Details() {
  return (
    <div className={sty["container"]}>
      <div className={sty["row d-flex justify-content-center mt-5"]}>
        <div className={sty["col-md-6"]}>
          <div
            id="myCarousel"
            className={sty["carousel slide]}"
            data-ride="carousel"
            align="center"
          >
            <div className={sty["carousel-inner"]}>
              {" "}
              <div className={sty["carousel-item active"]}>
                <img src="https://i.imgur.com/bV1xmG5.jpg" className={sty["rounded" /]}>
              </div>{" "}
              <div className={sty["carousel-item"]}>
                <img src="https://i.imgur.com/vgMi4nw.jpg" className={sty["rounded" /]}>
              </div>{" "}
              <div className={sty["carousel-item"]}>
                <img src="https://i.imgur.com/hRlGe10.jpg" className={sty["rounded" /]}>
              </div>
            </div>
            <ol className={sty["carousel-indicators list-inline"]}>
              <li className={sty["list-inline-item active"]}>
                <a
                  id="carousel-selector-0"
                  className={sty["selected]}"
                  data-slide-to="0"
                  data-target="#myCarousel"
                >
                  <img
                    src="https://i.imgur.com/bV1xmG5.jpg"
                    className={sty["img-fluid rounded]}"
                  />
                </a>{" "}
              </li>{" "}
              <li className={sty["list-inline-item"]}>
                <a
                  id="carousel-selector-1"
                  data-slide-to="1"
                  data-target="#myCarousel"
                >
                  <img
                    src="https://i.imgur.com/vgMi4nw.jpg"
                    className={sty["img-fluid rounded]}"
                  />
                </a>{" "}
              </li>{" "}
              <li className={sty["list-inline-item"]}>
                {" "}
                <a
                  id="carousel-selector-2"
                  data-slide-to="2"
                  data-target="#myCarousel"
                >
                  <img
                    src="https://i.imgur.com/hRlGe10.jpg"
                    className={sty["img-fluid rounded]}"
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
