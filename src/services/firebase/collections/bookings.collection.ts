import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { v4 } from 'uuid';
import { Booking, BookingStatus } from '../../../models/Booking.model';
import { fbDb } from '../firebase.service';
import { getActivityByUid } from './activities.collection';
import { getReviewByUid } from './reviews.collection';
import { getWorkshopDetail } from './workshops.collection';

export const bookingsRef = collection(fbDb, 'bookings');

export async function getBookingByUid(uid: string): Promise<Booking> {
  const bookingRef = doc(fbDb, 'bookings', uid);

  const bookingSnap = await getDoc(bookingRef);

  if (!bookingSnap.exists()) {
    throw new Error('Booking not found');
  }

  const bookingData = bookingSnap.data() as Omit<
    Booking,
    'workshop_name' | 'activity_name' | 'activity_description'
  >;

  const workshop = await getWorkshopDetail(bookingData.workshop_uid);

  const activity = await getActivityByUid(bookingData.activity_uid);

  let reviewRating;
  let reviewComment;

  if (bookingData.review_uid !== '' && bookingData.review_uid) {
    const review = await getReviewByUid(bookingData.review_uid);
    reviewRating = review.rating;
    reviewComment = review.comment;
  }

  return {
    ...bookingData,
    uid,
    workshop_name: workshop.name,
    activity_name: activity.name,
    activity_description: activity.description,
    review_rating: reviewRating,
    review_comment: reviewComment,
  } as Booking;
}

export async function getBookingsByUserUid(userUid: string): Promise<Booking[]> {
  const q = query(bookingsRef, where('user_uid', '==', userUid));

  const querySnapshot = await getDocs(q);

  const bookings = await Promise.all(
    querySnapshot.docs.map((snapshot) => getBookingByUid(snapshot.id)),
  );

  return bookings;
}

export type CreateBookingParams = {
  activity_date: number;
  activity_type_uid: string;
  activity_uid: string;
  user_uid: string;
  workshop_uid: string;
};

export async function createBooking(params: CreateBookingParams): Promise<{ ok: boolean }> {
  await setDoc(doc(fbDb, 'bookings', v4()), {
    ...params,
    status: BookingStatus.Booked,
    cancel_reason: '',
    review_uid: '',
  });

  return { ok: true };
}

export type CancelBookingParams = {
  uid: string;
  reason: string;
};

export async function cancelBooking(params: CancelBookingParams) {
  const bookingRef = doc(fbDb, 'bookings', params.uid);

  await updateDoc(bookingRef, {
    status: BookingStatus.Cancelled,
    cancel_reason: params.reason,
  });

  return { ok: true };
}
