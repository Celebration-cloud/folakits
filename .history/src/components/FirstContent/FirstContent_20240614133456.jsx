import styles from './FirstContent.module.css'
import Carousel from './Carousel';
import SpecialOffer from './SpecialOffer';
import Button from '../reuseable/button/Button';
import img1 from '/public/red dress.png';
import img2 from '/public/t-shirt.png'
import img3 from '/public/gown.png'
function FirstContent() {
  return (
    <div className={styles["first-content"]}>
      <article className={styles["specials"]}>
        <section className={styles["image"]}>
          <Carousel />
        </section>
        <section className={styles["offers"]}>
          <SpecialOffer />
        </section>
      </article>
      <article className={styles["collection"]}>
        <section>
          <div style={styles.cat}>
            <h3>
              <strong>Caps & Accessories</strong>
            </h3>
            <p>Suspendisse consequat sed velit amet commodo</p>
            <Button>Buy now</Button>
          </div>
          <div>
            <img src={img1} width={50} alt="" />
          </div>
        </section>
        <section>
          <div style={styles.cat}>
            <h3>
              <strong>Shoes & Socks</strong>
            </h3>
            <p>Suspendisse consequat sed velit amet commodo</p>
            <Button>Buy now</Button>
          </div>
          <div>
            <img src={img2} width={80} alt="" />
          </div>
        </section>
        <section>
          <div style={styles.cats}>
            <h3>
              <strong>Jackets & Coats</strong>
            </h3>
            <p>Suspendisse consequat sed velit amet commodo</p>
            <Button>Buy now</Button>
          </div>
          <div>
            <img src={img3} width={70} alt="" />
          </div>
        </section>
      </article>
    </div>
  );
}

export default FirstContent
