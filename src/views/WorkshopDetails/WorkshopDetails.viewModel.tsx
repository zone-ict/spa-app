import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { Workshop } from '../../models/Workshop.model';
import { getWorkshopDetail } from '../../services/firebase/collections/workshops.collection';
import ActivityDetailsRoute from '../ActivityDetails/ActivityDetails.route';

function useData() {
  const { pathname } = useLocation();

  const workshopUid = pathname.split('/')[2];

  const { data, isLoading } = useQuery(['workshop', workshopUid], () =>
    getWorkshopDetail(workshopUid),
  );

  return { workshopData: data, workshopIsLoading: isLoading };
}

function useNavigationHandlers(workshopData: Workshop | undefined) {
  const navigate = useNavigate();

  const goToMaps = () => {
    if (!workshopData) return;
    window.open(workshopData.google_maps_url, '_blank');
  };

  const callWorkshop = () => {
    if (!workshopData) return;
    window.open(`tel:${workshopData.phone_number}`, '_blank');
  };

  const goToLink = () => {
    if (!workshopData) return;
    window.open(workshopData.shop_url, '_blank');
  };

  const goToActivityDetail = useCallback(
    (id: string) => {
      if (!ActivityDetailsRoute.path || !workshopData) return;
      navigate(ActivityDetailsRoute.path.replace(':id', id));
    },
    [navigate, workshopData],
  );

  return {
    goToMaps,
    callWorkshop,
    goToLink,
    goToActivityDetail,
  };
}

export default function useWorkshopDetailsViewModel() {
  const data = useData();
  const navigationHandlers = useNavigationHandlers(data.workshopData);

  return { ...navigationHandlers, ...data };
}
