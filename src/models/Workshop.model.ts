import { Activity } from './Activity.model';
import { GalleryItem } from './GalleryItem.model';
import { Review } from './Review.model';

// TODO: Update this, currently just stub
export interface Workshop {
  uid: string;
  name: string;
  main_photo_url: string;
  description: string;
  address: string;
  google_maps_url: string;
  phone_number: string;
  shop_url: string;
  activities: Activity[];
  gallery: GalleryItem[];
  reviews: Review[];
}
