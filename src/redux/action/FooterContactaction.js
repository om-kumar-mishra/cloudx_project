export const getFooterContact = () => {
    return async function (dispatch) {
        await fetch('http://alobhaitsolution.com:1997/api/contact', { method: "GET" })
            .then((res) => {
                res.json().then((footercontact) => {
                    dispatch(setFooterContact(footercontact?.data));
                    // console.log("Footer Contact in action:", footercontact);
                })
            })

    }
}

export const setFooterContact = (footercontact) => {
    if (footercontact) {
        return {
            type: "SET_FOOTER_CONTACT",
            payload: footercontact,
        }
    }
}