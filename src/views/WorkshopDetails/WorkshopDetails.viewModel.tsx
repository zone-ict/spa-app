import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ActivityDetailsRoute from '../ActivityDetails/ActivityDetails.route';

function useNavigationHandler() {
  const navigate = useNavigate();

  const goToMaps = () => {
    /** TODO */
  };

  const callWorkshop = () => {
    /** TODO */
  };

  const goToLink = () => {
    /** TODO */
  };

  const goToActivityDetail = useCallback(
    (id: string) => {
      if (!ActivityDetailsRoute.path) return;
      navigate(ActivityDetailsRoute.path.replace(':id', id));
    },
    [navigate],
  );

  return {
    goToMaps,
    callWorkshop,
    goToLink,
    goToActivityDetail,
  };
}

export default function useWorkshopDetailsViewModel() {
  const navigations = useNavigationHandler();

  return { ...navigations };
}
