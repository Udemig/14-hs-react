import api from "./api";
import type { Response, Product, ProductValues } from "../types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const productService = {
  getAll: () => api.get<Response<Product[]>>("/shoes"),
  getOne: (id: string) => api.get<Response<Product>>(`/shoes/${id}`),
  delete: (id: string) => api.delete<Response<null>>(`/shoes/${id}`),
  create: (data: ProductValues) => api.post<Response<Product>>(`/shoes`, data),
  update: (id: string, data: ProductValues) => api.put<Response<Product>>(`/shoes/${id}`, data),
};

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => productService.getAll(),
    select: (res) => res.data.data,
  });
};

export const useGetProduct = (id?: string) => {
  return useQuery({
    queryKey: ["product"],
    queryFn: () => productService.getOne(id!),
    select: (res) => res.data.data,
    enabled: !!id,
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => productService.delete(id),
    onSuccess: () => {
      toast.success("Ürün kaldırıldı");
      // shoes sorgusunun verilerini tazeledik
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ProductValues) => productService.create(data),
    onSuccess: () => {
      toast.success("Ürün oluşturuldu");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => toast.error("İşlem başarısız"),
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: ProductValues }) => productService.update(id, data),
    onSuccess: () => {
      toast.success("Ürün güncellendi");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => toast.error("İşlem başarısız"),
  });
};
