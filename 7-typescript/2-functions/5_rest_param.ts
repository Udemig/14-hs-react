/*
 ! Rest Param
 * Parametre listesinin belirsiz veya sınırsız olduğu durumlarda kullanılır

 * Özellikleri
 * Bir parametreyi rest param yapmak için "..." operatörünü kullanırız.
 * Bir rest parametrenin ardından normal parametre tanımlanamaz
 * Sebebi ise rest parametrenin kaç değer alacağı belli değil
 * Rest parametrenin aldığı değerler en son dizi haline getirilir
*/

// Örnek Yoklama
const yoklama1 = (teacher: string, ...students: string[]) => {
  console.log(teacher);
  console.log("------------------------------");
  students.forEach((student) => console.log(student + " burdaaaaaaaaa!"));
};

yoklama1("Ali Öğretmen", "Ahmet", "Ayşe", "Fatma", "Burak", "Pınar");

/*
 ! Challange
 * İstenildiği kadar sayıyı parametre olarak alan bir fonksiyon yazınız
 * Parametre olarak aldığı ilk 2 sayıyı çarpsın
 * ilk 2 sayı dışında geri kalan sayıları toplasın
 * toplam ve çarpımı bir nesne içerisinde return etsin
  
 * hesapla(2,3,4,5,6) =====> {carpim:6, toplam:15 }
  
 * ipucu:  const toplam = dizi.reduce((toplam, sayi) => toplam + sayi, 0);
*/

// Cevap: 1
function hesapla(...sayilar: number[]) {
  const [sayi1, sayi2, ...rest] = sayilar;

  const carpim = sayi1 * sayi2;
  const toplam = rest.reduce((toplam, sayı) => toplam + sayı, 0);

  return {
    carpim,
    toplam,
  };
}

console.log(hesapla(2, 3, 4, 5, 6));

// Cevap: 2
const h = (...s: number[]) => {
  const [s1 = 0, s2 = 0, ...gk] = s;
  const top = s1 * s2;
  const car = gk.reduce((acc, current) => acc + current, 0);

  return { car, top };
};

console.log(h(2, 3, 4, 5, 6));

// Cevap: 3
function islem(...sayilar: number[]) {
  if (sayilar.length < 2) {
    return null;
  }

  const carpma = sayilar[0] * sayilar[1];
  let toplam = 0;

  for (let i = 2; i < sayilar.length; i++) {
    toplam += sayilar[i];
  }

  return {
    carpma,
    toplam,
  };
}

console.log(islem(2, 3, 4, 5, 6));

// Cevap 4
const hesap = (...sayı: number[]) => {
  const çarpma = sayı[0] * sayı[1];

  const toplam = sayı.slice(2).reduce((toplam, sayı) => toplam + sayı, 0);
  return { çarpma, toplam };
};

console.log(hesap(2, 3, 4, 5, 6));

// Cevap 5
function ilkIkiCarpGerisiniTopla(
  sayi1: number,
  sayi2: number,
  ...sayilar: number[]
): { carpim: number; toplam: number } {
  const toplam: number = sayilar.reduce((toplam, sayi) => toplam + sayi, 0);
  const carpim: number = sayi1 * sayi2;
  return {
    carpim,
    toplam,
  };
}
