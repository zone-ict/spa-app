// TODO: Investigate what's causing this error
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import * as fbAuth from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import fbConfig from '../../configs/firebase/firebase.config';
import HomeRoute from '../Home/Home.route';

function useFirebaseAuth() {
  const navigate = useNavigate();
  const startFirebaseUI = () => {
    fbConfig.fbAuthUI.start('#firebaseui-auth-container', {
      signInOptions: [
        fbAuth.EmailAuthProvider.PROVIDER_ID,
        fbAuth.GoogleAuthProvider.PROVIDER_ID,
        'apple.com',
      ],
      signInSuccessUrl: '/',
      callbacks: {
        signInSuccessWithAuthResult: (/** result, redirectUrl */) => {
          if (HomeRoute.path) navigate(HomeRoute.path);
          return true;
        },
      },
    });
  };

  return { startFirebaseUI };
}
export default function useAuthViewModel() {
  const firebaseAuth = useFirebaseAuth();

  return { ...firebaseAuth };
}
