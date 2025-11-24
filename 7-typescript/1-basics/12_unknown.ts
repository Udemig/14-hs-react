/*
  ! Unknown
  * Bir değişkenin tipini gerçekten bilmediğin durumlarda kullanılır.
  * Ama unknow tipine ssahip bir değişkenin tip kontrolünü yapmadan kullanmayız
 
  * Değer ataması konusunda *any*'de olduğu gibi her türlü değer atanabilir.
  * *any*'den farklı olan noktası değeri kullanırken kontrol etmeden kullanamıyor oluşumuz
*/

// any
let value1: any;
value1 = 123;
value1 = true;
value1 = "selam";
console.log(value1.toUpperCase());
console.log(value1.trim());
console.log(value1 * 5);

// unknown
let value2: unknown;
value2 = 123;
value2 = true;
value2 = "selam";
// console.log(value2.toUpperCase());
// console.log(value2.trim());
// console.log(value2 * 5);

/*
 * Neden Unknown Kullanılır?
 * API'dan gelen veri tipi belli değil
 * Kullanıcının inputu belirsiz
 * Catch kod bloğu hatayı yakalar ama hatanın ne olduğu belli deği
 */

function parseData(data: unknown) {
  if (typeof data === "string") {
    console.log("Metnin Uzunluğu: ", data.length);
  } else {
    console.log("String değil", data);
  }
}

parseData(123);
parseData(true);
