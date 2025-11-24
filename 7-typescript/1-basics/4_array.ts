/*
 ! Array Type
 * Typescript'te dizilerin tipini tanımlarken sadece bu değişken bir dizi olucak demek yerine bu değişken string elemanlara sahip bir dizi olucak deriz.
 * Yani dizinin içeriği ne olucak? dizinin elemanlarının tipi ne olucak gibi belirtmemiz gerekiyor.
  
 * Array tipi tanımlarken 2 farklı yol vardır
 * 1) Array<T> (Generic)
 * 2) T[] 
*/

// Örnek - 1
let numbers: number[] = [1, 2, 3, 4, 5, 6];

// Örnek - 2
let names: string[] = ["Ahmet", "Furkan", "Fatma"];

// Örnek - 3
const numbers2: Array<number> = [1, 2, 3, 4, 5, 6];

// Örnek - 4
const names2: Array<string> = ["a", "b", "c"];

// Soru: Dizide farklı tipte elemanlar olursa ne olucak
// Cevap: Evet, biden fazla fakrlı tipte değere sahip diziler tanımlanabilir (Union Type)
const mixed: (string | number | boolean)[] = [1, "a", "b", "c", 2, 3];

const mixed3: Array<string | number> = ["1", 1, "a"];

// Soru: Tip belirtmeden dizinin içine farklı tiplerde eleman yazabiliyor muyuz.
// Cevap: Type inferance otomatik tipi algılar, büyük ihtimalle yanlış olarak...
const mixed2 = [1, "a", {}, true];
