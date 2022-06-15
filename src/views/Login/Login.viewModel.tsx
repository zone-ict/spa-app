import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useEffect } from 'react';
import { fbAuthUI } from '../../services/firebase/firebase.service';

export default function useLoginViewModel() {
  useEffect(() => {
    fbAuthUI.start('#firebaseui-auth-container', {
      signInOptions: [EmailAuthProvider.PROVIDER_ID, GoogleAuthProvider.PROVIDER_ID, 'apple.com'],
      signInSuccessUrl: '/workshops',
      callbacks: {
        signInSuccessWithAuthResult: (/** result, redirectUrl */) =>
          // console.log('logged IN', result)
          true,
      },
    });
  }, []);

  return null;
}
