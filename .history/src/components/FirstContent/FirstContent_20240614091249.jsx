import React from 'react'
import styles from './FirstContent.module.css'
import Carousel from './Carousel';
import SpecialOffer from './SpecialOffer';
function FirstContent() {
  return (
    <div className={styles["first-content"]}>
      <article className={styles[""]}>
        <section>
          <Carousel />
        </section>
        <section>
          .
          <SpecialOffer />
        </section>
      </article>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
}

export default FirstContent
