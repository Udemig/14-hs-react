/*
 * Typescript, javascript'İn bazı önemli açıklarını düzeltmek için microsoft tarfından geliştirilmiş bir proglama dilidir.

 * Neden Typescript
 * * JS'de koddaki hataları runtime'da görürüz
 * * TS'de koddaki hataları kod editöründeyken daha projeyi çalıştırmadan görürürüz
  
 * * JS'de tanımladıımız değişkene daha sonra farklı türde değer ataması yapabiliyoruz
 * * TS'de tanımladığımız değişkenin türünü belirtmek zorundayız ve farklı türde değer ataması yapamayız
  
 * * JS'de çok kısıtlı bir otomatik tamamla desteği bulunur.
 * * TS'de çok daha geniş kapsamlı bir otomatik tamamlama desteği bulunur.
  
 * * Not
 * * Typescript kodları tarayıcı tarafından doğrudan çalıştırılamaz
 * * Bundan dolayı compiler (tsc) ile ts kodunu js koduna çevirmeden çalıştıramayız
 * * Buradan anlayacağımız ts'in bütün tip tanımalama özellikleri sadece geliştirme sürecinde işimize yarar, kodu js'e derlediğimizde bütün ts kodları yok olur.
 */
var username = "furkan";
var age = 56;
// y = 45; // !Type 'number' is not assignable to type 'string'.ts(2322)
var user = {
    name: "ahmet",
    age: 56,
};
console.log(user.age);
