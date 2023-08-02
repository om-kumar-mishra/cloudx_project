
export const getService = () => {
    return async function (dispatch) {
        await fetch('http://alobhaitsolution.com:1997/api/service-box', { method: "GET" })
            .then((res) => {
                res.json().then((service) => {
                    dispatch(setService(service.data));
                    // console.log("Service in action:", service);
                })
            })

    }
}
export const setService = (service) => {
    if (service) {
        return {
            type: "SET_SERVICE",
            payload: service,
        }
    }
}

export const getServiceBanner = () => {
    return async function (dispatch) {
        await fetch('http://alobhaitsolution.com:1997/api/service-banner', { method: "GET" })
            .then((res) => {
                res.json().then((service) => {
                    dispatch(setServiceBanner(service.data));
                    // console.log("Service Banner in action:", service);
                })
            })

    }
}
export const setServiceBanner = (service) => {
    if (service) {
        return {
            type: "SET_SERVICEBANNER",
            payload: service,
        }
    }
}

export const getServiceHeading = () => {
    return async function (dispatch) {
        await fetch('http://alobhaitsolution.com:1997/api/service-main-title', { method: "GET" })
            .then((res) => {
                res.json().then((serviceheading) => {
                    dispatch(setServiceHeading(serviceheading.data));
                    console.log("Service Heading in action:", serviceheading);
                })
            })

    }
}
export const setServiceHeading = (serviceheading) => {
    if (serviceheading) {
        return {
            type: "SET_SERVICEHEADING",
            payload: serviceheading,
        }
    }
}
