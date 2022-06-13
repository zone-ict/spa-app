import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeRoute from '../Home/Home.route';

function useNavigationHandler() {
  const navigate = useNavigate();

  const navigateToWorkshops = useCallback(() => {
    if (!HomeRoute.path) return;
    navigate(HomeRoute.path);
  }, [navigate]);

  return { navigateToWorkshops };
}

export default function useBookingsViewModel() {
  const { navigateToWorkshops } = useNavigationHandler();

  return { navigateToWorkshops };
}
