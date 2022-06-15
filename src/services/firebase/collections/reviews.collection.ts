import { collection, doc, getDoc, getDocs, query, runTransaction, where } from 'firebase/firestore';
import { v4 as uuidV4 } from 'uuid';
import { Review } from '../../../models/Review.model';
import { fbDb } from '../firebase.service';

export const reviewsRef = collection(fbDb, 'reviews');

export async function getReviewByUid(uid: string): Promise<Review> {
  const reviewRef = doc(fbDb, 'reviews', uid);

  const reviewSnap = await getDoc(reviewRef);

  if (!reviewSnap.exists()) {
    throw new Error('Review not found');
  }

  return {
    ...reviewSnap.data(),
    uid,
  } as Review;
}

export async function getReviewsByUserUid(userUid: string): Promise<Review[]> {
  const q = query(reviewsRef, where('user_uid', '==', userUid));

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((snapshot) => ({
    ...snapshot.data(),
    uid: snapshot.id,
  })) as Review[];
}

export async function getReviewsByWorkshopUid(workshopUid: string): Promise<Review[]> {
  const q = query(reviewsRef, where('workshop_uid', '==', workshopUid));

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((snapshot) => ({
    ...snapshot.data(),
    uid: snapshot.id,
  })) as Review[];
}

export async function getReviewsByActivityUid(activityUid: string): Promise<Review[]> {
  const q = query(reviewsRef, where('activity_uid', '==', activityUid));

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((snapshot) => ({
    ...snapshot.data(),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    rating: parseInt(snapshot.data().rating, 10),
    uid: snapshot.id,
  })) as Review[];
}

export type CreateReviewParams = {
  activity_uid: string;
  booking_uid: string;
  comment: string;
  rating: number;
  user_uid: string;
  workshop_uid: string;
};

export async function createReview(params: CreateReviewParams) {
  // eslint-disable-next-line @typescript-eslint/require-await
  await runTransaction(fbDb, async (transaction) => {
    const reviewUid = uuidV4();

    transaction.set(doc(fbDb, 'reviews', reviewUid), {
      activity_uid: params.activity_uid,
      booking_uid: params.booking_uid,
      comment: params.comment,
      rating: params.rating,
      user_uid: params.user_uid,
      workshop_uid: params.workshop_uid,
    });

    const bookingRef = doc(fbDb, 'bookings', params.booking_uid);

    transaction.update(bookingRef, {
      review_uid: reviewUid,
    });
  });

  return { ok: true };
}
