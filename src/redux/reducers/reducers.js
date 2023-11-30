import { actionTypes } from "../actions/photoAction";

const photo_1 = require("./images/chui.jpg");
const photo_2 = require("./images/killimanjaro_climbing.jpg");
const photo_3 = require("./images/lions.jpg");
const photo_4 = require("./images/victoria_dsm.jpg");
const photo_5 = require("./images/twiga.jpg");

export const initialState = [
    { id: 1, image: photo_1, title: "Cheater Chilling", area: "Mikumi - Morogoro" },
    { id: 2, image: photo_2, title: "CLIMBING MOUNTAIN KILIMANJARO", area: "Moshi - Tanzania" },
    // { image: photo_3, title: "Lions at Serengeti National park", area: "Arusha - Tanzania" },
    { id: 3, image: photo_4, title: "The City that never sleeps", area: "Victoria - Dar es salaam" },
    { id: 4, image: photo_5, title: "Twiga in Ngorongoro Conservation Area", area: "Arusha - Tanzania" },
];


export const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PHOTOS:
            return { state, ...action.payload };
        default:
            return state;
    };
};