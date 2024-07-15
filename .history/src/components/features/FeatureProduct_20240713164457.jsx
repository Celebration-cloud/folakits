import React, { useEffect } from 'react'
import CardComponent from '../reuseable/card/CardComponent';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../reuseable/button/Button';
import Spinner from '../reuseable/spinner/Spinner';
import { collection, onSnapshot } from 'firebase/firestore';

function FeatureProduct() {
  const { loading, error, products} = useSelector(state => state.product)
    const dispatch = useDispatch();

    useEffect(() => {
      const productCollectionRef = collection(db, "products");

      const unsubscribe = onSnapshot(productCollectionRef, (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        dispatch({ type: ActionTypes.GET_PRODUCTS, payload: newData });
      });

      return () => {
        // Cleanup function: Unsubscribe from the snapshot listener
        unsubscribe();
      };
    }, [dispatch]);
  console.log(products)
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        width: "100%",
        padding: "20px",
        gap: "30px",
        margin: "40px 0px 40px 0px",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "larger",
          fontWeight: "bolder",
        }}
      >
        Featured products
      </h2>
      <section
        style={{
          display: "inline-flex",
          width: "100%",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {products.map((item) => (
          <CardComponent key={item.id} product={item} />
        ))}
        {loading && <Spinner/>}
      </section>
      <div style={{alignSelf: "center"}}>
       <Button name="Browse more"/> 
      </div>
      
    </div>
  );
}

export default FeatureProduct
