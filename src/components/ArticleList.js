import { Box, makeStyles, Paper, Typography } from "@material-ui/core"
import { ArticleListSelector } from "../presenters/ArticleList";
import { useSelector } from "react-redux";
const useStyle = makeStyles(theme => ({
    article: {
        margin: theme.spacing(2),
    },
    element: {
        margin: theme.spacing(1)
    }
}));

export default () => {
    const articles = useSelector(ArticleListSelector.getArticles);

    const classes = useStyle();
    return <Box>
        {articles.map(article => {
            const { articleId, author, updateAt, title, content } = article;
            return (
                <Paper className={classes.article} key={articleId}>
                    <Typography variant="h5" className={classes.element}>{title}</Typography>
                    <Typography color="primary" className={classes.element}>{author}</Typography>
                    <Typography className={classes.element}>{content}</Typography>
                </Paper>
            )
        })}
    </Box>
}