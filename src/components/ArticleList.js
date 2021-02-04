import { Box, Card, makeStyles, Paper, Typography, ListItem, ListItemText, Button } from "@material-ui/core"
import { ArticleListOperator, ArticleListSelector } from "../presenters/ArticleList";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
const useStyle = makeStyles(theme => ({
    article: {
        margin: theme.spacing(2),
    },
    element: {
        margin: theme.spacing(1),
        maxWidth: "100%"
    }
}));

const ArticlePreview = (articleId, author, title, year, month, date, handleClick) => (
    <ListItem key={articleId} button onClick={() => handleClick()}>
        <ListItemText
            primary={title}
            secondary={
                <React.Fragment>
                    <Typography variant="body2">{author}</Typography>
                    <Typography>{year}/{month}/{date}</Typography>
                </React.Fragment>
            }
        />
    </ListItem>
)

export default () => {
    const articles = useSelector(ArticleListSelector.getArticles);
    const dispatch = useDispatch();
    const classes = useStyle();
    return <Box>
        <Button variant="outlined" onClick={() => dispatch(ArticleListOperator.onRefreshPushed())}>更新</Button>
        {articles.map(article => {
            const { articleId, author, title, year, month, date } = article;
            const handleClick = () => dispatch(ArticleListOperator.onArticlePushed(articleId));
            return ArticlePreview(articleId, author, title, year, month, date, handleClick);
        })}
    </Box>
}