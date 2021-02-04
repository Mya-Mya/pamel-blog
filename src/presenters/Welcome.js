import { appAction, SceneName } from "../modules/app";
import { fetchArticles } from "../utils/api";

export const WelcomeOperation = {
    onNextButtonPushed: () => dispatch => {//thunk
        dispatch(appAction.setSceneName(SceneName.ARTICLE_LIST))
        dispatch(fetchArticles())
    }
}