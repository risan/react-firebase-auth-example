class Auth {
  static user = null;

  static check() {
    return Auth.user !== null;
  }

  static guest() {
    return !Auth.check();
  }

  static login({ email, password }) {
    Auth.user = null;

    return new Promise((resolve, reject) =>
      setTimeout(() => {
        if (email === 'john@example.com' && password === 'secret') {
          Auth.user = { id: 1, email };

          return resolve(Auth.user);
        }

        reject(new Error('Email and password do not match.'));
      }, 500)
    );
  }

  static logout() {
    return new Promise((resolve, reject) => {
      Auth.user = null;

      resolve(true);
    });
  }
}

export default Auth;
