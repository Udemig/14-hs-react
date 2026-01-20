import { Order, Product, User } from "@/types";

const API_URL = "http://localhost:5000";

// bütün siparişleri getir
export const getOrders = async (): Promise<Order[]> => {
  const res = await fetch(`${API_URL}/orders`);

  return res.json();
};

// bütün ürnleri getir
export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${API_URL}/products`);

  return res.json();
};

// bir ürünü getir
export const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${API_URL}/products/${id}`);

  return res.json();
};

// bir ürünü sil
export const deleteProduct = async (id: string) => {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
  });

  return res.json();
};

// bir ürün oluştur
export const createProduct = async (productData: Omit<Product, "id">): Promise<Product> => {
  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });

  return res.json();
};

// bir ürünü güncelle
export const updateProduct = async (id: string, productData: Omit<Product, "id">) => {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(productData),
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
};

// kullanıcı verilerini al
export const getUsers = async (): Promise<User[]> => {
  const res = await fetch(`${API_URL}/users`);

  return res.json();
};

// kullanıcıyı kaldır
export const deleteUser = async (id: string): Promise<void> => {
  const res = await fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
  });

  return res.json();
};

// bir kullanıcıyı al
export const getUser = async (id: string): Promise<User> => {
  const res = await fetch(`${API_URL}/users/${id}`);

  return res.json();
};
