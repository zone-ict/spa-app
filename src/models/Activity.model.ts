import { GalleryItem } from './GalleryItem.model';
import { ReviewRating } from './Review.model';

export interface ActivityType {
  uid: string;
  name: string;
  price: number;
}

export interface Activity {
  uid: string;
  name: string;
  description: string;
  workshop_uid: string;
  thumbnail_url: string;
  gallery: GalleryItem[];
  reviews: {
    date: string;
    rating: ReviewRating;
    comment: string;
  }[];
  activity_types: ActivityType[];
  average_rating?: number;
  ratings_count?: number;
}
