/*
 ! Type Aliases
 * Şuana kadar tip ataması yaparken js'deki varolan tiplerin yanısıra birkaç ts'ê özel tipi kullanıdık
 * Gerçek projelerde o anki yaptığımız işe özel spesifik tiplere ihtiyaç duyabiliriz.
 * Bunları tanımlak için type anahtar kelimesini kullanarak kendi tiplerimizi oluşturabiliriz.
  
 * Neden ihityaç duyarız.
 * * Çünkü belirlediğimiz bir type'ı proje içerisinde defarlarca kullanabiliyoruz her seferin baştan yazmak yerine kendi tipimizi oluşturup ismiyle çağırmak kod kalabalığınız azaltır
*/
// kendi oluşturduğumuz tipi kullanalım
var kullanıcıAdi = "Furkan";
// Örnek - 2
// Uçuş projesinde sıkça kullandığımız enlem ve boylam değeri var...
// type aliasess kullanmadan
var x = [34.3454645645, 67.4564564];
var y = [34.3454645645, 67.4564564];
var z = [34.3454645645, 67.4564564];
var path = [x, y, z];
console.log(path);
