import React from 'react';
import { Link } from 'react-router-dom';
import Emoji from '../emoji';

const LinkPath = ({ to }) => (
  <Link to={to}>
    <code>{to}</code>
  </Link>
);

const Home = () => (
  <section className="section">
    <div className="container">
      <h1 className="title">
        <Emoji value="⚛️" label="react" /> React +{' '}
        <Emoji value="🔥" label="fire" /> Firebase Auth
      </h1>
      <hr />
      <div className="content">
        <p>
          React application example using{' '}
          <a href="https://reacttraining.com/react-router/">React Router</a> and{' '}
          <a href="https://firebase.google.com/docs/auth/">
            Firebase Authentication
          </a>.
        </p>
        <p>
          Visit the <LinkPath to="/signup" /> page to create a new account. If
          you already have one, go to the <LinkPath to="/login" /> page to
          authenticate yourself.
        </p>
        <p>
          Once you've logged in, you'll be able to access the protected
          <LinkPath to="/secure" /> page.
        </p>
        <div className="buttons">
          <Link to="/signup" className="button is-link">
            Create New Account
          </Link>
          <Link to="/login" className="button is-link is-outlined">
            Login
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
