import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { fbAuth } from '../../services/firebase/firebase.service';
import LoginRoute from '../Login/Login.route';
import WorkshopsRoute from '../Workshops/Workshops.route';

export default function useAuthLoadingViewModel() {
  const [user, loading] = useAuthState(fbAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) {
      if (!WorkshopsRoute.path) return;
      navigate(WorkshopsRoute.path);
    } else {
      if (!LoginRoute.path) return;
      navigate(LoginRoute.path);
    }
  }, [loading, navigate, user]);
}
