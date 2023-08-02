const productsInitialState = {
    imageList: [],
    eventList: [],
    eventimageList: [],
    gallerybannerList: [],
    eventcommonbannerList: [],
    videoList: [],
}


const GalleryReducer = (state = productsInitialState, action) => {

    switch (action.type) {
        case "SET_IMAGE":

            return {
                ...state,
                imageList: action.payload
            };

        case "SET_EVENT":

            return {
                ...state,
                eventList: action.payload
            };

        case "SET_EVENTIMAGE":

            return {
                ...state,
                eventimageList: action.payload
            };
        case "SET_GALLERY_BANNER":

            return {
                ...state,
                gallerybannerList: action.payload
            };

        case "SET_EVENT_COMMON_BANNER":

            return {
                ...state,
                eventcommonbannerList: action.payload
            };

        case "SET_VIDEO":

            return {
                ...state,
                videoList: action.payload
            };

        default:
            return state
    }
}

export default GalleryReducer;