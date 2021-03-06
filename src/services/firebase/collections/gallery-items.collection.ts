import { collection, getDocs, query, where } from 'firebase/firestore';
import { GalleryItem } from '../../../models/GalleryItem.model';
import { fbDb } from '../firebase.service';

export const galleryItemsRef = collection(fbDb, 'gallery-items');

export async function getGalleryItemsByParentUid(parentUid: string): Promise<GalleryItem[]> {
  const q = query(galleryItemsRef, where('parent_uid', '==', parentUid));

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((snapshot) => ({
    ...snapshot.data(),
    uid: snapshot.id,
  })) as GalleryItem[];
}
