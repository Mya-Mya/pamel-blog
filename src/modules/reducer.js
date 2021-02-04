import { combineReducers } from "redux";
import { articlesReducer } from './articles';
import { appReducer } from './app';
export default combineReducers({
    articles: articlesReducer,
    app: appReducer
})