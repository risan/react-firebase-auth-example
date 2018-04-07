import firebase from 'firebase';

export default firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY
});

export const auth = firebase.auth();
