import { connect } from "react-redux";
import ArticleListComponent from '../components/ArticleList';
import { articlesGetter } from "../modules/articles";

export const ArticleListSelector = {
    getArticles: state => {
        const articleIds = articlesGetter.articleIds(state);
        const entities = articlesGetter.entities(state);
        return articleIds.map(articleId => {
            const entity = entities[articleId];
            return {
                articleId: entity.articleId,
                author: entity.author,
                content: entity.content,
                title: entity.title,
                updateAt: entity.updateAt
            }
        })
    }
}