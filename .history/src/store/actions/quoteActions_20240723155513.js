import { ActionTypes } from "."
import { collection, limit, onSnapshot, orderBy, query, where } from "firebase/firestore"
import { db } from "../../../server/firebase/firebaseConfig"
import { toaster } from "evergreen-ui";

// EXAMPLE HOW TO USE ACTION
export const receiveItem= () => async (dispatch, getState) => {
   try {
     const productCollectionRef = collection(db, "products");

     const unsubscribe = onSnapshot(productCollectionRef, (querySnapshot) => {
       const newData = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
       dispatch({ type: ActionTypes.GET_PRODUCTS, payload: newData });
     });

     const currentState = getState();
     console.log("Current state:", currentState);

     return () => {
       unsubscribe();
     };
   } catch (error) {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log(error);
       toaster.danger(errorCode, errorMessage);
   }
}
export const getItems = () => async (dispatch, getState) => {
  try {
    const productCollectionRef = collection(db, "products");

    const unsubscribe = onSnapshot(productCollectionRef, (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
      dispatch({ type: ActionTypes.GET_PRODUCTS, payload: newData });
    });
    const currentState = getState();
    console.log("Current state:", currentState);
    return () => {
      unsubscribe()
    }

  } catch (error) {
     const errorCode = error.code;
     const errorMessage = error.message;
     console.log(error);
     toaster.danger(errorCode, errorMessage);
  }
};
}
export const getAdvert = () => async (dispatch, getState) => {
  try {
    const productCollectionRef =query( collection(db, "products"), limit(10));

    const unsubscribe = onSnapshot(productCollectionRef, (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
      dispatch({ type: ActionTypes.GET_PRODUCTS, payload: newData });
    });
    const currentState = getState();
    console.log("Current state:", currentState);
    return () => {
      unsubscribe()
    }

  } catch (error) {
     const errorCode = error.code;
     const errorMessage = error.message;
     console.log(error);
     toaster.danger(errorCode, errorMessage);
  }
};

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
   const errorCode = error.code;
   const errorMessage = error.message;
   console.log(error);
   toaster.danger(errorCode, errorMessage);
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
   const errorCode = error.code;
   const errorMessage = error.message;
   console.log(error);
   toaster.danger(errorCode, errorMessage);
    }
}
export const searchItem= (userData) => async (dispatch, getState) => {
    try {
       const productCollectionRef = query(
         collection(db, "products"),
         where("product", "==", userData)
       );
       if(productCollectionRef){
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
       }else{
         dispatch({ type: ActionTypes.GET_PRODUCTS, payload: [] });
       }
       
    } catch (error) {
   const errorCode = error.code;
   const errorMessage = error.message;
   console.log(error);
   toaster.danger("Product not found");
    }
}
// export const deleteItem= () => async (dispatch, getState) => {
//     try {
//         dispatch({ type: ActionTypes, })
//         // const { data } = await axios.post(URL, userData)
//         // dispatch({ type: ActionTypes, payload: data })
//         const currentState = getState();
//         console.log("Current state:", currentState);
//     } catch (error) {
//    const errorCode = error.code;
//    const errorMessage = error.message;
//    console.log(error);
//    toaster.danger(errorCode, errorMessage);
//     }
// }