import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
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
