import { toaster } from "evergreen-ui";
import { ActionTypes } from "."
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../../../server/firebase/firebaseConfig";
import { v6 as uuid } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
export const signUpUser= (userData) => async (dispatch, getState) => {
    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      const user = createUser.user;
      const storageRef = ref(storage, `users/${userData.user_name}`);
      const file = userData.profile_picture[0];
      // 'file' comes from the Blob or File API
      await uploadBytes(storageRef, file)
      const imageUrgetDownloadURL(ref(storage, "images/stars.jpg"));
      const data = {
        user_name: userData.user_name,
        email: userData.email,
        password: userData.password,
        id: uuid(),
        profile_picture: userData.profile_picture[0],
        wishlist: [],
        cart: [],
        orders: [],
        address: [],
      };

      await setDoc(doc(db, "users", data.user_name), data);
      dispatch({ type: ActionTypes.GET_USERS, payload: user });
      const currentState = getState();
      console.log("Current state:", currentState, userData);
      toaster.success("successfully registered")
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
         toaster.danger( errorCode, errorMessage )
    }
}