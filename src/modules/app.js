import { createAction, createReducer } from "@reduxjs/toolkit";
export const SceneName = {
    WELCOME: 'WELCOME',
    ARTICLE_LIST: 'ARTICLE_LIST',
    ARTICLE_DETAIL: 'ARTICLE_DETAIL'
}

const initislState = {
    /**@type {string} */
    sceneName: SceneName.WELCOME,
    /**@type {string} */
    detailingArticleId: String()
}

export const appGetter = {
    /**@return {string} */
    sceneName: (state) => state.app.sceneName,
    /**@return {string} */
    detailingArticleId: (state) => state.app.detailingArticleId
}

export const appAction = {
    setSceneName: createAction('app/setSceneName', sceneName => ({ payload: sceneName })),
    setDetailingArticleId: createAction('app/setDetailingArticleId', articleId => ({ payload: articleId }))
}

export const appReducer = createReducer(initislState, builder => {
    builder
        .addCase(appAction.setSceneName, (state, action) => {
            state.sceneName = action.payload;
        })
        .addCase(appAction.setDetailingArticleId, (state, action) => {
            state.detailingArticleId = action.payload;
        })
});
