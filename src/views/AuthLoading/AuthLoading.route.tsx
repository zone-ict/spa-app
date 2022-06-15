import { RouteObject } from 'react-router-dom';
import AuthLoadingView from './AuthLoading.view';

const AuthLoadingRoute: RouteObject = {
  path: '/',
  element: <AuthLoadingView />,
};

export default AuthLoadingRoute;
