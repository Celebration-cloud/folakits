import { toaster } from "evergreen-ui";
import { ActionTypes } from "."
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../../../server/firebase/firebaseConfig";
import { v6 as uuid } from "uuid";
import { doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const signUpUser= (userData, handleChainLogin) => async (dispatch, getState) => {
    try {
      const storageRef = ref(storage, `users/${userData.user_name}`);
      const file = userData.profile_picture[0];
      // 'file' comes from the Blob or File API
      await uploadBytes(storageRef, file)
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
        address: [],
      };
      
      await setDoc(doc(db, "users", data.user_name), data);
      
      // dispatch({ type: ActionTypes.GET_USERS, payload: user });
      toaster.success("successfully registered")
      handleChainLogin();
      const currentState = getState();
      console.log("Current state:", currentState, userData);
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
         toaster.danger( errorCode, errorMessage )
    }
}

export const loginUser = (userData, setLogged) => async (dispatch, getState) => {
  try {
    const user = await signInWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );

    const users = user.user;
    dispatch({ type: ActionTypes.GET_SESSION, payload: users });
    const currentState = getState();
    console.log("Current state:", currentState, userData);
    toaster.success("Logged in Successfully")
    setLogged(true);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    toaster.danger(errorCode, errorMessage);
  }
};

export const userWishlist= (userData, username) => async (dispatch, getState) => {
  console.log(username, userData)
  const updateRef = doc(db, "users", username);
  try {
        await updateDoc(updateRef, {
          wishlist: userData,
        });
        const currentState = getState();
        console.log("Current state:", currentState, userData);
        
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      toaster.danger(errorCode, errorMessage);
    }
}
export const userCartList= (userData, username) => async (dispatch, getState) => {
  console.log(username, userData)
  const updateRef = doc(db, "users", username);
  try {
        await updateDoc(updateRef, {
          cart: userData,
        });
        const currentState = getState();
        console.log("Current state:", currentState, userData);
        
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      toaster.danger(errorCode, errorMessage);
    }
}
export const userAddress = (userData, username) => async (dispatch, getState) => {
  console.log(username, userData)
  const updateRef = doc(db, "users", username);
  try {
        await updateDoc(updateRef, {
          address: userData,
        });
        const currentState = getState();
        console.log("Current state:", currentState, userData);
        
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      toaster.danger(errorCode, errorMessage);
    }
}
export const userInfo = (userData, username) => async (dispatch, getState) => {
  console.log(username, userData)
  const updateRef = doc(db, "users", username);
  const newDocRef = doc(db, "users", );
  try {
        await updateDoc(updateRef, {
          user_name: userData.name,
          phone_number: userData.phone,
        });
        const docSnapshot = await getDoc(oldDocRef);
        if (docSnapshot.exists()) {
          // Set data to the new document
          await setDoc(newDocRef, docSnapshot.data());
          console.log("Data copied successfully.");

          // Delete the old document
          await deleteDoc(oldDocRef);
          console.log("Old document deleted.");
        } else {
          console.log("No such document!");
        }

        const currentState = getState();
        console.log("Current state:", currentState, userData,);
        
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      toaster.danger(errorCode, errorMessage);
    }
}

