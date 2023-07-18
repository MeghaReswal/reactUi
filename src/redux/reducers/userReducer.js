import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
    CLEAR_GET_USER_ERROR,
    USER_RESET
    
    } from "../constants/userConstant"

export const getUsersReducer = (state = {users: []}, action) => {
    // console.log("payload", action)
    switch (action.type) {
        case GET_USER_REQUEST:
            return {
                loading: true,
            }
        case GET_USER_SUCCESS:
            return {
                loading: false,
                success: true, 
                users : action.payload
            }
        case GET_USER_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_GET_USER_ERROR:
            return {
                ...state,
                error: null
            }

        case USER_RESET:
            return {}

        default:
            return state
    }
}