import { toaster } from "evergreen-ui";
import { ActionTypes } from "."

export const signUpUser= (userData) => async (dispatch, getState) => {
    try {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            dispatch({ type: ActionTypes, })
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
        const currentState = getState();
        console.log("Current state:", currentState, userData);
    } catch (error) {
         toaster.danger( error.message )
    }
}