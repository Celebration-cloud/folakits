import React from 'react'
import styles from './FirstContent.module.css'
import Carousel from './Carousel';
import SpecialOffer from './SpecialOffer';
function FirstContent() {
  return (
    <div className={styles}>
      <section >
        <Carousel/>
      </section>
      <section>.
        <SpecialOffer/>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
}

export default FirstContent
