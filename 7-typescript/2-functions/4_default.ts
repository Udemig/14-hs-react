/*
 ! Default Params (Varsayılan Parametre)
 * Bazen opsiyonel parametreyi göndermediğimiz zaman değerinin undefined olmasını istemeyebiliriz.
 * Undefined olması yerine varsayılan bir değere sahip olmasını istersek bu yöntemi kullanırız
*/

// Örnek
function selamVer(isim: string = "Dünya") {
  console.log(`Merhaba ${isim}`);
}

console.log(selamVer("Furkan"));
selamVer();

/*
 ! Challange
 * Ürünün kdv eklenmiş fiyatını hesaplayan bir fonksiyon yazınız
 * Fonksiyon 2 parametre alsın: (1) ürünün fiyatı  | (2) kdv oranı
 * 2. parametreye değer gelmediğinde kdv oranını %18 den hesaplasın
 * ana fiyata kdv'yi ekleyip return etsin
  
 * hesapla(200,35) => 270
 * hesapla(200) => 236 
  
 * let kdv = (fiyat * kdvOrani) / 100;  
*/

function hesapla(fiyat: number, kdv: number = 0.18): number {
  return fiyat + fiyat * kdv;
}

console.log(hesapla(200, 0.35));
console.log(hesapla(200));
