import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { Booking } from '../../../models/Booking.model';
import { fbDb } from '../firebase.service';

export const bookingsRef = collection(fbDb, 'bookings');

export async function getBookingsByUserUid(userUid: string): Promise<Booking[]> {
  const q = query(bookingsRef, where('user_uid', '==', userUid));

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((snapshot) => ({
    ...snapshot.data(),
    uid: snapshot.id,
  })) as Booking[];
}

export async function getBookingByUid(uid: string): Promise<Booking> {
  const bookingRef = doc(fbDb, 'bookings', uid);

  const bookingSnap = await getDoc(bookingRef);

  if (!bookingSnap.exists()) {
    throw new Error('Booking not found');
  }

  return {
    ...bookingSnap.data(),
    uid,
  } as Booking;
}
