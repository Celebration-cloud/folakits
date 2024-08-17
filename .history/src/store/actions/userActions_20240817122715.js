import { toaster } from "evergreen-ui";
import { ActionTypes } from ".";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db, storage } from "../../server/firebase/firebaseConfig";
import { v6 as uuid } from "uuid";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import emailjs from "@emailjs/browser";

export const signUpUser = (userData, setLoading) => async (dispatch, getState) => {
  try {
    setLoading(true);
    const storageRef = ref(storage, `users/${userData.user_name}`);
    const file = userData.profile_picture[0];
    // 'file' comes from the Blob or File API
    await uploadBytes(storageRef, file);
    const imageURL = await getDownloadURL(storageRef);
    await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
    const data = {
      id: uuid(),
      user_name: userData.user_name,
      email: userData.email,
      password: userData.password,
      phone_number: Number(parseInt(userData.phone)),
      profile_picture: imageURL,
      wishlist: [],
      cart: [],
      orders: [],
      address: {},
    };

    await setDoc(doc(db, "users", data.user_name), data);

    toaster.success("successfully registered");
    setLoading(false);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    setLoading(false)
    toaster.danger(errorCode, errorMessage);
  }finally{
    setLoading(false)
  }
};

export const loginUser =
  (userData, setLogged, setLoading) => async (dispatch) => {
    try {
      setLoading(true)
      const user = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );

      const users = user.user;
      dispatch({ type: ActionTypes.GET_SESSION, payload: users });
      toaster.success("Logged in Successfully");
      setLogged(true);
      setLoading(false)
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setLoading(false)
      console.log(error);
      toaster.danger(errorCode, errorMessage);
    }finally{
      setLoading(false)
    }
  };

export const forgottenPassword =
  (userEmail, setLoading, handleChainLogin) => async () => {
    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, userEmail);
      toaster.success("Password reset email sent");
      setLoading(false);
      handleChainLogin()
      // dispatch({ type: ActionTypes, })
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      //  setLoading(false);
      console.log(error);
      toaster.danger(errorCode, errorMessage);
    } finally {
      setLoading(false);
    }
  };
export const userWishlist =
  (userData, username) => async () => {
    const updateRef = doc(db, "users", username);
    try {
      await updateDoc(updateRef, {
        wishlist: userData,
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      toaster.danger(errorCode, errorMessage);
    }
  };
export const userRating =
  (userRating, username) => async () => {
    const updateRef = doc(db, "product", "rating");
    try {
      await updateDoc(updateRef, {
        userRating,
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      toaster.danger(errorCode, errorMessage);
    }
  };
export const userCartList =
  (userData, username) => async (dispatch, getState) => {
    const updateRef = doc(db, "users", username);
    try {
      await updateDoc(updateRef, {
        cart: userData,
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      toaster.danger(errorCode, errorMessage);
    }
  };
export const userAddress =
  (userData, username) => async (dispatch, getState) => {
    const updateRef = doc(db, "users", username);
    try {
      await updateDoc(updateRef, {
        address: userData,
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      toaster.danger(errorCode, errorMessage);
    }
  };
export const userInfo = (userData, username) => async (dispatch, getState) => {
  if (username === userData.name) return;
  const updateRef = doc(db, "users", username);
  const newDocRef = doc(db, "users", userData.name);
  try {
    await updateDoc(updateRef, {
      user_name: userData.name,
      phone_number: userData.phone,
    });
    const docSnapshot = await getDoc(updateRef);
    if (docSnapshot.exists()) {
      // Set data to the new document
      await setDoc(newDocRef, docSnapshot.data());

      // Delete the old document
      await deleteDoc(updateRef);
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    toaster.danger(errorCode, errorMessage);
  }
};

export const userOrders =
  (userData, username) => async (dispatch, getState) => {
    const updateRef = doc(db, "orders", userData.orderId);

    try {
      await setDoc(updateRef, userData);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      toaster.danger(errorCode, errorMessage);
    }
  };
export const userOrdersItems =
  (setOrders, username) => async (dispatch, getState) => {
 
    try {
      const ordersCollection = collection(db, "orders");
      const q = query(ordersCollection, where("user", "==", username));
      const querySnapshot = await getDocs(q);
      const ordersData = querySnapshot.docs.map((doc) => doc.data());
      setOrders(ordersData);
    } catch (error) {
      toaster.danger(error.message);
      console.log(error.message);
    }
  };

   export const sendEmail = async (e, form, setLoading) => {
     e.preventDefault();
     try {
       setLoading(true);
       const result = await emailjs.sendForm(
         import.meta.env.VITE_SERVICE_ID,
         import.meta.env.VITE_TEMPLATE_ID,
         form.current,
         import.meta.env.VITE_USER_ID
       );
       setLoading(false);
       console.log(result.text);
     } catch (error) {
       setLoading(false);
       console.log(error.text);
     } finally {
       setLoading(false);
     }

     e.target.reset(); // Reset the form after submission
   };
