import { RouteObject } from 'react-router-dom';
import BookingDetailsRoute from '../../views/BookingDetails/BookingDetails.route';
import BookingsRoute from '../../views/Bookings/Bookings.route';
import HomeRoute from '../../views/Home/Home.route';
import WorkshopDetailsRoute from '../../views/WorkshopDetails/WorkshopDetails.route';

const routerConfig: RouteObject[] = [
  HomeRoute,
  BookingsRoute,
  BookingDetailsRoute,
  WorkshopDetailsRoute,
];

export default routerConfig;
