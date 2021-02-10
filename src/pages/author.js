import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import AuthorTemplate from '../templates/AuthorTemplate';

const AuthorRouter = () => {
  return (
    <Router>
      <Route path="/author/:slug">
        <AuthorTemplate />
      </Route>
    </Router>
  );
};

export default AuthorRouter;
