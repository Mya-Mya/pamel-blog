import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { WelcomeOperation } from "../presenters/Welcome";
const useStyles = makeStyles(theme => ({
    title: {
        margin: theme.spacing(2)
    }
}))

export default (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Container style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Typography>ようこそ</Typography>
            <Typography variant="h3" color="primary" className={classes.title}>パメルブログ</Typography>
            <Button variant="outlined" onClick={() => dispatch(WelcomeOperation.onNextButtonPushed())}>はじめる</Button>
            <Typography>ボタンを押してはじめる</Typography>
        </Container>
    )
}