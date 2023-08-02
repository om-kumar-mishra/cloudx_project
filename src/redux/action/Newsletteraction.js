export const getNewsletter = () => {
    return async function (dispatch) {
        await fetch('http://alobhaitsolution.com:1997/api/ready-to-talk', { method: "GET" })
            .then((res) => {
                res.json().then((newsletter) => {
                    dispatch(setNewsLetter(newsletter.data));
                    // console.log("News letter in action:", newsletter.data);
                })
            })
    }
}

export const setNewsLetter = (newsletter) => {
    if (newsletter) {
        return {
            type: 'SET_NEWSLETTER',
            payload: newsletter,
        }
    }
}