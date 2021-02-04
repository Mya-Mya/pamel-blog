import { createAction, createReducer } from "@reduxjs/toolkit";
export const FetchStatus = {
    PENDING: 'PENDNIG',
    LOADING: 'LOADING',
    ERROR: 'ERROR',
}

const initialState = {
    /**@type {string} */
    fetchStatus: FetchStatus.PENDING,
    /**@type {string[]} */
    articleIds: [],
    /**@type {Object<string,{articleId:string,author:string,content:string,title:string,updateAt:string}>} */
    entities: {}
}

export const articlesGetter = {
    /**@return {string} */
    fetchStatus: state => state.articles.fetchStatus,
    /**@return {string[]} */
    articleIds: state => state.articles.articleIds,
    /**@return {Object<string,{articleId:string,author:string,content:string,title:string,updateAt:string}>} */
    entities: state => state.articles.entities
}

export const articlesAction = {
    addArticle: createAction('articles/addArticles', (articleId, author, updatedAt, title, content) => ({ payload: { articleId, author, updatedAt, title, content } })),
    fetchPending: createAction('articles/fetchPending'),
    fetchLoading: createAction('articles/fetchLoading'),
    fetchError: createAction('articles/fetchError')
}

export const articlesReducer = createReducer(initialState, builder => {
    builder.addCase(articlesAction.addArticle, (state, action) => {
        const { articleId, author, content, title, updatedAt } = action.payload;
        state.articleIds.push(articleId);
        state.entities[articleId] = { articleId, author, content, title, updatedAt }
    })
        .addCase(articlesAction.fetchPending, (state, action) => { state.fetchStatus = FetchStatus.PENDING })
        .addCase(articlesAction.fetchLoading, (state, action) => { state.fetchStatus = FetchStatus.LOADING })
        .addCase(articlesAction.fetchError, (state, action) => { state.fetchStatus = FetchStatus.ERROR })
});