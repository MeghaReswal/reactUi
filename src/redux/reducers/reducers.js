import { combineReducers } from "redux";

import {
    getUsersReducer
} from './userReducer'


const reducers = combineReducers({
    // User
    usersGet: getUsersReducer
})


export default reducers