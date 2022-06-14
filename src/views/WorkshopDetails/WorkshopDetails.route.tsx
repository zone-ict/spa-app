import { RouteObject } from 'react-router-dom';
import WorkshopDetails from './WorkshopDetails.view';

const WorkshopDetailsRoute: RouteObject = {
  path: '/workshop/:id',
  element: <WorkshopDetails />,
};

export default WorkshopDetailsRoute;
