import React, { FunctionComponentElement } from 'react';
import { Route, Switch } from 'react-router';
import { PathADetail } from './Path-A-Detail';
import { Link } from 'react-router-dom';

export const PathA = ({ match }: any): FunctionComponentElement<{}> => {
  console.log('PathA match: ', match);
  return (
    <>
      <Switch>
        {/* LANDING */}
        <Route
          exact
          /* Use match.url instead of match.path */
          path={`${match.url}`}
          render={() => (
            <>
              <h1>Path A Landing</h1>
              <ul>
                <li><Link to="path-a/1234">path-a/1234</Link></li>
                <li><Link to="path-a/92">path-a/92</Link></li>
                <li><Link to="path-a/92/extra">path-a/92/extra</Link></li>
                <li><Link to="path-a/2838/not-a-valid-route">path-a/2838/not-a-valid-route</Link></li>
                <li><Link to="path-a/not-a-number">path-a/not-a-number</Link></li>
              </ul>
            </>
          )}
        />

        {/* DETAIL View */}
        <Route
          // Regex used here to only allow numbers in the :customPath path variable
          path={`${match.url}/:customPath([0-9]+)`}
          // react-router will pass in routerProps like match, see PathADetail.tsx
          // This can be used by PathADetail to use :customPath as needed
          component={PathADetail}
        />

        {/* Catchall Route for `/path-a/*` */}
        <Route
          render={() => <h3 style={{ color: 'green' }}>Invalid Path-A path</h3>}
        />
      </Switch>
    </>
  )
}