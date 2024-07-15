import React from 'react'
import CardComponent from '../reuseable/card/CardComponent';

function FeatureProduct() {
  return (
    <div style={{display: "inline-flex", fle}}>
      <h3>Featured products</h3>
      <section >
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
      </section>
    </div>
  );
}

export default FeatureProduct
