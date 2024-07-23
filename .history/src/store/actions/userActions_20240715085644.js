import { toaster } from "evergreen-ui";
import { ActionTypes } from "."

export const signUpUser= (userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: ActionTypes, })
        const currentState = getState();
        console.log("Current state:", currentState);
    } catch (error) {
         toaster. error.message })
    }
}