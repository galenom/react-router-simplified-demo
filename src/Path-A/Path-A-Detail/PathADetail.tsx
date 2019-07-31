import React, { FunctionComponentElement } from 'react';
import { Switch, Route } from 'react-router';

export const PathADetail = ({ match }: any): FunctionComponentElement<{}>  => {
  return (
    <>      
      <Switch>
        <Route
          // Use exact here to prevent this from being a valid url, /path-a/1234/this-doesnt-belong-here
          exact
          path={match.url}
          /* Pull out params based on key that was declared in <Route />, e.g. :customPath */
          /* Can only be camelCase from what I could see */
          render={() => <h5>I am viewing the details for {match.params.customPath}</h5>}
        />

        <Route
          exact
          path={`${match.url}/extra`}
          render={() => <h3>Something extra</h3>}
        />

        <Route
          render={() => <p>Nested routes should handle invalid path since their parents don't use <code>exact</code> keyword</p>}
        />
      </Switch>
    </>
  )
}