import { combineReducers } from "redux";
import homeReducer from '../pages/home/duck/homeReducer';
import loginReducer from '../pages/login/duck/loginReducer'

export const rootReducer = combineReducers({homeReducer,loginReducer})