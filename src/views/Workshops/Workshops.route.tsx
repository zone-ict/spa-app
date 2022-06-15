import React from 'react';
import { RouteObject } from 'react-router-dom';
import WorkshopsView from './Workshops.view';

const WorkshopsRoute: RouteObject = {
  path: '/workshops',
  element: <WorkshopsView />,
};

export default WorkshopsRoute;
