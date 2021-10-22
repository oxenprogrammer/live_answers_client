import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { Typography, makeStyles } from "@material-ui/core";

import { AnswerForm } from './AnswerForm';
import { AnswerList } from './AnswerList';

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    backgroundColor: "#0889C6",
    justifyContent: "center",
  },
  link: {
    padding: "0.6rem",
    textDecoration: "none",
    fontSize: "1.4rem",
    color: "#ffffff",
    fontWeight: "bold",
    "&:hover": {
      color: "#fff34d",
      fontSize: "1.42rem",
    }
  }
}))

function App() {
  const classes = useStyles();
  return (
    <Router>
      <>
        <Typography className={classes.root}>
          <Link className={classes.link}  to="/">
            Question
          </Link>
          <Link className={classes.link}  to="/answers">
            Top Answers
          </Link>
        </Typography>
      </>
      <Switch>
        <Route path="/" exact component={AnswerForm} />
        <Route path="/answers" exact component={AnswerList} />
      </Switch>
    </Router>
  );
}

export default App;
