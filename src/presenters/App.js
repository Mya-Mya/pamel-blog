import { connect } from "react-redux";
import AppComponent from '../components/App';
import { appAction as appAction, appGetter } from "../modules/app";
export const AppSelector = {
    getSceneName: appGetter.sceneName
}