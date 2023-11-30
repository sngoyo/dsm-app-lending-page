import { combineReducers } from "redux";
import { photoReducer } from "./reducers";

export const reducers = combineReducers({
    allPhotos: photoReducer,
});