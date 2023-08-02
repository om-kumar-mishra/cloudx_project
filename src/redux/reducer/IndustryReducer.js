const productsInitialState = {
    industryList: [],
    industryheadingList: [],
    industrybannerList: [],
    
}


const IndustryReducer = (state = productsInitialState, action) => {

    switch (action.type) {
        case "SET_INDUSTRY":

            return {
                ...state,
                industryList: action.payload
            };
        case "SET_INDUSTRYHEADING":

            return {
                ...state,
                industryheadingList: action.payload
            };
        case "SET_INDUSTRYBANNER":

            return {
                ...state,
                industrybannerList: action.payload
            };

        default:
            return state
    }
}

export default IndustryReducer;