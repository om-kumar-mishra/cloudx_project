const productsInitialState = {
    privacypolicyList: [],
    
}


const CMSReducer = (state = productsInitialState, action) => {

    switch (action.type) {

        case "SET_PRIVACY_POLICY":

            return {
                ...state,
                privacypolicyList: action.payload
            };

        default:
            return state
    }
}

export default CMSReducer;