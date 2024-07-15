import { combineReducers } from "redux"
import quoteReducer from "./productReducer"

export default combineReducers({
  quote: quoteReducer
})
