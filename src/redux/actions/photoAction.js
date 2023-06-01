export const actionTypes = {
    SET_PHOTOS: "SET_PHOTOS",
    SELECTED_INDEX: "SELECTED_INDEX",
    INDEX_REQUESTED: "INDEX_REQUESTED",
    INDEX_RECEIVED: "INDEX_RECEIVED",
};

export const setPhotos = (photos) => {
    return {
        type: actionTypes.SET_PHOTOS,
        payload: photos
    }
};


export const photoAnimate = () => {
    return async(dispatch) => {
        dispatch({
            type: actionTypes.INDEX_REQUESTED
        });

        let i = 0;
        while (i <= 5) {
            dispatch({
                type: actionTypes.INDEX_RECEIVED,
                payload: i,
            })

            i++;
        }
    }
};