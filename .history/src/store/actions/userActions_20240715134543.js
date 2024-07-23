import { toaster } from "evergreen-ui";
import { ActionTypes } from "."
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../server/firebase/firebaseConfig";
import { v6 as uuid } from "uuid";
import { doc, setDoc } from "firebase/firestore";
export const signUpUser= (userData) => async (dispatch, getState) => {
    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      const user = createUser.user;
      const data = {
        user_name: userData.user_name,
        email: userData.email,
        password: userData.password,
        id: uuid(),
        profile_picture: userData.profile_picture[0],
      };
      await setDoc(doc(db, "products", data.name), data);
      dispatch({ type: ActionTypes.GET_USERS, payload: user });
      const currentState = getState();
      console.log("Current state:", currentState, userData);
      toaster.success()
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
         toaster.danger( errorCode, errorMessage )
    }
}