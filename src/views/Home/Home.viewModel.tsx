import { useState } from 'react';
import * as fbAuth from 'firebase/auth';
import fbConfig from '../../configs/firebase/firebase.config';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  const login = () => {
    fbConfig.fbAuthUI.start('#firebaseui-auth-container', {
      signInOptions: [
        fbAuth.EmailAuthProvider.PROVIDER_ID,
        fbAuth.GoogleAuthProvider.PROVIDER_ID,
        'apple.com',
      ],
      signInSuccessUrl: '/',
      callbacks: {
        signInSuccessWithAuthResult: (/** result, redirectUrl */) =>
          // console.log('logged IN', result)
          true,
      },
    });
  };
  const logout = () => {
    fbConfig.fbAuth
      .signOut()
      .then(() => {
        //
      })
      .catch(() => {
        //
      });
  };

  return {
    count,
    increment,
    decrement,
    reset,
    login,
    logout,
  };
}

export default function useHomeViewModel() {
  const counter = useCounter();

  return {
    counter,
  };
}
