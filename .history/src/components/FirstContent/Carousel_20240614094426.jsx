import styles from './Carousel.module.css'
import caro from '/public/R.jpg'
function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className={`${styles} ["carousel slide "]`}
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className={styles["carousel-inner content"]}>
        <div className={styles["carousel-item active shape"]}>
          <img src={caro} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={caro} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={caro} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
}

export default Carousel
