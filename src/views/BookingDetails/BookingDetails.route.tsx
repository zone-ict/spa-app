import { RouteObject } from 'react-router-dom';
import BookingDetails from './BookingDetails.view';

const BookingDetailsRoute: RouteObject = {
  path: '/bookings/:id',
  element: <BookingDetails />,
};

export default BookingDetailsRoute;
