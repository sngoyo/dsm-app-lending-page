import { actionTypes } from "../actions/photoAction";

const photo_1 = require("./images/chui.jpg");
const photo_2 = require("./images/killimanjaro_climbing.jpg");
const photo_3 = require("./images/lions.jpg");
const photo_4 = require("./images/victoria_dsm.jpg");
const photo_5 = require("./images/twiga.jpg");

const initialState = [
    { id: 1, src: photo_1, title: "City that never sleeps" },
    { id: 2, src: photo_2, title: "Climbing Mount Kilimanjaro" },
    { id: 3, src: photo_3, title: "Lions at Serengeti National park" },
    { id: 4, src: photo_4, title: "City that never sleeps, Victoria in Dar es Salaam City" },
    { id: 5, src: photo_5, title: "Twiga in Ngorongoro Conservation Area" }
];

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