/*
 ! Function Type
 * Typescript'de fonksiyon tipini tanımlamaktan kastımız foksiyonun aldığı parametrenin ve döndürdüğü değerin tipini tanımlamaktır
*/

// normal function
function topla(a: number, b: string): string {
  return a + b;
}

const x = topla(56.5, "elli");

// arrow function
const topla2 = (a: number, b: string): string => {
  return a + b;
};

// immediate call function
// fonksiyon tanımlandığı gibi çağrılır ve bir isme sahip olmadığı için bellekte yer kaplamaz
(() => {
  console.log("fonksiyon çalıştı");
})();

// örnek - 1
// saynın pozitif olup olmadığı kontrol eden fonksiyon
const isPositive = (sayi: number): boolean => {
  return sayi > 0 ? true : false;
};

console.log(isPositive(10));
console.log(isPositive(-4));

// örnek - 2
const ortalama = (dizi: number[]): number => {
  const toplam = dizi.reduce((toplam, sayi) => toplam + sayi, 0);

  return toplam / dizi.length;
};

const result = ortalama([5, 7, 89, 45, 67, 12, 56, 98]);

console.log(result); // 47.375
