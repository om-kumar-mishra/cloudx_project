
export const getIndustry = () => {
    return async function (dispatch) {
        await fetch('http://alobhaitsolution.com:1997/api/industry-box', { method: "GET" })
            .then((res) => {
                res.json().then((industry) => {
                    dispatch(setIndustry(industry.data));
                    // console.log("Industry in action:", industry);
                })
            })

    }
}
export const setIndustry = (industry) => {
    if (industry) {
        return {
            type: "SET_INDUSTRY",
            payload: industry,
        }
    }
}

export const getIndustryheading = () => {
    return async function (dispatch) {
        await fetch('http://alobhaitsolution.com:1997/api/industry-main-title-page', { method: "GET" })
            .then((res) => {
                res.json().then((industryheading) => {
                    dispatch(setIndustryheading(industryheading.data));
                    // console.log("Industry heading in action:", industryheading);
                })
            })

    }
}
export const setIndustryheading = (industryheading) => {
    if (industryheading) {
        return {
            type: "SET_INDUSTRYHEADING",
            payload: industryheading,
        }
    }
}
export const getIndustrybanner = () => {
    return async function (dispatch) {
        await fetch('http://alobhaitsolution.com:1997/api/industry-banner', { method: "GET" })
            .then((res) => {
                res.json().then((industrybanner) => {
                    dispatch(setIndustrybanner(industrybanner));
                    // console.log("Industry banner in action:", industrybanner);
                })
            })

    }
}
export const setIndustrybanner = (industrybanner) => {
    if (industrybanner) {
        return {
            type: "SET_INDUSTRYBANNER",
            payload: industrybanner,
        }
    }
}
