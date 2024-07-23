import { toaster } from "evergreen-ui";
import { ActionTypes } from "."
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../../../server/firebase/firebaseConfig";
import { v6 as uuid } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const signUpUser= (userData, handleChainLogin) => async (dispatch, getState) => {
    try {
      const storageRef = ref(storage, `users/${userData.user_name}`);
      const file = userData.profile_picture[0];
      // 'file' comes from the Blob or File API
      await uploadBytes(storageRef, file)
      const imageURL = await getDownloadURL(storageRef);
      const createUser = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      const user = createUser.user;
      const data = {
        id: uuid(),
        user_name: userData.user_name,
        email: userData.email,
        password: userData.password,
        phone_number: userData.phone,
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

export const userWishlist= (userData) => async (dispatch, getState) => {
    try {
      await setDoc(doc(db, "users"), data);
        dispatch({ type: ActionTypes, })
        const currentState = getState();
        console.log("Current state:", currentState, userData);
        toaster.success("Logged in Successfully");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      toaster.danger(errorCode, errorMessage);
    }
}