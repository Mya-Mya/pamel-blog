import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from './reducer';
export default configureStore({
    reducer,
    middleware: [thunk],
    devTools: [window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()]
});