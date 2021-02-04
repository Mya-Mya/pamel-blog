import { connect } from "react-redux";
import { appGetter } from "../modules/app";
export const AppSelector = {
    getSceneName: appGetter.sceneName
}