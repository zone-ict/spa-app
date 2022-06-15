import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fbAuthUI } from '../../services/firebase/firebase.service';
import WorkshopsRoute from '../Workshops/Workshops.route';

export default function useLoginViewModel() {
  const navigate = useNavigate();

  useEffect(() => {
    fbAuthUI.start('#firebaseui-auth-container', {
      signInOptions: [EmailAuthProvider.PROVIDER_ID, GoogleAuthProvider.PROVIDER_ID, 'apple.com'],
      signInSuccessUrl: '/workshops',
      callbacks: {
        signInSuccessWithAuthResult: (/** result, redirectUrl */) => {
          if (WorkshopsRoute.path) navigate(WorkshopsRoute.path);
          return true;
        },
      },
    });
  }, [navigate]);

  return null;
}
