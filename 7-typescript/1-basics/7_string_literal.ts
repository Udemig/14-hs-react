/*
 ! String Literal Type
 * Bir metin tipini string olarak tanımlamak yerine eğerki alabileceği değer sayısı çok fazla değilse doğrudan bu değerleri yazarak tip değil değer kısıtlması yaparız.
 * Örn: Bir kullanıcı nesnesinin tipini tanımlamak istiyoruz.
 * Kullanıcın rolüne string yazmak yerine "string" olarak albileceği 3-4 farklı değeri ifade edersek daha katı bir kısıtlama yapmış oluruz
*/

// Örnek - 1
let user: {
  id: number;
  name: string;
  type: "admin" | "user" | "guest";
  gender: "male" | "female";
};

user = {
  id: 1,
  name: "Ali",
  type: "admin",
  gender: "female",
};

// Örnek - 2
let car: {
  make: string;
  model: string;
  gearbox: "otomatik" | "manuel";
  fuel: "benzin" | "dizel" | "elektrik" | "lpg";
  year: number;
  owner: any;
};

car = {
  make: "bmw",
  model: "m4",
  gearbox: "otomatik",
  fuel: "benzin",
  year: 2025,
  owner: undefined,
};
