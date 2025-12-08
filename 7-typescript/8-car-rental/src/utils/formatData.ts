import type { Car } from "../types";

const formatData = (car: Car) => {
  // nesne içerisinden istediğim alanlar
  const accepted = [
    "make",
    "model",
    "year",
    "fueltype",
    "cylinders",
    "drive",
    "trany",
    "vclass",
    "tcharger",
    "startstop",
    "co2",
    "displ",
    "atvtype",
  ];

  // nesneyi diziye çevir
  const arr = Object.entries(car).filter(([key]) => accepted.includes(key));

  return arr;
};

export default formatData;
