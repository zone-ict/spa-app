import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { ActivityType } from '../../../models/Activity.model';
import { fbDb } from '../firebase.service';

export const activitiesTypesRef = collection(fbDb, 'activities-types');

export async function getActivityTypesByActivityUid(activityUid: string): Promise<ActivityType[]> {
  const q = query(activitiesTypesRef, where('activity_uid', '==', activityUid));

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((snapshot) => ({
    ...snapshot.data(),
    uid: snapshot.id,
  })) as ActivityType[];
}

export async function getActivityTypeByUid(uid: string): Promise<ActivityType> {
  const activityTypeRef = doc(fbDb, 'activities-types', uid);

  const activityTypeSnap = await getDoc(activityTypeRef);

  if (!activityTypeSnap.exists()) {
    throw new Error('ActivityType not found');
  }

  return {
    ...activityTypeSnap.data(),
    uid,
  } as ActivityType;
}
