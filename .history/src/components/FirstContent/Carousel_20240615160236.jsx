import styles from './Carousel.module.css'
import caro from '/public/R.jpg'
function Carousel() {
  return (
    <div
      id="carouselExampleCaptions"
      className={`${styles.body} carousel slide `}
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className={`${styles.content} carousel-inner `}>
        <div className={` carousel-item active `}>
          <img src={caro} className="d-block w-100" alt="..." />
          <div style={{position: }}>
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
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
