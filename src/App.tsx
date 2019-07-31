import React, { ReactNode } from 'react';
import { Router, Link, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';

import { PathA } from './Path-A';

/*
ROOT LEVEL ROUTES
Here were are declaring the top level routes of our app.
- Only paths immediately following the domain name should be declared here.
---- localhost:3000/
---- localhost:3000/path-a
---- localhost:3000/path-b
---- + default/redirect for invalid routes

- exact keyword should be used only if the route will not have nested routes within it's child/component tree.
---- If nested routes needed, the child component should handle default/redirect for invalid routes

- avoid using match.url at this level. 
  It can be used but it is redundant as we are at the root. Best used for relative paths in nested routes
*/

const AppRouter: React.FC = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Router history={createBrowserHistory()}>
        {/* "Nav" */}
        {children}

        <Switch>
          <Route
            exact
            path="/"
            render={() => (<h1>Home</h1>)}
          />

          <Route
            /* PathA component will render additonal paths within it */
            // exact /* Should not use EXACT if there will be additional children paths within PathA component, e.g. /path-a/:customPath */
            // PathA should provide default route for invalid urls, e.g. /path-a/somethingcrazythatdoesntbelong
            path="/path-a" /* Avoid using `${match.url}/` at root router level, only for relative paths in nested routes */
            component={PathA}
          />

          <Route
            exact
            path="/path-b"
            render={() => (<h1>Path B Landing</h1>)}
          />

          <Route
            render={() => (<h1 style={{ color: 'red' }}>Route does not exist</h1>)}
          />
        </Switch>
      </Router>
    </>
  )
}

const App: React.FC = () => {
  return (
    <AppRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/path-a">Path-A</Link></li>
          <li><Link to="/path-b">Path-B</Link></li>
        </ul>
      </nav>
    </AppRouter>
  );
}

export default App;
