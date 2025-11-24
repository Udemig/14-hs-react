/*
 ! Any Type
 * Bir değişkene any type atadığımız zaman typescript tip kontrolünü kapatır.
 * Any type atanmış bir değişkene her türlü tipte değer atayabiliriz.
 * Otomatik tamamamlama, editör desteği, tip kısıtlaması devre dışı kalır.
 * Any type'ı kullanmak genelde kötü bir fikirdir.
 * Any type'ı ancak aciliyeti olan durumlarda "geçici" olarak kullanılır
*/

let foo: any;

foo = 123;

foo = "selam";

foo = true;

foo = {};

foo = [];

foo = () => {};
