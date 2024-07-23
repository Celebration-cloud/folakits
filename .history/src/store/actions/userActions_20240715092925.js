import { toaster } from "evergreen-ui";
import { ActionTypes } from "."
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../server/firebase/firebaseConfig";

export const signUpUser= (userData) => async (dispatch, getState) => {
    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = createUser.user;
      dispatch({ type: ActionTypes.GET_USERS, payload: user });

      const currentState = getState();
      console.log("Current state:", currentState, userData);
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
         toaster.danger( errorCode, errorMessage )
    }
}