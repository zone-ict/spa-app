import { useCallback } from 'react';

function useNavigationHandler() {
  const goToMaps = () => {
    /** TODO */
  };

  const callWorkshop = () => {
    /** TODO */
  };

  const goToLink = () => {
    /** TODO */
  };

  const goToActivityDetail = useCallback(() => {
    /** TODO */
  }, []);

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
