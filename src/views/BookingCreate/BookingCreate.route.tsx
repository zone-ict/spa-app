import { RouteObject } from 'react-router-dom';
import BookingCreate from './BookingCreate.view';

const BookingCreateRoute: RouteObject = {
  path: '/activities/:id/bookings/new',
  element: <BookingCreate />,
};

export default BookingCreateRoute;
