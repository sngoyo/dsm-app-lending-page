export const actionTypes = {
    SET_PHOTOS: "SET_PHOTOS",
};

export const setPhotos = (photos) => {
    return {
        type: actionTypes.SET_PHOTOS,
        payload: photos
    };
};