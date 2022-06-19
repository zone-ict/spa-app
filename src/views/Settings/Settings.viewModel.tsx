import { useCallback } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { RootState } from '../../app/store/store.app';
import useAuth from '../../hooks/useAuth/useAuth.hook';
import useTranslator, { Availability } from '../../hooks/useTranslator/useTranslator.hook';
import { fbAuth } from '../../services/firebase/firebase.service';
import { settingsAction } from '../../stores/settings.store';
import BookingsRoute from '../Bookings/Bookings.route';
import LoginRoute from '../Login/Login.route';
import WorkshopsRoute from '../Workshops/Workshops.route';

function useLogoutHandler(navigate: NavigateFunction) {
  const handleLogout = useCallback(() => {
    fbAuth
      .signOut()
      .then(() => {
        if (!LoginRoute.path) return;
        navigate(LoginRoute.path, { replace: true });
      })
      .catch(() => {});
  }, [navigate]);

  return { handleLogout };
}

function useNavigationHandler() {
  useAuth();

  const navigate = useNavigate();

  const navigateToWorkshops = useCallback(() => {
    if (!WorkshopsRoute.path) return;
    navigate(WorkshopsRoute.path);
  }, [navigate]);

  const navigateToBookings = useCallback(() => {
    if (!BookingsRoute.path) return;
    navigate(BookingsRoute.path);
  }, [navigate]);

  return { navigateToWorkshops, navigateToBookings, navigate };
}

function useCurrentUserData() {
  const [user] = useAuthState(fbAuth);

  return {
    name: user?.displayName,
    email: user?.email,
  };
}

function useLanguageHandlers() {
  const currentLanguage = useSelector((state: RootState) => state.settings.currentLanguage);

  const dispatch = useDispatch();

  const handleChangeLanguage = useCallback(
    (language: Availability) => {
      dispatch(settingsAction.changeLanguage({ language }));
    },
    [dispatch],
  );

  return {
    currentLanguage,
    handleChangeLanguage,
  };
}

export default function useSettingsViewModel() {
  useAuth();
  const languageHandlers = useLanguageHandlers();
  const translator = useTranslator();
  const navigations = useNavigationHandler();
  const logoutHandler = useLogoutHandler(navigations.navigate);
  const currentUserData = useCurrentUserData();

  return { ...navigations, ...logoutHandler, ...languageHandlers, currentUserData, translator };
}
