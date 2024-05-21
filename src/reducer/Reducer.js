import { cartAction } from "./CartAction";
import { combineReducers } from "redux";

export const allReducer=combineReducers({
    cart:cartAction
})