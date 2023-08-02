const productsInitialState = {
    contactusBannerList: [],
    mapList: [],
    
}


const ContactReducer = (state = productsInitialState, action) => {

    switch (action.type) {

        case "SET_CONTACTUS_BANNER":

            return {
                ...state,
                contactusBannerList: action.payload
            };

        case "SET_MAP_DATA":

            return {
                ...state,
                mapList: action.payload
            };

        default:
            return state
    }
}

export default ContactReducer;