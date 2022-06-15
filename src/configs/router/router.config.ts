import { RouteObject } from 'react-router-dom';
import ActivityDetailsRoute from '../../views/ActivityDetails/ActivityDetails.route';
import AuthLoadingRoute from '../../views/AuthLoading/AuthLoading.route';
import BookingCreateRoute from '../../views/BookingCreate/BookingCreate.route';
import BookingDetailsRoute from '../../views/BookingDetails/BookingDetails.route';
import BookingsRoute from '../../views/Bookings/Bookings.route';
import SettingsRoute from '../../views/Settings/Settings.route';
import LoginRoute from '../../views/Login/Login.route';
import WorkshopDetailsRoute from '../../views/WorkshopDetails/WorkshopDetails.route';
import WorkshopsRoute from '../../views/Workshops/Workshops.route';

const routerConfig: RouteObject[] = [
  WorkshopsRoute,
  BookingsRoute,
  BookingDetailsRoute,
  WorkshopDetailsRoute,
  ActivityDetailsRoute,
  BookingCreateRoute,
  SettingsRoute,
  AuthLoadingRoute,
  LoginRoute,
];

export default routerConfig;
