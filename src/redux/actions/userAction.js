import axios from 'axios'

import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
    // CLEAR_GET_USER_ERROR,
    // USER_RESET
    } from "../constants/userConstant"


export const getUsers = () => async (dispatch) => {
    console.log("get user action 1")
    dispatch({
        type: GET_USER_REQUEST
    })
    console.log("get user action 2")

    try {
        console.log("get user action 3")
        const { data } = await axios.get(`http://localhost:2000/api/users/user`)
        console.log('response in getuser action redux:', data)

        if (data?.data) {
            console.log('subID',data?.data)
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

