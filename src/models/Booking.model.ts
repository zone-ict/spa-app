export enum BookingStatus {
  Booked = 'BOOKED',
  InProgress = 'IN_PROGRESS',
  Completed = 'COMPLETED',
  Cancelled = 'CANCELLED',
}

export interface Booking {
  uid: string;
  activity_date: number;
  activity_type_uid: string;
  activity_uid: string;
  cancel_reason?: string;
  review_uid?: string;
  status: BookingStatus;
  user_uid: string;
  workshop_uid: string;
}
