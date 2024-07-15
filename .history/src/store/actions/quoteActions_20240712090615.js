import { useEffect } from "react"
import { ActionTypes } from "."
import { collection, onSnapshot } from "firebase/firestore"
import { db } from "../../../server/firebase/firebaseConfig"

// EXAMPLE HOW TO USE ACTION
export const getRandomQuote = (dispatch) => {
  dispatch({ type: ActionTypes })

  fetch("http://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => dispatch({ type: ActionTypes, payload: data }))
    .catch((err) => dispatch({ type: ActionTypes, payload: err }))
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
export const getItem= (user) => async (dispatch, getState) => {
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
export const deleteItem= (userData) => async (dispatch, getState) => {
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