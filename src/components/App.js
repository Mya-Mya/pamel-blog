import { Box } from "@material-ui/core";
import { SceneName } from "../modules/app";
import Welcome from './Welcome';
import ArticleList from './ArticleList';
import ArticleDetail from "./ArticleDetail";

import { useSelector } from "react-redux";
import { AppSelector } from "../presenters/App";

const getContainerBySceneName = (sceneName) => {
  switch (sceneName) {
    case SceneName.WELCOME:
      return <Welcome />
    case SceneName.ARTICLE_LIST:
      return <ArticleList />
    case SceneName.ARTICLE_DETAIL:
      return <ArticleDetail />
    default:
      break;
  }
}

export default () => {
  const sceneName = useSelector(AppSelector.getSceneName);
  return (
    <Box>
      {getContainerBySceneName(sceneName)}
    </Box>
  );
}