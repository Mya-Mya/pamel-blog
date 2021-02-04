import axios from "axios";
import { articlesAction } from "../modules/articles";
export const fetchArticles = () => {
    return dispatch => {
        dispatch(articlesAction.clearArticle());
        dispatch(articlesAction.fetchLoading());
        axios.get('https://pamelblog.microcms.io/api/v1/articles', {
            headers: { 'X-API-KEY': '2503e620-d51e-400d-b3ab-87eda41bc60d' }
        }).then(response => {
            //取得したものを正規化する
            const datas = response.data.contents;
            datas.forEach(data => {
                const { id, author, updatedAt, title, content } = data;
                dispatch(articlesAction.addArticle(id, author, updatedAt, title, content));
            })
            dispatch(articlesAction.fetchPending());
        }).catch(reason => {
            dispatch(articlesAction.fetchError());
        }).finally(() => { });
    }
}