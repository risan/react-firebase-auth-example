import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './auth/auth-context';
import GuestRoute from './auth/guest-route';
import ProtectedRoute from './auth/protected-route';
import { Home, Login, Secure, Signup } from './pages';
import Navbar from './navbar';
import { auth } from '../util/firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.isGuest = this.isGuest.bind(this);
    this.login = this.login.bind(this);

    this.state = {
      loadingAuthState: false,
      auth: {
        user: null,
        check: this.isAuthenticated,
        guest: this.isGuest,
        login: this.login
      }
    };
  }

  isAuthenticated() {
    return this.state.auth.user !== null;
  }

  isGuest() {
    return !this.isAuthenticated();
  }

  login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  componentDidMount() {
    this.setState({ loadingAuthState: true }, () =>
      auth.onAuthStateChanged(user => {
        const auth = { ...this.state.auth, user };

        this.setState({
          loadingAuthState: false,
          auth
        });
      })
    );
  }

  render() {
    return (
      <AuthProvider value={this.state.auth}>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <GuestRoute path="/login" component={Login} />
            <GuestRoute path="/signup" component={Signup} />
            <ProtectedRoute path="/secure" component={Secure} />
            {this.state.loadingAuthState ? (
              <div className="loading-overlay">Loading</div>
            ) : null}
          </div>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
