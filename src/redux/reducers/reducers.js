import { actionTypes } from "../actions/photoAction";

const photo_1 = require("./images/chui.jpg");
const photo_2 = require("./images/killimanjaro_climbing.jpg");
const photo_3 = require("./images/lions.jpg");
const photo_4 = require("./images/victoria_dsm.jpg");
const photo_5 = require("./images/twiga.jpg");

export const initialState = [
    { id: 1, src: photo_1, title: "Cheater Chilling", area: "Mikumi - Morogoro" },
    { id: 2, src: photo_2, title: "CLIMBING MOUNTAIN KILIMANJARO", area: "Moshi - Tanzania" },
    { id: 3, src: photo_3, title: "Lions at Serengeti National park", area: "Arusha - Tanzania" },
    { id: 4, src: photo_4, title: "City that never sleeps", area: "Victoria - Dar es salaam" },
    { id: 5, src: photo_5, title: "Twiga in Ngorongoro Conservation Area", area: "Arusha - Tanzania" }
];

const initialStateForIndex = {
    index: 0,
    status: ""
};

export const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PHOTOS:
            return { state, ...action.payload };
        case actionTypes.SELECTED_PHOTO:
            return { state, ...actionTypes.payload };
        default:
            return state;
    };
};

export const photoIndexReducer = (state = initialStateForIndex, action) => {
    let newObj = "";
    switch (action.type) {
        case actionTypes.INDEX_REQUESTED:
            newObj = Object.assign({}, state, { status: "waiting" });
            return newObj;
        case actionTypes.INDEX_RECEIVED:
            state.index = action.payload;
            newObj = Object.assign({}, state, { status: "Received" });
            return newObj;
        default:
            return state;
    };
};