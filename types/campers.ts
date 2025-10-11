export interface GalleryImg {
  thumb: string;
  original: string;
}

export interface Reviews {
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
  review: Reviews[];
}

export interface CamperPagination {
  page: string;
  limit: string;
}

export interface CamperFilter {
  location?: string;
  AC?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;
  transmission?: string;
  engine?: string;
  form?: string;
  page?: number;
  limit?: number;
}
