import { appAction, SceneName } from "../modules/app";
import { articlesGetter } from "../modules/articles";
import { fetchArticles } from "../utils/api";
import parseDate from "../utils/parseDate";

export const ArticleListSelector = {
    getArticles: state => {
        const articleIds = articlesGetter.articleIds(state);
        const entities = articlesGetter.entities(state);
        return articleIds.map(articleId => {
            const entity = entities[articleId];
            const { year, month, date } = parseDate(entity.updatedAt);
            return {
                articleId: entity.articleId,
                author: entity.author,
                title: entity.title,
                year, month, date,
            }
        })
    }
}

export const ArticleListOperator = {
    onArticlePushed: (articleId) => dispatch => {
        dispatch(appAction.setDetailingArticleId(articleId));
        dispatch(appAction.setSceneName(SceneName.ARTICLE_DETAIL))
    },
    onRefreshPushed: () => dispatch => {
        dispatch(fetchArticles());
    }
}