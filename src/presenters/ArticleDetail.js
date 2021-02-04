import { appAction, appGetter, SceneName } from "../modules/app"
import { articlesGetter } from "../modules/articles";
import parseDate from "../utils/parseDate";
export const ArticleDetailSelector = {
    getDetailingArticle: (state) => {
        const articleId = appGetter.detailingArticleId(state);
        const entity = articlesGetter.entities(state)[articleId];
        const { year, month, date } = parseDate(entity.updatedAt);
        return {
            articleId: entity.articleId,
            author: entity.author,
            title: entity.title,
            year, month, date,
            content: entity.content
        }
    }
}
export const ArticleDetailOperation = {
    onBackButtonPushed: () => appAction.setSceneName(SceneName.ARTICLE_LIST)
}