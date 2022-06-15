import { RouteObject } from 'react-router-dom';
import LoginView from './Login.view';

const LoginRoute: RouteObject = {
  path: '/login',
  element: <LoginView />,
};

export default LoginRoute;
