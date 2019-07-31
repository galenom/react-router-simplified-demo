import React, { ReactNode } from 'react';
import { Router, Link, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';

import { PathA } from './Path-A';

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
            path="/path-a" /* Should not use `${match.url}/` at root router level, only for relative paths in nested routes */
            component={PathA}
          />
          <Route
            exact
            path="/path-b"
            render={() => (<h1>Path B</h1>)}
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
