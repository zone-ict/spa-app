import { initializeApp } from 'firebase/app';
import {
  browserLocalPersistence,
  debugErrorMap,
  indexedDBLocalPersistence,
  initializeAuth,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import * as firebaseui from 'firebaseui';
import firebaseConfig from '../../configs/firebase/firebase.config';

export const fbApp = initializeApp(firebaseConfig);

export const fbAuth = initializeAuth(fbApp, {
  persistence: [indexedDBLocalPersistence, browserLocalPersistence],
  errorMap: debugErrorMap,
});
export const fbDb = getFirestore(fbApp);

export const fbAuthUI = new firebaseui.auth.AuthUI(fbAuth);
