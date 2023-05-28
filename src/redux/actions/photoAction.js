export const actionTypes = {
    SET_PHOTOS: "SET_PHOTOS",
    SELECTED_PHOTO: "SELECTED_PHOTO"
}

export const setPhotos = (photos) => {
    return {
        type: actionTypes.SET_PHOTOS,
        payload: photos
    }
}


export const selectedPhoto = (photo) => {
    return {
        type: actionTypes.SELECTED_PHOTO,
        payload: photo
    }
}