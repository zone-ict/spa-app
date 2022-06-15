// TODO: Investigate what's causing this error
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import * as fbAuth from 'firebase/auth';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import fbConfig from '../../configs/firebase/firebase.config';
import AuthRoute from '../Auth/Auth.route';
import BookingsRoute from '../Bookings/Bookings.route';
import WorkshopDetailsRoute from '../WorkshopDetails/WorkshopDetails.route';

function useNavigationHandler() {
  const navigate = useNavigate();

  const navigateToBookings = useCallback(() => {
    if (!BookingsRoute.path) return;
    navigate(BookingsRoute.path);
  }, [navigate]);

  // TODO: Add ID as params to be passed to the workshop details page
  const navigateToWorkshopDetails = useCallback(
    (id: string) => {
      if (!WorkshopDetailsRoute.path) return;
      navigate(WorkshopDetailsRoute.path.replace(':id', id));
    },
    [navigate],
  );

  return { navigateToBookings, navigateToWorkshopDetails };
}

// TODO: Move this to Auth ViewModel
function useFirebaseAuth() {
  const navigate = useNavigate();

  const logout = () => {
    fbConfig.fbAuth
      .signOut()
      .then(() => {
        if (AuthRoute.path) navigate(AuthRoute.path);
      })
      .catch(() => {
        if (AuthRoute.path) navigate(AuthRoute.path);
      });
  };

  return { logout };
}

export default function useHomeViewModel() {
  const navigations = useNavigationHandler();
  const firebaseAuth = useFirebaseAuth();

  return { ...navigations, ...firebaseAuth };
}
