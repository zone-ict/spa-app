import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { fbAuth } from '../../services/firebase/firebase.service';
import LoginRoute from '../../views/Login/Login.route';

export function useRedirectionBasedOnSession() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(fbAuth);

  useEffect(() => {
    if (loading) return;

    if (!user) {
      if (!LoginRoute.path) return;
      navigate(LoginRoute.path);
      window.history.replaceState({}, document.title);
    }
  }, [loading, navigate, user]);
}

export default function useAuth() {
  useRedirectionBasedOnSession();
}
