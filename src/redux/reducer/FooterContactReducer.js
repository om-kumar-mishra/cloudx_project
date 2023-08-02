const productsInitialState = {
    footerContactList: [],

}

const FooterContactReducer = (state = productsInitialState, action) => {

    switch (action.type) {

        case "SET_FOOTER_CONTACT":

            return {
                ...state,
                footerContactList: action.payload
            };

        default:
            return state
    }
}

export default FooterContactReducer;