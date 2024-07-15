import React from 'react'
import CardComponent from '../reuseable/card/CardComponent';

function FeatureProduct() {
  return (
    <div style={{display: "inline-flex", flexDirection: "column", width: "100%", padding: "20px", gap: "30px", margin: "40px 0px 40px 0px", boxSizing: "border-box" }}>
      <h3 style={{textAlign: "center"}}>Featured products</h3>
      <section style={{display: "inline-flex", gap: "40px", flexWrap: "wrap", justifyContent: "space-around"}}>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
      </section>
    </div>
  );
}

export default FeatureProduct
