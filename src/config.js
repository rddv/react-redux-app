import firebase from 'firebase'

export const appName = 'react-pro-ce05b'
export const firebaseConfig = {
    apiKey: "AIzaSyD9o-pEpdnHugP8Eili0MGa8wV4J4fUTvc",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: `${appName}.appspot.com`,
    messagingSenderId: "233266602112"
};
firebase.initializeApp(firebaseConfig);