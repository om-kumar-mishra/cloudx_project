
export const getGalleryBanner = () => {
    return async function (dispatch) {
        await fetch('http://alobhaitsolution.com:1997/api/gallary-banner', { method: "GET" })
            .then((res) => {
                res.json().then((image) => {
                    dispatch(setGalleryBanner(image));
                    // console.log("image in action:", image);
                })
            })

    }
}

export const setGalleryBanner = (image) => {
    if (image) {
        return {
            type: "SET_GALLERY_BANNER",
            payload: image,
        }
    }
}

export const getImage = () => {
    return async function (dispatch) {
        await fetch('http://alobhaitsolution.com:1997/api/gallary-images', { method: "GET" })
            .then((res) => {
                res.json().then((image) => {
                    dispatch(setImage(image.data));
                    // console.log("image in action:", image);
                })
            })

    }
}

export const setImage = (image) => {
    if (image) {
        return {
            type: "SET_IMAGE",
            payload: image,
        }
    }
}

export const getEvent = () => {
    return async function (dispatch) {
        await fetch('http://alobhaitsolution.com:1997/api/event', { method: "GET" })
            .then((res) => {
                res.json().then((event) => {
                    dispatch(setEvent(event.data));
                    // console.log("Event in action:", event);
                })
            })

    }
}

export const setEvent = (event) => {
    if (event) {
        return {
            type: "SET_EVENT",
            payload: event,
        }
    }
}

export const getEventImage = (id) => {
    return async function (dispatch) {
        await fetch(`http://alobhaitsolution.com:1997/api/event-images?event_id=${id}`, { method: "GET" })
            .then((res) => {
                res.json().then((eventImage) => {
                    dispatch(setEventImage(eventImage?.data[0]));
                    // console.log("event Image in action:", eventImage?.data[0]);
                })
            })

    }
}

export const setEventImage = (eventImage) => {
    if (eventImage) {
        return {
            type: "SET_EVENTIMAGE",
            payload: eventImage,
        }
    }
}

export const getEventCommonBanner = () => {
    return async function (dispatch) {
        await fetch(`http://alobhaitsolution.com:1997/api/common-banner`, { method: "GET" })
            .then((res) => {
                res.json().then((eventCommonBanner) => {
                    dispatch(setEventCommonBanner(eventCommonBanner?.data));
                    // console.log("event common banner in action:", eventCommonBanner?.data);
                })
            })

    }
}

export const setEventCommonBanner = (eventCommonBanner) => {
    if (eventCommonBanner) {
        return {
            type: "SET_EVENT_COMMON_BANNER",
            payload: eventCommonBanner,
        }
    }
}
export const getVideo = () => {
    return async function (dispatch) {
        await fetch(`http://alobhaitsolution.com:1997/api/video`, { method: "GET" })
            .then((res) => {
                res.json().then((video) => {
                    dispatch(setVideo(video?.data));
                    // console.log("video in action:", video?.data);
                })
            })

    }
}

export const setVideo = (video) => {
    if (video) {
        return {
            type: "SET_VIDEO",
            payload: video,
        }
    }
}