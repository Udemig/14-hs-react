/*
 ! Enum (Numaralandırma)
 * Belirli değerler kümesi
 * Benzer kategorideki değerleri bir arada tutmak için kullanılır
*/
// Örnek - 1
// Tarfik ışığının aşamalarının verisini tut
// klasik js yöntemi
var color = {
    red: 0,
    yellow: 1,
    green: 2,
};
// klasik js yöntemini kullandığımız seneryoada bir değiken tanımlayalım
var renk1 = color.red;
// typescript enum yönetimi
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["yellow"] = 1] = "yellow";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
// Enım'ı bir tip olarak istediğimiz yerde kullanabiliyoruz
var renk2;
renk2 = Color.red;
renk2 = Color.green;
// renk2 = 8; //! hata
// Örnek - 2
var Days;
(function (Days) {
    Days[Days["monday"] = 1] = "monday";
    Days[Days["tuesday"] = 2] = "tuesday";
    Days[Days["wednesday"] = 3] = "wednesday";
    Days[Days["thursday"] = 4] = "thursday";
    Days[Days["friday"] = 5] = "friday";
    Days[Days["saturday"] = 6] = "saturday";
    Days[Days["sunday"] = 7] = "sunday";
})(Days || (Days = {}));
var day1 = Days.monday; // 1
var day2 = Days[5]; //
console.log(day1);
console.log(day2);
