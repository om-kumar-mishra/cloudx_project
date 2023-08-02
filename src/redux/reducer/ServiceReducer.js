const productsInitialState = {
    serviceList: [],
    serviceBannerList: [],
    serviceHeadingList: [],
    
}


const ServiceReducer = (state = productsInitialState, action) => {

    switch (action.type) {
        case "SET_SERVICE":

            return {
                ...state,
                serviceList: action.payload
            };

        case "SET_SERVICEBANNER":

            return {
                ...state,
                serviceBannerList: action.payload
            };

        case "SET_SERVICEHEADING":

            return {
                ...state,
                serviceHeadingList: action.payload
            };

        default:
            return state
    }
}

export default ServiceReducer;