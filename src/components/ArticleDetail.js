import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { ArticleDetailSelector, ArticleDetailOperation } from "../presenters/ArticleDetail";
const renderHTML = (html, className) => (
    <div className={className}>
        <Typography dangerouslySetInnerHTML={{ __html: html }} />
    </div>
)

const useStyles = makeStyles(theme => ({
    element: {
        padding: theme.spacing(2)
    }
}))

export default () => {
    const article = useSelector(ArticleDetailSelector.getDetailingArticle);
    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <Box>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <Button variant="outlined" onClick={() => dispatch(ArticleDetailOperation.onBackButtonPushed())}>戻る</Button>
                    <Typography variant="h5" className={classes.element}>{article.title}</Typography>
                    <Typography variant="body2">{article.year}/{article.month}/{article.date}</Typography>
                    <Typography variant="body1">{article.author}</Typography>
                </Grid>

                <Grid item xs={12} sm={8}>
                    {renderHTML(article.content, classes.element)}
                </Grid>
            </Grid>
        </Box>
    );
}