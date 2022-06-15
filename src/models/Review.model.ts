export type ReviewRating = 1 | 2 | 3 | 4 | 5;

export interface Review {
  uid: string;
  rating: ReviewRating;
  comment: string;
  activity_uid: string;
  workshop_uid: string;
  booking_uid: string;
  user_uid: string;
}
