const productsInitialState = {
    newsLetterList: [],

}


const NewsLetterReducer = (state = productsInitialState, action) => {

    switch (action.type) {
        case "SET_NEWSLETTER":

            return {
                ...state,
                newsLetterList: action.payload
            };

        default:
            return state
    }
}

export default NewsLetterReducer;