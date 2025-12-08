import type { CarResponse } from "../types";

export const fetchCars = async (): Promise<CarResponse> => {
  let url = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=10`;

  const res = await fetch(url);

  const data = await res.json();

  return data;
};
