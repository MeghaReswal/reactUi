import axios from 'axios'

import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
    // CLEAR_GET_USER_ERROR,
    // USER_RESET
} from "../constants/userConstant"


export const getUsers = () => async (dispatch) => {
    const baseUrl = process.env.BASE_API_URL
    console.log("get user action 1", baseUrl)
    dispatch({
        type: GET_USER_REQUEST
    })
    console.log("get user action 2")

    try {
        console.log("get user action 3")
        const getUserUrl = `https://node-mongodb-api-bkin.onrender.com/api/users/user`

        // const config = {
        //     // method: "post",
        //     headers: {
        //         'content-type': 'application/json',
        //         // Authorization: `Bearer ${accessToken}`
        //     },
        // }
        const { data } = await axios.get(
            getUserUrl,
            // config
        )

        console.log('response in getuser action redux:', data)

        if (data?.data) {
            console.log('subID', data?.data)
            dispatch({
                type: GET_USER_SUCCESS,
                payload: data?.data
            })
        } else {
            dispatch({
                type: GET_USER_FAIL,
                payload: data?.data?.message
            })
        }
    } catch (error) {
        console.log('error data in getUser redux:', error)
        dispatch({
            type: GET_USER_FAIL,
            payload: error?.response?.data || error.message
        })
    }
}

