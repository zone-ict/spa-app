import { RouteObject } from 'react-router-dom';
import Bookings from './Bookings.view';

const BookingsRoute: RouteObject = {
  path: '/bookings',
  element: <Bookings />,
};

export default BookingsRoute;
