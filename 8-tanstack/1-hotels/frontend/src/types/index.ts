interface Place {
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string[];
  rating: number;
  price_per_night: number;
  availability: boolean;
  id: string;
  image_url: string;
}

interface PlacesResponse {
  message: string;
  results: number;
  places: Place[];
}

interface PlaceResponse {
  message: string;
  place: Place;
}

interface FilterParams {
  location?: string;
  title?: string;
  order?: string;
}

interface PlaceFormValues {
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string;
  rating?: number;
  price_per_night?: number;
  availability: boolean;
}

export type {
  Place,
  PlacesResponse,
  PlaceResponse,
  FilterParams,
  PlaceFormValues,
};
