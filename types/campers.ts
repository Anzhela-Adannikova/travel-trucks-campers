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
}

export interface DetailsCampers {
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
}
