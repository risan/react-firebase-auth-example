import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import guestComponent from './guest-component';

const GuestRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      guestComponent(<Component {...props} />, <Redirect to="/secure" />)
    }
  />
);

export default GuestRoute;
