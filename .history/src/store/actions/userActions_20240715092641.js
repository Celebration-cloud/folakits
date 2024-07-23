import { toaster } from "evergreen-ui";
import { ActionTypes } from "."

export const signUpUser= (userData) => async (dispatch, getState) => {
    try {
        const creatcreateUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            // ...
        })
        dispatch({ type: ActionTypes.GET_USERS, payload: user})
         
            const currentState = getState();
            console.log("Current state:", currentState, userData);
        } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
         toaster.danger( errorCode, errorMessage )
    }
}