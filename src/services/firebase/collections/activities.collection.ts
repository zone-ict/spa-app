import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { Activity } from '../../../models/Activity.model';
import { fbDb } from '../firebase.service';
import { getActivityTypesByActivityUid } from './activity-types.collection';
import { getReviewsByActivityUid } from './reviews.collection';

export const activitiesRef = collection(fbDb, 'activities');

export async function getActivityByUid(uid: string): Promise<Activity> {
  const activityRef = doc(fbDb, 'activities', uid);

  const activitySnap = await getDoc(activityRef);

  if (!activitySnap.exists()) {
    throw new Error('Activity not found');
  }

  const activityFbData = activitySnap.data() as Omit<
    Activity,
    'uid' | 'activity_types' | 'average_rating' | 'ratings_count'
  >;

  const activityTypes = await getActivityTypesByActivityUid(uid);

  const reviews = await getReviewsByActivityUid(uid);

  return {
    uid,
    activity_types: activityTypes,
    ...activityFbData,
    average_rating: reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length,
    ratings_count: reviews.length,
  };
}

export async function getActivitiesByWorkshopUid(workshopUid: string): Promise<Activity[]> {
  const q = query(activitiesRef, where('workshop_uid', '==', workshopUid));

  const querySnapshot = await getDocs(q);

  const activities = await Promise.all(
    querySnapshot.docs.map((snapshot) => getActivityByUid(snapshot.id)),
  );

  return activities;
}
