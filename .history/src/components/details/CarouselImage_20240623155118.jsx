import styles from './CarouselImage.module.css'
function CarouselImage() {
  return (
    <div className={styles[`${container}`]}>
      <div className={styles["row d-flex justify-content-center mt-5"]}>
        <div className={styles["col-md-6"]}>
          <div
            id={styles["myCarousel"]}
            className={styles["carousel slide"]}
            data-ride="carousel"
          >
            <div className={styles["carousel-inner"]}>
              {" "}
              <div className={styles["carousel-item active"]}>
                <img
                  src="https://i.imgur.com/bV1xmG5.jpg"
                  className={styles["rounded"]}
                />
              </div>{" "}
              <div className={styles["carousel-item"]}>
                <img
                  src="https://i.imgur.com/vgMi4nw.jpg"
                  className={styles["rounded"]}
                />
              </div>{" "}
              <div className={styles["carousel-item"]}>
                <img
                  src="https://i.imgur.com/hRlGe10.jpg"
                  className={styles["rounded"]}
                />
              </div>
            </div>
            <ol className={styles["carousel-indicators list-inline"]}>
              <li className={styles["list-inline-item active"]}>
                <a
                  id={styles["carousel-selector-0"]}
                  className={styles["selected"]}
                  data-slide-to="0"
                  data-target="#myCarousel"
                >
                  <img
                    src="https://i.imgur.com/bV1xmG5.jpg"
                    className={styles["img-fluid rounded"]}
                  />
                </a>{" "}
              </li>{" "}
              <li className={styles["list-inline-item"]}>
                <a
                  id={styles["carousel-selector-1"]}
                  data-slide-to="1"
                  data-target="#myCarousel"
                >
                  <img
                    src="https://i.imgur.com/vgMi4nw.jpg"
                    className={styles["img-fluid rounded"]}
                  />
                </a>{" "}
              </li>{" "}
              <li className={styles["list-inline-item"]}>
                {" "}
                <a
                  id={styles["carousel-selector-2"]}
                  data-slide-to="2"
                  data-target="#myCarousel"
                >
                  <img
                    src="https://i.imgur.com/hRlGe10.jpg"
                    className={styles["img-fluid rounded"]}
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

export default CarouselImage
