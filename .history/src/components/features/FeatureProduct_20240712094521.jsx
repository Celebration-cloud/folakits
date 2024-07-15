import React from 'react'
import CardComponent from '../reuseable/card/CardComponent';
import { useSelector } from 'react-redux';

function FeatureProduct() {
  const { loading, error, products} = useSelector(state => state.product)
  console.log(products)
  return (
    <div style={{display: "inline-flex", flexDirection: "column", width: "100%", padding: "20px", gap: "30px", margin: "40px 0px 40px 0px", boxSizing: "border-box" }}>
      <h2 style={{textAlign: "center", fontSize: "larger", fontWeight: "bolder"}}>Featured products</h2>
      <section style={{display: "inline-flex", gap: "40px", flexWrap: "wrap", justifyContent: "space-around"}}>
        {products.map((item) => (
          <CardComponent key={item.id} product={item} />
        ))}
      </section>
      
    </div>
  );
}

export default FeatureProduct
