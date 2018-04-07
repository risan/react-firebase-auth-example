import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import protectedComponent from './protected-component';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      protectedComponent(<Component {...props} />, <Redirect to="/login" />)
    }
  />
);

export default ProtectedRoute;
