import React from 'react';
import { RouteObject } from 'react-router-dom';
import SettingsView from './Settings.view';

const SettingsRoute: RouteObject = {
  path: '/settings',
  element: <SettingsView />,
};

export default SettingsRoute;
