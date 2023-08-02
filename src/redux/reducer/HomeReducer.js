

const productsInitialState = {
    bannerList: [],
    whatwedoList: [],
    remotestaffList: [],
    discoverareaList: [],
    clientList: [],
    teamList: [],
    cutomerList: [],
    counterList: [],
    // user: {}
}


const HomeReducer = (state = productsInitialState, action) => {

    switch (action.type) {
        case "SET_BANNER":

            return {
                ...state,
                bannerList: action.payload
            };

        case "SET_WHATWECAN":

            return {
                ...state,
                whatwedoList: action.payload
            };

        case "SET_REMOTESTAFF":
            return {
                ...state,
                remotestaffList: action.payload
            };

        case "SET_DISCOVERAREA":
            return {
                ...state,
                discoverareaList: action.payload
            };

        case "SET_CLIENTLIST":
            return {
                ...state,
                clientList: action.payload
            };

        case "SET_TEAM":
            return {
                ...state,
                teamList: action.payload
            };

        case "SET_CUSTOMER":
            return {
                ...state,
                customerList: action.payload
            };
        case "SET_COUNTER":
            return {
                ...state,
                counterList: action.payload
            };

        // case "DELETE_USER":
        //     let newList = state.list.filter((user) => user.id !== action.payload)
        //     return {
        //         ...state,
        //         list: newList
        //     }

        // case "ADD_USER":
        //     return {
        //         ...state,
        //         list: [...state.list, action.payload]
        //     }

        // case "GET_SINGLE_USER":
        //     return {
        //         ...state,
        //         user: action.payload
        //     }

        // case "UPDATE_USER":

        //     return {
        //         ...state

        //     }
        // case "LOGIN":
        default:
            return state
    }
}

export default HomeReducer;