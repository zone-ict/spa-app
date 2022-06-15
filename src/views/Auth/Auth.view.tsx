import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import 'twin.macro';
import { useNavigate } from 'react-router-dom';
import fbConfig from '../../configs/firebase/firebase.config';
import useAuthViewModel from './Auth.viewModel';
import HomeRoute from '../Home/Home.route';

export default function AuthView() {
  const navigate = useNavigate();

  const { startFirebaseUI } = useAuthViewModel();
  const [user /** , loading, error */] = useAuthState(fbConfig.fbAuth);

  useEffect(() => {
    if (user && HomeRoute.path) {
      navigate(HomeRoute.path);
    }
  }, [user, navigate]);

  useEffect(() => {
    startFirebaseUI();
    // FIXME: need to call startFirebaseUI to display UI
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div id="firebaseui-auth-container" />;
}
