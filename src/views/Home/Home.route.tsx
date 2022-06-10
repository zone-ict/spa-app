import React from 'react';
import { RouteObject } from 'react-router-dom';
import HomeView from './Home.view';

const HomeRoute: RouteObject = {
  path: '/',
  element: <HomeView />,
};

export default HomeRoute;
