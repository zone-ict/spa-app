import React from 'react';
import { RouteObject } from 'react-router-dom';
import HomeView from './Home.view';

const HomeRoute: RouteObject = {
  path: '/home',
  element: <HomeView />,
};

export default HomeRoute;
