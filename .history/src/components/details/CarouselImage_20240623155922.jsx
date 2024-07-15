import styles from './CarouselImage.module.css'
function CarouselImage() {
  return (
    <div cl="container">
      {" "}
      <div cl="row d-flex justify-content-center mt-5">
        {" "}
        <div cl="col-md-6">
          {" "}
          <div
            id="myCarousel"
            cl="carousel slide"
            data-ride="carousel"
            align="center"
          >
            {" "}
            <div cl="carousel-inner">
              {" "}
              <div cl="carousel-item active">
                {" "}
                <img
                  src="https://i.imgur.com/bV1xmG5.jpg"
                  cl="rounded"
                />{" "}
              </div>{" "}
              <div cl="carousel-item">
                {" "}
                <img
                  src="https://i.imgur.com/vgMi4nw.jpg"
                  cl="rounded"
                />{" "}
              </div>{" "}
              <div cl="carousel-item">
                {" "}
                <img
                  src="https://i.imgur.com/hRlGe10.jpg"
                  cl="rounded"
                />{" "}
              </div>{" "}
            </div>{" "}
            <ol cl="carousel-indicators list-inline">
              {" "}
              <li cl="list-inline-item active">
                {" "}
                <a
                  id="carousel-selector-0"
                  cl="selected"
                  data-slide-to="0"
                  data-target="#myCarousel"
                >
                  {" "}
                  <img
                    src="https://i.imgur.com/bV1xmG5.jpg"
                    cl="img-fluid rounded"
                  />{" "}
                </a>{" "}
              </li>{" "}
              <li cl="list-inline-item">
                {" "}
                <a
                  id="carousel-selector-1"
                  data-slide-to="1"
                  data-target="#myCarousel"
                >
                  {" "}
                  <img
                    src="https://i.imgur.com/vgMi4nw.jpg"
                    cl="img-fluid rounded"
                  />{" "}
                </a>{" "}
              </li>{" "}
              <li cl="list-inline-item">
                {" "}
                <a
                  id="carousel-selector-2"
                  data-slide-to="2"
                  data-target="#myCarousel"
                >
                  {" "}
                  <img
                    src="https://i.imgur.com/hRlGe10.jpg"
                    cl="img-fluid rounded"
                  />{" "}
                </a>{" "}
              </li>{" "}
            </ol>{" "}
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default CarouselImage
