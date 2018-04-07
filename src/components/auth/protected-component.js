import React from 'react';
import { AuthConsumer } from './auth-context';

const protectedComponent = (Component, FallbackComponent = null) => (
  <AuthConsumer>
    {({ check }) => (check() ? Component : FallbackComponent)}
  </AuthConsumer>
);

export default protectedComponent;
