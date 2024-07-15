import { ActionTypes } from "."

// EXAMPLE HOW TO USE ACTION
export const getRandomQuote = (dispatch) => {
  dispatch({ type: ActionTypes })

  fetch("http://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => dispatch({ type: ActionTypes.SET_RANDOM_QUOTE, payload: data }))
    .catch((err) => dispatch({ type: ActionTypes.FAILED_RANDOM_QUOTE, payload: err }))
}
export const actionName= (userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: actionType, })
        const { data } = await axios.post(URL, userData)
        dispatch({ type: actionType, payload: data })
    } catch (error) {
         dispatch({ type: actionType, payload: error.message })
    }
}