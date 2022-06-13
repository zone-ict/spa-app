import { RouteObject } from 'react-router-dom';
import BookingDetailsRoute from '../../views/BookingDetails/BookingDetails.route';
import BookingsRoute from '../../views/Bookings/Bookings.route';
import HomeRoute from '../../views/Home/Home.route';

const routerConfig: RouteObject[] = [HomeRoute, BookingsRoute, BookingDetailsRoute];

export default routerConfig;
