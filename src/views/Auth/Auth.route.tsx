import { RouteObject } from 'react-router-dom';
import AuthView from './Auth.view';

const AuthRoute: RouteObject = {
  path: '/',
  element: <AuthView />,
};

export default AuthRoute;
