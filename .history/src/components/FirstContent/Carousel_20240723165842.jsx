import styles from './Carousel.module.css'
import caro from '/public/R.jpg'
import Button from '../reuseable/button/Button';
import { useSelector } from 'react-redux';
function Carousel() {
    const { advert } = useSelector((state) => state.product);
console.log(advert)
  return (
    <div
      id="carouselExampleCaptions"
      className={`${styles.body} carousel slide `}
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {advert?.map((item, idx) => (

        <button
          type="button"
          key={idx}
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label={`Slide ${idx + 1}`}
        ></button>
        ))}
      </div>
      <div className={`${styles.content} carousel-inner `}>
        {advert?.map((item, idx) => (
          <div key={idx} className={` carousel-item a`}>
            <img src={caro} className="d-block w-100" alt="..." />
            <div
              style={{
                position: "absolute",
                zIndex: 30,
                top: "0",
                padding: "20px",
                marginTop: "100px",
                color: "white",
                display: "inline-flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <h1>
                Our Orange <br /> Collection
              </h1>
              <p>
                Our casual Collection Pellentesque netus aliquet dictum curae
                praesent Buy Now Our orange Collection
              </p>
              <span style={{ zIndex: 0, position: "relative" }}>
                <Button name="Shop Now" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel
