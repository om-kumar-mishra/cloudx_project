// import axios from 'axios';


export const getBanner = () => {
    return async function (dispatch) {
        await fetch('http://alobhaitsolution.com:1997/api/banner', { method: "GET" })
            .then((res) => {
                res.json().then((banner) => {
                    dispatch(setBanner(banner.data));
                    // console.log("banner in dispatch action:", banner);
                })
            })

    }
}
export const setBanner = (banner) => {
    if (banner) {
        return {
            type: "SET_BANNER",
            payload: banner,
        }
    }
}

export const getWhatwecan = () => {
    return async function (dispatch) {
        await fetch('http://alobhaitsolution.com:1997/api/see-what-we-can', { method: "GET" })
            .then((res) => {
                res.json().then((seewhatwecan) => {
                    dispatch(setwhatwecan(seewhatwecan.data));
                    // console.log("in action: what we can:",seewhatwecan);
                })
            })
    }
}
export const setwhatwecan = (whatwecan) => {
    if (whatwecan) {
        return {
            type: "SET_WHATWECAN",
            payload: whatwecan,
        }
    }
}
export const getRemoteStaff = () => {
    return async function (dispatch) {
        await fetch('http://alobhaitsolution.com:1997/api/remote-staff', { method: "GET" })
            .then((res) => {
                res.json().then((seeremotestaff) => {
                    dispatch(setRemoteStaff(seeremotestaff.data));
                    // console.log("in action: REMOTE STAFF:",seeremotestaff);
                })
            })
    }
}

export const setRemoteStaff = (remotestaff) => {
    if (remotestaff) {
        return {
            type: "SET_REMOTESTAFF",
            payload: remotestaff,
        }
    }
}
export const getDiscoverArea = () => {
    return async function (dispatch) {
        await fetch('http://alobhaitsolution.com:1997/api/how-we-make', { method: "GET" })
            .then((res) => {
                res.json().then((discoverarea) => {
                    dispatch(setDiscoverArea(discoverarea.data));
                    // console.log("in action: Discover Area:",discoverarea);
                })
            })
    }
}

export const setDiscoverArea = (discoverarea) => {
    if (discoverarea) {
        return {
            type: "SET_DISCOVERAREA",
            payload: discoverarea,
        }
    }
}

export const getClientList = () => {
    return async function (dispatch) {
        await fetch('http://alobhaitsolution.com:1997/api/we-belive-in', { method: "GET" })
            .then((res) => {
                res.json().then((client) => {
                    dispatch(setClientList(client.data));
                    // console.log("in action: Client List:",client);
                })
            })
    }
}

export const setClientList = (client) => {
    if (client) {
        return {
            type: "SET_CLIENTLIST",
            payload: client,
        }
    }
}

export const getTeam = () => {
    return async function (dispatch) {
        await fetch('http://alobhaitsolution.com:1997/api/our-awesome-team', { method: "GET" })
            .then((res) => {
                res.json().then((team) => {
                    dispatch(setTeam(team.data));
                    // console.log("in action: Team List:",team);
                })
            })
    }
}

export const setTeam = (team) => {
    if (team) {
        return {
            type: "SET_TEAM",
            payload: team,
        }
    }
}

export const getHappyCustomers = () => {
    return async function (dispatch) {
        await fetch('http://alobhaitsolution.com:1997/api/happy-customer', { method: "GET" })
            .then((res) => {
                res.json().then((happyCustomer) => {
                    dispatch(setHappyCustomers(happyCustomer.data));
                    // console.log("in action: Customer List:",happyCustomer);
                })
            })
    }
}

export const setHappyCustomers = (happyCustomer) => {
    if (happyCustomer) {
        return {
            type: "SET_CUSTOMER",
            payload: happyCustomer,
        }
    }
}

export const getCounters = () => {
    return async function (dispatch) {
        await fetch('http://alobhaitsolution.com:1997/api/relax-we-have', { method: "GET" })
            .then((res) => {
                res.json().then((counter) => {
                    dispatch(setCounters(counter.data));
                    // console.log("Counter in dispatch action:", counter);
                })
            })

    }
}

export const setCounters = (counter) => {
    if (counter) {
        return {
            type: "SET_COUNTER",
            payload: counter,
        }
    }
}
//eng get list

//delete
// export const fetchDelete = (props) => {
//     // console.log("delete id==",props)
//     return async function (dispatch) {
//         fetch("http://localhost:301/user-delete?id=" + props, {
//             method: "DELETE"
//         }).then((results) => {
//             results.json().then((res) => {

//                 localStorage.setItem("toast_message", res.message)
//                 dispatch(setDelete(props))
//             })
//                 .catch((error) => {

//                 })

//         })


//     }
// }

// export const setDelete = (props = null) => {
//     if (props) {
//         return {
//             type: "DELETE_USER",
//             payload: props,
//         }
//     }
// }

// //end delete


// //add user
// export const addUser = (props) => {
//     console.log("add new user", props)

//     return async function (dispatch) {

//         const res = await axios.post(
//             "http://localhost:301/user-add",
//             props
//         );
//         console.log(res)

//         if (res.data) {
//             localStorage.setItem("toast_message", res.message)
//             dispatch(AddUser(props))
//         }
//         else {
//             localStorage.setItem("toast_message", res.message)
//         }

//     }
// }

// export const AddUser = (props) => {
//     console.log("image ===", props.get("image"))
//     let file = props.get("image")
//     let image = `/uploaded-files/${file.name}`
//     let name = props.get("name")
//     let email = props.get("email")
//     let age = props.get("age")
//     let password = props.get("password")

//     let obj = { name, email, age, password, image }
//     if (props) {
//         return {
//             type: "ADD_USER",
//             payload: obj,
//         }

//     }

// }

// // end add user






// //get single  user

// export const getSingleUser = (props) => {
//     // console.log("delete id==",props)
//     return async function (dispatch) {
//         fetch("http://localhost:301/single-user?id=" + props)
//             .then((results) => {
//                 results.json().then((resp) => {
//                     console.log("select single user resp==", resp.data)
//                     dispatch(setSingleUser(resp.data))
//                 })
//             })
//     }

// }

// export const setSingleUser = (props = null) => {
//     if (props) {
//         return {
//             type: "GET_SINGLE_USER",
//             payload: props,
//         }
//     }
// }


// //end get user user




// //update
// export const updateUser = (props) => {
//     console.log("update id==", props.get("id"))
//     return async function (dispatch) {




//         try {
//             const res = await axios.put(
//                 "http://localhost:301/user-update?id=" + props.get("id"),
//                 props
//             );
//             console.log("json", res.json)
//             res.json().then((res) => {
//                 if (res.data) {
//                     localStorage.setItem("toast_message", res.message)
//                     dispatch(update_user(props))
//                 }
//                 else {
//                     localStorage.setItem("toast_message", res.message)
//                 }
//             })

//         } catch (ex) {
//             console.log(ex);
//         }



//     }

// }

// export const update_user = (props) => {

//     if (props) {
//         return {
//             type: "UPDATE_USER",
//             payload: props,
//         }
//     }
// }

// // end update




// //login
// export const User_Login = (props) => {

//     // let navigate = useNavigate();

//     return async function (dispatch) {
//         // localStorage.getItem("user_info")
//         fetch("http://localhost:301/user-login", {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(props)
//         }).then((res) => {
//             res.json().then((res) => {
//                 // console.log("login======",res.data)
//                 if (res.data) {
//                     localStorage.setItem("user_info", JSON.stringify(res.data))
//                     dispatch(setLogin(props))
//                 }
//                 // else{
//                 //     navigate("/login")
//                 // }


//             })

//         })


//     }
// }

// export const setLogin = (props = null) => {

//     if (props) {
//         return {
//             type: "LOGIN"

//         }
//     }
// }