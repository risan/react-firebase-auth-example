import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import protectedComponent from './auth/protected-component';
import Emoji from './emoji';
import { auth } from '../util/firebase';

const NavbarBurger = ({ active, onClick }) => (
  <div
    className={`navbar-burger burger ${active ? 'is-active' : ''}`}
    onClick={onClick}
  >
    <span />
    <span />
    <span />
  </div>
);

const NavbarLink = ({ children, ...rest }) => (
  <NavLink className="navbar-item" activeClassName="is-active" {...rest}>
    {children}
  </NavLink>
);

class Navbar extends Component {
  state = {
    isMenuExpanded: false
  };

  render() {
    const { isMenuExpanded } = this.state;

    return (
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <h1>
                <Emoji value="🔥" label="fire" /> React Firebase Auth
              </h1>
            </Link>
            <NavbarBurger
              active={isMenuExpanded}
              onClick={() => this.setState({ isMenuExpanded: !isMenuExpanded })}
            />
          </div>

          <div className={`navbar-menu ${isMenuExpanded ? 'is-active' : ''}`}>
            <div className="navbar-start">
              <NavbarLink to="/" exact>
                Home
              </NavbarLink>
              {protectedComponent(
                <NavbarLink to="/secure" exact>
                  Secure
                </NavbarLink>
              )}
            </div>
            <div className="navbar-end">
              {protectedComponent(
                <a className="navbar-item" onClick={() => auth.signOut()}>
                  Logout
                </a>,
                <NavbarLink to="/login">Login</NavbarLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
