import { ActionTypes } from "."
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore"
import { db } from "../../../server/firebase/firebaseConfig"

// EXAMPLE HOW TO USE ACTION
export const getRandomQuote = (dispatch) => {
  dispatch({ type: ActionTypes })

  fetch("http://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => dispatch({ type: ActionTypes, payload: data }))
    .catch((err) => dispatch({ type: ActionTypes, payload: err }))
}
export const receiveItem= () => async (dispatch, getState) => {
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
       const productCollectionRef = query(collection(db, "products"), where("category", "==", userData));

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

export const getItemDetails= (userData) => async (dispatch, getState) => {
    try {
       const productCollectionRef = query(collection(db, "products"), where("product", "==", userData));

       const unsubscribe = onSnapshot(productCollectionRef, (querySnapshot) => {
         const newData = querySnapshot.docs.map((doc) => ({
           ...doc.data(),
         }));
         dispatch({ type: ActionTypes.GET_PRODUCT_DETAILS, payload: newData });
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
export const getItemOrders= (userData) => async (dispatch, getState) => {
  const currentState = getState();
  if(currentState.)
    try {
      let productCollectionRef;
      if (userData === "latest") {
      productCollectionRef = query(collection(db, "products"), orderBy("product", "desc"));
    }
    if (userData === "lowToHigh") {
     productCollectionRef = query(collection(db, "products"), orderBy("price", "asc"))
    }
    if (userData === "highToLow") {
     productCollectionRef = query(collection(db, "products"), orderBy("price", "desc"))
    }
       const unsubscribe = onSnapshot(productCollectionRef, (querySnapshot) => {
         const newData = querySnapshot.docs.map((doc) => ({
           ...doc.data(),
         }));
         dispatch({ type: ActionTypes.GET_PRODUCTS, payload: newData });
       });
       console.log("Current state:", currentState);
       return () => {
         unsubscribe()
       };
    } catch (error) {
         dispatch({ type: ActionTypes, payload: error.message })
    }
}
export const searchItem= (userData) => async (dispatch, getState) => {
    try {
       const productCollectionRef = query(
         collection(db, "products"),
         where("product", "==", userData)
       );
       if(productCollectionRef){
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
       }else{
         dispatch({ type: ActionTypes.GET_PRODUCTS, payload: [] });
       }
       
    } catch (error) {
         dispatch({ type: ActionTypes, payload: error.message })
    }
}
export const deleteItem= () => async (dispatch, getState) => {
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