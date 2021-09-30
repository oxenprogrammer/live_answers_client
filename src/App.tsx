import './App.css';

import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import { AnswerForm } from './AnswerForm';
import { AnswerList } from './AnswerList';
import { Typography } from '@mui/material';

function App() {
  return (
    <Router>
      <>
        <Typography>
          <Link  to="/">
            Question
          </Link>
          <Link  to="/answers">
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
