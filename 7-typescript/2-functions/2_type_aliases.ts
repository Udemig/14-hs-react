/*
 * Typescript'de bir fonksiyonun tipini doğrudan fonksiyonu yazarken tanımlamak yerine type aliases ile ayrı bir tip oluşturabiliriz
 */

// 1. Yöntem: fonkziyonu yazarken tanımlama
let func1 = (par1: string, par2: number): string => {
  return par1 + par2;
};
let func2 = (par1: string, par2: number): string => {
  return par1 + par2;
};
let func3 = (par1: string, par2: number): string => {
  return par1 + par2;
};

// 2. Yöntem: Type alises ile fonksiyonun tipini ayrıca tanımlayabilriz
type FuncType = (par1: string, par2: number) => string;

let func4: FuncType = (par1, par2) => {
  return par1 + par2;
};

let func5: FuncType = (par1, par2) => {
  return par1 + par2;
};

/*
 ! Challange
 * Yukarıdaki 2.yöntemde olduğu gibi bir fonksiyon tipi tanımlayın

 * * Paramatre olarak kişinin bulunduğu şehrin ismini ve havanın derecesini alsın
 * * Eğer hava dereceisi 30 derecen büyükse "Hava Sıcak" return etsin
 * * Eğer hava derecesi 20 derecen küçükse "Hava soğuk" retun etsin
 * * Eğer hava derecesi 20-30 arasındaysa "Hava Normal" return etsin
  
 * * Bonus: return edilen metinlere şehir ismi eklenebilir: "Ankara'da hava soğuk"
 * * Hem fonksiyonun tipini hem de fonksiyonu tanımlayın
 * * Fonksiyonu 1 kez çağırın
*/

// Cevap
type FuncType1 = (city: string, degree: number) => string;

const weather: FuncType1 = (city, degree) => (degree > 30 ? "hava sıcak" : degree < 20 ? "hava soğuk" : "hava normal");

console.log(weather("Ankara", 15));
console.log(weather("Ankara", 25));
console.log(weather("Ankara", 35));
