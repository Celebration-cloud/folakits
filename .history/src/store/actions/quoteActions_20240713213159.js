import { useEffect } from "react"
import { ActionTypes } from "."
import { collection, onSnapshot, query } from "firebase/firestore"
import { db } from "../../../server/firebase/firebaseConfig"

// EXAMPLE HOW TO USE ACTION
export const getRandomQuote = (dispatch) => {
  dispatch({ type: ActionTypes })

  fetch("http://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => dispatch({ type: ActionTypes, payload: data }))
    .catch((err) => dispatch({ type: ActionTypes, payload: err }))
}
export const receiveItem= (userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: ActionTypes, })
        // const { data } = await axios.post(URL, userData)
        // dispatch({ type: ActionTypes, payload: data })
        const currentState = getState();
        console.log("Current state:", currentState);
    } catch (error) {
         dispatch({ type: ActionTypes, payload: error.message })
    }
}
export const getItems= (userData) => async (dispatch, getState) => {
    if(userData !== "Shop") return dispatch({type: ActionTypes.GET_PRODUCTS, payload: []})
    try {
      const productCollectionRef = collection(db, "products");

      const unsubscribe = onSnapshot(
        productCollectionRef,
        (querySnapshot) => {
          const newData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
          }));
          dispatch({ type: ActionTypes.GET_PRODUCTS, payload: newData });
        }
      );
      const currentState = getState();
      console.log("Current state:", currentState);
      return () => {
        unsubscribe();
      };
    } catch (error) {
         dispatch({ type: ActionTypes, payload: error.message })
    }
}

export const getCategoryItems= (userData) => async (dispatch, getState) => {
    try {
       const productCollectionRef = query(collection(db, "products"));

       const unsubscribe = onSnapshot(productCollectionRef, (querySnapshot) => {
         const newData = querySnapshot.docs.map((doc) => ({
           ...doc.data(),
         }));
         dispatch({ type: ActionTypes.GET_PRODUCTS, payload: newData });
       });
       const currentState = getState();
       console.log("Current state:", currentState);
       return () => {
         unsubscribe();
       };
    } catch (error) {
         dispatch({ type: ActionTypes, payload: error.message })
    }
}
export const deleteItem= (userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: ActionTypes, })
        // const { data } = await axios.post(URL, userData)
        // dispatch({ type: ActionTypes, payload: data })
        const currentState = getState();
        console.log("Current state:", currentState);
    } catch (error) {
         dispatch({ type: ActionTypes, payload: error.message })
    }
}