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
          <div>
            <h3>
              <strong>Caps & Accessories</strong>
            </h3>
            <p>
              Suspendisse consequat sed velit amet commodo
            </p>
            <Button>Buy now</Button>
          </div>
          <div>
            <img/>
          </div>
          <p>
            The font family used in the image for the words “Shop,” “Blog,”
            “About,” and “Contact” appears to be a sans-serif type. However,
            without specific font identification, it is not possible to
            determine the exact font family used here.
          </p>
        </section>
        <section>
          <p>
            The font family used in the image for the words “Shop,” “Blog,”
            “About,” and “Contact” appears to be a sans-serif type. However,
            without specific font identification, it is not possible to
            determine the exact font family used here.
          </p>
        </section>
        <section>
          <p>
            The font family used in the image for the words “Shop,” “Blog,”
            “About,” and “Contact” appears to be a sans-serif type. However,
            without specific font identification, it is not possible to
            determine the exact font family used here.
          </p>
        </section>
      </article>
    </div>
  );
}

export default FirstContent
