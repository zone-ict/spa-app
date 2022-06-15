import { GalleryItem } from './GalleryItem.model';

export interface ActivityType {
  uid: string;
  name: string;
  price: number;
}

export interface Activity {
  uid: string;
  name: string;
  workshop_uid: string;
  gallery: GalleryItem[];
  reviews: unknown[];
  activity_types: ActivityType[];
  average_rating?: number;
  ratings_count?: number;
}
