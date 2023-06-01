import { combineReducers } from "redux";
import { photoReducer, photoIndexReducer } from "./reducers";

export const reducers = combineReducers({
    allPhotos: photoReducer,
    photoIndexReducer,
});