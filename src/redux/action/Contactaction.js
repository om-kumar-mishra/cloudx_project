export const getContactBanner = () => {
    return async function (dispatch) {
        await fetch('http://alobhaitsolution.com:1997/api/contact-us-banner', { method: "GET" })
            .then((res) => {
                res.json().then((image) => {
                    dispatch(setContactBanner(image?.data));
                    // console.log("Contact us banner in action:", image);
                })
            })

    }
}

export const setContactBanner = (image) => {
    if (image) {
        return {
            type: "SET_CONTACTUS_BANNER",
            payload: image,
        }
    }
}


export const getMap = () => {
    return async function (dispatch) {
        await fetch('http://alobhaitsolution.com:1997/api/map', { method: "GET" })
            .then((res) => {
                res.json().then((mapData) => {
                    dispatch(setMapData(mapData?.data));
                    // console.log("Contact us banner in action:", image);
                })
            })

    }
}

export const setMapData = (mapData) => {
    if (mapData) {
        return {
            type: "SET_MAP_DATA",
            payload: mapData,
        }
    }
}