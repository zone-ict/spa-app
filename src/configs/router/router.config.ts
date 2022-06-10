import { RouteObject } from 'react-router-dom';
import HomeRoute from '../../views/Home/Home.route';

const baseRoute: RouteObject[] = [HomeRoute];

const routerConfig: RouteObject[] = [...baseRoute];

export default routerConfig;
