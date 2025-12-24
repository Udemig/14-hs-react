import { useMutation } from "@tanstack/react-query";
import type {
  LoginFormValues,
  RegisterFormValues,
  Response,
  User,
} from "../types";
import api from "./api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

// service nesnesi içersinde:
// endpointleri - gönderilen veri tiplerini - gelen veri tipini tanımlıyoruz
export const authService = {
  register: (data: RegisterFormValues) =>
    api.post<Response<User>>("/auth/register", data),
  login: (data: LoginFormValues) =>
    api.post<Response<User>>("/auth/login", data),
  refresh: () => api.post<Response<string>>("/auth/refresh"),
  logout: () => api.post<Response<undefined>>("/auth/logout"),
  me: () => api.get<Response<User>>("/auth/me"),
};

// kaydolma anında atılacak isteğin mutation'ını tanımlayalım
export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: RegisterFormValues) => authService.register(data),
    onSuccess: () => {
      navigate("/");
      toast.success("Hesabınız oluşturuldu");
    },
    onError: (error: AxiosError<Response<string>>) => {
      toast.error(error.response?.data?.message || "Bir hata oluştu");
    },
  });
};

// giriş yapma anında atılacak isteğin mutation'ını tanımlayalım
export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: LoginFormValues) => authService.login(data),
    onSuccess: () => {
      navigate("/");
      toast.success("Oturum açıldı");
    },
    onError: (error: AxiosError<Response<string>>) => {
      toast.error(error.response?.data?.message || "Bir hata oluştu");
    },
  });
};
