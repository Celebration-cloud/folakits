import React from 'react'
import styles from './FirstContent.module.css'
import Carousel from './Carousel';
import SpecialOffer from './SpecialOffer';
function FirstContent() {
  return (
    <div className={styles["first-content"]}>
      <article className={styles["specials"]}>
        <section class>
          <Carousel />
        </section>
        <section>
          <SpecialOffer />
        </section>
      </article>
      <section>
        <p>
          The font family used in the image for the words “Shop,” “Blog,”
          “About,” and “Contact” appears to be a sans-serif type. However,
          without specific font identification, it is not possible to determine
          the exact font family used here.
        </p>
      </section>
      <section>
        <p>
          The font family used in the image for the words “Shop,” “Blog,”
          “About,” and “Contact” appears to be a sans-serif type. However,
          without specific font identification, it is not possible to determine
          the exact font family used here.
        </p>
      </section>
      <section>
        <p>
          The font family used in the image for the words “Shop,” “Blog,”
          “About,” and “Contact” appears to be a sans-serif type. However,
          without specific font identification, it is not possible to determine
          the exact font family used here.
        </p>
      </section>
    </div>
  );
}

export default FirstContent
