import { ActionTypes } from "."

export const signUpUser= (userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: ActionTypes, })
        const currentState = getState();
        console.log("Current state:", currentState);
    } catch (error) {
         dispatch({ type: actionTyp, payload: error.message })
    }
}