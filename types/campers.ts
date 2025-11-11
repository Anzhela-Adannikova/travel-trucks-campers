export interface GalleryImg {
  thumb: string;
  original: string;
}

export interface ReviewsType {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface Campers {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;

  gallery: GalleryImg[];
  reviews: ReviewsType[];
}

export interface CampersResponse {
  total: number;
  items: Campers[];
}

export interface CamperFilter {
  location?: string;

  AC?: boolean;
  Automatic?: boolean;
  Kitchen?: boolean;
  TV?: boolean;
  Bathroom?: boolean;

  form?: "panelTruck" | "fullyIntegrated" | "alcove";
}

export interface Filters {
  location: string;
  equipment: string[];
  vehicalType: string;
}
