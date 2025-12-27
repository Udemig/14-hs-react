import api from "./api";
import type { Response, Product } from "../types";
import { useQuery } from "@tanstack/react-query";

const productService = {
  getAll: () => api.get<Response<Product[]>>("/shoes"),
};

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => productService.getAll(),
    select: (res) => res.data.data,
  });
};
