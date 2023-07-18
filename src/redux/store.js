import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from "./reducers/reducers"
import { composeWithDevTools } from "redux-devtools-extension"


// Create the Redux store
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;