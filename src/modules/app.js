import { createAction, createReducer } from "@reduxjs/toolkit";
export const SceneName = {
    WELCOME: 'WELCOME',
    ARTICLE_LIST: 'ARTICLE_LIST'
}

const initislState = {
    /**@type {string} */
    sceneName: SceneName.WELCOME
}

export const appGetter = {
    /**@return {string} */
    sceneName: (state) => state.app.sceneName
}

export const appAction = {
    setSceneName: createAction('app/setSceneName', sceneName => ({ payload: sceneName }))
}

export const appReducer = createReducer(initislState, builder =>
    builder.addCase(appAction.setSceneName, (state, action) => {
        state.sceneName = action.payload;
    })
);
