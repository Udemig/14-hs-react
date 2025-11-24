/*
 ! Function Type
 * Typescript'de fonksiyon tipini tanımlamaktan kastımız foksiyonun aldığı parametrenin ve döndürdüğü değerin tipini tanımlamaktır
*/
// normal function
function topla(a, b) {
    return a + b;
}
var x = topla(56.5, "elli");
// arrow function
var topla2 = function (a, b) {
    return a + b;
};
// immediate call function
// fonksiyon tanımlandığı gibi çağrılır ve bir isme sahip olmadığı için bellekte yer kaplamaz
(function () {
    console.log("fonksiyon çalıştı");
})();
// örnek - 1
// saynın pozitif olup olmadığı kontrol eden fonksiyon
var isPositive = function (sayi) {
    return sayi > 0 ? true : false;
};
console.log(isPositive(10));
console.log(isPositive(-4));
// örnek - 2
var ortalama = function (dizi) {
    var toplam = dizi.reduce(function (toplam, sayi) { return toplam + sayi; }, 0);
    return toplam / dizi.length;
};
var result = ortalama([5, 7, 89, 45, 67, 12, 56, 98]);
console.log(result);
