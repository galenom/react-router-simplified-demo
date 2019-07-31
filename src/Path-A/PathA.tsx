import React, { FunctionComponentElement } from 'react';
import { Route, Switch } from 'react-router';
import { PathADetail } from './Path-A-Detail';

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
          render={() => <h2>Path A Landing</h2>}
        />

        {/* DETAIL View */}
        <Route
          // Use exact here to prevent this from being a valid url, /path-a/1234/this-doesnt-belong-here
          // exact
          path={`${match.url}/:customPath`}
          render={(routerProps) => {
            console.log('routerProps', routerProps);
            // continue passing routerProps to child that will consume the url params
            return <PathADetail {...routerProps} />
          }}
        />
        {/* Catchall Route for `/path-a/*` */}
        <Route
          exact
          render={() => <h3 style={{ color: 'green' }}>Invalid Path-A path</h3>}
        />
      </Switch>
    </>
  )
}