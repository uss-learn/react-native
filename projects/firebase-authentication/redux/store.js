import {applyMiddleware, combineReducers, createStore} from 'redux'
import appReducer from "./reducers/appReducers";
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
    users: appReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
