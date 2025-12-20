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

interface FilterParams {
  location?: string;
  title?: string;
  order?: string;
}

export type { Place, PlacesResponse, FilterParams };
