/* eslint-disable react/prop-types */
import CarouselImage from "./CarouselImage";
import { useCallback, useEffect, useState } from "react";
import styles from "./Details.module.css";
import Counter from "../reuseable/counter/Counter";
import Button from "../reuseable/button/Button";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getItemDetails } from "../../store/actions/quoteActions";
function Content() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { loading, error, products} = useSelector(state => state.product)
  
  useEffect(() => {
    dispatch(getItemDetails(name));
    return () => {
      window.scrollTo(0, 0)
    };
  }, [name, dispatch]);
  useCallback(() => {
    dispatch(getItemDetails(name));
  }, [name, dispatch]);
console.log(products, name)
  const handleChange = (event) => {
    event.preventDefault();
  };
  return (
    <div className={styles.content}>
      {products.map((item) => (
        <>

        </>

      ))}
      
    </div>
  );
}

export default Content
