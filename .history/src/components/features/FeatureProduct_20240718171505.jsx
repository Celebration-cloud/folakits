import React, { useEffect } from 'react'
import CardComponent from '../reuseable/card/CardComponent';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../reuseable/button/Button';
import Spinner from '../reuseable/spinner/Spinner';
import { collection, onSnapshot } from 'firebase/firestore';
import { ActionTypes } from '../../store/actions';
import { db } from '../../../server/firebase/firebaseConfig';
import { getItems } from '../../store/actions/quoteActions';
import { useNavigate } from 'react-router-dom';

function FeatureProduct() {
  const { loading, error, products} = useSelector(state => state.product)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
      dispatch(ret())
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
        {/* {loading && <Spinner/>} */}
      </section>
      <div onClick={() => {navigate(`/${"Shop"}`)}} style={{alignSelf: "center"}}>
       <Button name="Browse more"/> 
      </div>
      
    </div>
  );
}

export default FeatureProduct
