import { ActionTypes } from "."

// EXAMPLE HOW TO USE ACTION
export const getRandomQuote = (dispatch) => {
  dispatch({ type: ActionTypes })

  fetch("http://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => dispatch({ type: ActionTypes.SET_RANDOM_QUOTE, payload: data }))
    .catch((err) => dispatch({ type: ActionTypes.FAILED_RANDOM_QUOTE, payload: err }))
}
export const receiveItem= (userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: ActionTypes, })
        // const { data } = await axios.post(URL, userData)
        // dispatch({ type: ActionTypes, payload: data })
        const currentState = getState();
        console.log("Current state:", currentState);
    } catch (error) {
         dispatch({ type: ActionTypes, payload: error.message })
    }
}
export const getItem= (userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: ActionTypes, })
        // const { data } = await axios.post(URL, userData)
        // dispatch({ type: ActionTypes, payload: data })
        const currentState = getState();
        console.log("Current state:", currentState);
    } catch (error) {
         dispatch({ type: ActionTypes, payload: error.message })
    }
}
export const Item= (userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: ActionTypes, })
        // const { data } = await axios.post(URL, userData)
        // dispatch({ type: ActionTypes, payload: data })
        const currentState = getState();
        console.log("Current state:", currentState);
    } catch (error) {
         dispatch({ type: ActionTypes, payload: error.message })
    }
}