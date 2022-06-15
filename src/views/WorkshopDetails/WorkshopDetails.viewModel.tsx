import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { Workshop } from '../../models/Workshop.model';
import { getWorkshopDetail } from '../../services/firebase/collections/workshops.collection';
import ActivityDetailsRoute from '../ActivityDetails/ActivityDetails.route';

function useDataFetching() {
  const { pathname } = useLocation();

  const workshopUid = pathname.split('/')[2];

  const { data, isLoading } = useQuery(['workshop', workshopUid], () =>
    getWorkshopDetail(workshopUid),
  );

  return { workshopData: data, workshopIsLoading: isLoading };
}

function useNavigationHandler(workshopData: Workshop | undefined) {
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
  const data = useDataFetching();
  const navigations = useNavigationHandler(data.workshopData);

  return { ...navigations, ...data };
}
