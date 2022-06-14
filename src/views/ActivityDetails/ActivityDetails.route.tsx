import { RouteObject } from 'react-router-dom';
import ActivityDetails from './ActivityDetail.view';

const ActivityDetailsRoute: RouteObject = {
  path: '/activities/:id',
  element: <ActivityDetails />,
};

export default ActivityDetailsRoute;
