import React from 'react';
import { Link } from 'react-router-dom';
import Emoji from '../emoji';

const LinkPath = ({ to }) => (
  <Link to={to}>
    <code>{to}</code>
  </Link>
);

const Secure = () => (
  <section className="section">
    <div className="container">
      <h1 className="title">
        <Emoji value="🔐" label="lock" /> Secure Page
      </h1>
      <hr />
      <div className="content">
        <p>
          This page is only accessible if you're logged in. Try to access the{' '}
          <LinkPath to="/login" /> page while you're logged in, you will be
          redirected back to this
          <LinkPath to="/secure" /> page.
        </p>
      </div>
    </div>
  </section>
);

export default Secure;
