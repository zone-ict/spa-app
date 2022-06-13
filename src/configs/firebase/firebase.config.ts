// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import * as firebaseui from 'firebaseui';

import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAt1_wPjLp7sttnOfzNldfzZUzFsNHKfAg',
  authDomain: 'zone-ict2.firebaseapp.com',
  projectId: 'zone-ict2',
  storageBucket: 'zone-ict2.appspot.com',
  messagingSenderId: '131044277100',
  appId: '1:131044277100:web:1569a4a7cf1bc0c2d95149',
  measurementId: 'G-SXWVWN942B',
};

const fbApp = initializeApp(firebaseConfig);
const fbauth = getAuth(fbApp);
const fbAuthUI = new firebaseui.auth.AuthUI(fbauth);

const fbConfig = {
  fbApp,
  fbauth,
  fbAuthUI,
};

export default fbConfig;
