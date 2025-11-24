/*
 ! Tuple Type
 * Tuple, dizinin bir alt tipidir.
 * Uzunluğu ve elemanlarının sırası sabit olan dizilerin tipinin tanımlanması için kullanılır.
 * Genelde az sayıda eleman içeren dizilerde kullanılır 
*/

// Örnek - 1: Elemanlarının sırası sabit bir dizinin tipini tanımlayalım
// doğru yol (tuple)
const ders1: [string, number] = ["Matematik", 3];

// yanlış yolu (union type)
const ders2: (string | number)[] = [3, "Matematik", "Matematik", "Matematik", 3];

// Örnek - 2: Bir css gradient verisi api'dan dizi içerisinde [doğrultu,renk1,renk2]
const gradient: [string, string, string] = ["to right", "#000000", "#ffffff"];

// Örnek - 3: Bir api'dan dizi içerisinde rgb/rgba verisi geliyor. [red,green,blue,alpha(opsiyonel)]
// Bu seneryoda alpha değeri isteğe bağlıdır
let color: [number, number, number, number?];

color = [123, 56, 89];
color = [123, 56, 89, 0.1];

// Örnek - 4: Birden fazla opsiyonel değer içeren tuple tipi tanımlayalım
// Bir opsiyonel değerin ardından zorunlu değer gelemez
let date: [number, number?, number?];

date = [28, 12, 1980];
date = [28, 12];
date = [28];
date = [28, , 1980];
