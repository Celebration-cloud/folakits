import { toaster } from "evergreen-ui";
import { ActionTypes } from "."
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../../../server/firebase/firebaseConfig";
import { v6 as uuid } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
export const signUpUser= (userData) => async (dispatch, getState) => {
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
      console.log(user)
      const data = {
        user_name: userData.user_name,
        email: userData.email,
        password: userData.password,
        id: uuid(),
        profile_picture: imageURL,
        wishlist: [],
        cart: [],
        orders: [],
        address: [],
      };
      
      await setDoc(doc(db, "users", data.user_name), data);
      // dispatch({ type: ActionTypes.GET_USERS, payload: user });
      toaster.success("successfully registered")
      const currentState = getState();
      console.log("Current state:", currentState, userData);
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
         toaster.danger( errorCode, errorMessage )
    }
}

export const loginUser= userData => async (dispatch, getState) => {
    try {
      const user = await auth.signInWithEmailAndPassword(
        userData.email,
        userData.password
        );
        const userData = user.user
        dispatch({ type: ActionTypes})
         const currentState = getState();
         console.log("Current state:", currentState, userData);
    } catch (error) {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(error);
              toaster.danger(errorCode, errorMessage);
    }
}