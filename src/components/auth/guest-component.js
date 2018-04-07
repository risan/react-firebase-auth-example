import React from 'react';
import { AuthConsumer } from './auth-context';

const guestComponent = (Component, FallbackComponent = null) => (
  <AuthConsumer>
    {({ guest }) => (guest() ? Component : FallbackComponent)}
  </AuthConsumer>
);

export default guestComponent;
