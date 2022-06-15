import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { Workshop } from '../../../models/Workshop.model';
import { fbDb } from '../firebase.service';
import { getActivitiesByWorkshopUid } from './activities.collection';
import { getGalleryItemsByParentUid } from './gallery-items.collection';
import { getReviewsByWorkshopUid } from './reviews.collection';

export const workshopsRef = collection(fbDb, 'workshops');

export async function getWorkshops(): Promise<Workshop[]> {
  const workshops = await getDocs(workshopsRef);

  return workshops.docs.map((workshop) => ({
    ...(workshop.data() as Workshop),
    uid: workshop.id,
  }));
}

export async function getWorkshopDetail(uid: string): Promise<Workshop> {
  const workshopRef = doc(fbDb, 'workshops', uid);

  const workshopSnap = await getDoc(workshopRef);

  if (!workshopSnap.exists()) {
    throw new Error('Workshop not found');
  }

  const activities = await getActivitiesByWorkshopUid(uid);

  const reviews = await getReviewsByWorkshopUid(uid);

  const gallery = await getGalleryItemsByParentUid(uid);

  return {
    ...(workshopSnap.data() as Workshop),
    uid,
    activities,
    reviews,
    gallery,
  };
}
