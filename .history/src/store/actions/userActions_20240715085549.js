import { ActionTypes } from "."

export const signUpUser= (userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: ActionTypes, })
        const { data } = await axios.post(URL, userData)
        dispatch({ type: actionType, payload: data })
        const currentState = getState();
        console.log("Current state:", currentState);
    } catch (error) {
         dispatch({ type: actionType, payload: error.message })
    }
}