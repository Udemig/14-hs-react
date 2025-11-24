/*
 ! Enum (Numaralandırma)
 * Belirli değerler kümesi
 * Benzer kategorideki değerleri bir arada tutmak için kullanılır
*/

// Örnek - 1
// Tarfik ışığının aşamalarının verisini tut

// klasik js yöntemi
const color = {
  red: 0,
  yellow: 1,
  green: 2,
};

// klasik js yöntemini kullandığımız seneryoada bir değiken tanımlayalım
let renk1: number = color.red;

// typescript enum yönetimi
enum Color {
  red,
  yellow,
  green,
}

// Enım'ı bir tip olarak istediğimiz yerde kullanabiliyoruz
let renk2: Color;

renk2 = Color.red;
renk2 = Color.green;
// renk2 = 8; //! hata

// Örnek - 2
enum Days {
  monday = 1,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}

let day1 = Days.monday; // 1
let day2 = Days[5]; // friday

console.log(day1);
console.log(day2);

// Örnek - 3
// Bir kargo takip sitesi yazıyoruz ve kullanıcılara sıklıkla kargo durumunu bildirmek gerekiyor.
// Bu durumda karho aşamalarını js'te bir nesneye atar ordan çağırırdık, ts'de ise enum kullanarak daha okunaklı ve anlaşılı bir kod yazabilir

enum Status {
  pending = "Beklemede",
  on_the_way = "Yola çıktı",
  delivered = "Teslim edildi",
  cancelled = "İptal edildi",
}

// artık kargo tipini tanımlarken enumı kullandık
let ahmetin_kargo_durumu: Status;

// status enum'ının değerleri harici bir değer ataması yapamıyoruz
ahmetin_kargo_durumu = Status.on_the_way;
