export const getPrivacyPolicy = () => {
    return async function (dispatch) {
        await fetch('http://alobhaitsolution.com:1997/api/slug?slug_name=privacy_policy', { method: "GET" })
            .then((res) => {
                res.json().then((pp) => {
                    dispatch(setPrivacyPolicy(pp?.data));
                    // console.log("Privacy Policy in action:", pp);
                })
            })

    }
}

export const setPrivacyPolicy = (pp) => {
    if (pp) {
        return {
            type: "SET_PRIVACY_POLICY",
            payload: pp,
        }
    }
}