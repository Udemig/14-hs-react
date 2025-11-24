/*
 ! Void
 * Sadece fonksiyon return tiplerinde kullanabiliriz.
 * Bu fonksiyon herhangi bir değer return etmeyecek anlamına gelir
 * Return fonksiyonu durdurmak amacıyla kullnılabilir ama değer döndüremez
*/

const func1 = (): string => {
  return "selam";
};

const func2 = (): number => {
  return 45;
};

let func3 = (): void => {
  console.log("selam");

  return; // fonksiyonu durduran return kullanılabilir
};

const deleteProduct = (id: number): void => {
  fetch(`www.api.com/${id}`, { method: "DELETE" });
};

/*
 ! Never Type
 * Sadece fonksiyonların return tiplerinde kullanılır.
 * Fonksiyon hata fırlatıyorsa return tipi olarak never kullanılır.
 * Fonksiyon hiçbir zaman görevinin tamamlayamacak durumunu ifade der
*/
const log = (message?: string): void | never => {
  if (!message) {
    throw new Error("Fonksiyona mesaj sağlanmadı");
  } else {
    console.log("Mesaj sağlandı");
  }
};

log("Merha nasılsın?");

log();
