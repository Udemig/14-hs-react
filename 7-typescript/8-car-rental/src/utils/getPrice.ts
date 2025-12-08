import type { Car } from "../types";

// Araç bilgilerini alıp günlük kiralama fiyatını hesaplayan fonksiyon
export const getPrice = (car: Car): number => {
  let price = 2000; // Base price

  // Year factor
  const year = parseInt(car.year);
  if (!isNaN(year)) {
    price += (year - 2000) * 100;
  }

  // Engine factor (Displacement)
  if (car.displ) {
    price += car.displ * 150;
  }

  // Cylinder factor
  if (car.cylinders) {
    price += car.cylinders * 50;
  }

  // Drive type factor
  if (car.drive && car.drive.includes("All-Wheel")) {
    price += 500;
  }

  // Automatic transmission premium
  if (car.trany && car.trany.toLowerCase().includes("auto")) {
    price += 250;
  }

  // Fuel Type factor
  if (car.fueltype && car.fueltype.toLowerCase().includes("electric")) {
    price += 1000; // Electric cars are usually more expensive
  }

  return Math.round(price);
};
