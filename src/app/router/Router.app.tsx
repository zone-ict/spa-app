import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RouterConfig from '../../configs/router/router.config';

function RouterApp() {
  return (
    <Routes>
      {RouterConfig.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default RouterApp;
