/*
 ! Type Aliases
 * Şuana kadar tip ataması yaparken js'deki varolan tiplerin yanısıra birkaç ts'ê özel tipi kullanıdık
 * Gerçek projelerde o anki yaptığımız işe özel spesifik tiplere ihtiyaç duyabiliriz.
 * Bunları tanımlak için type anahtar kelimesini kullanarak kendi tiplerimizi oluşturabiliriz.
  
 * Neden ihityaç duyarız.
 * * Çünkü belirlediğimiz bir type'ı proje içerisinde defarlarca kullanabiliyoruz her seferin baştan yazmak yerine kendi tipimizi oluşturup ismiyle çağırmak kod kalabalığınız azaltır 
*/

// Örnek - 1
// kendiz özel isimlendirdiğimiz string tipini oluşturalım
type metinTipi = string;

// kendi oluşturduğumuz tipi kullanalım
let kullanıcıAdi: metinTipi = "Furkan";

// Örnek - 2
// Uçuş projesinde sıkça kullandığımız enlem ve boylam değeri var...

// type aliasess kullanmadan
const x: [number, number] = [34.3454645645, 67.4564564];
const y: [number, number] = [34.3454645645, 67.4564564];
const z: [number, number] = [34.3454645645, 67.4564564];

const path1: [number, number][] = [x, y, z];

// type alises ile
type Coords = [number, number];

const a: Coords = [34.3454645645, 67.4564564];
const b: Coords = [34.3454645645, 67.4564564];
const c: Coords = [34.3454645645, 67.4564564];

const path2: Coords[] = [a, b, c];

// Örnek - 3: Aynı nesne tipini birden fazla kullanmamız gereken bir seneryo

// type aliases olmadan
let user1: { id: number; name: string; age: number } = {
  id: 1,
  name: "Ali",
  age: 20,
};

let user2: { id: number; name: string; age: number } = {
  id: 2,
  name: "Ayşe",
  age: 25,
};

let users1: { id: number; name: string; age: number }[] = [user1, user2];

// type alises kullanarak
type User = { id: number; name: string; age: number };

let user3: User = {
  id: 1,
  name: "Ali",
  age: 20,
};

let user4: User = {
  id: 2,
  name: "Ayşe",
  age: 25,
};

let users2: User[] = [user1, user2, user3, user4];

// E-Ticaret sitei için örnek
type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  size: "xs" | "s" | "m" | "l";
  inStock: boolean;
  stock: number;
};

let product1: Product = {
  id: 123,
  name: "Kırmızı Elbise",
  price: 9870,
  category: "Elbise",
  size: "m",
  inStock: true,
  stock: 123,
};

let products: Product[] = [product1, product1, product1, product1, product1, product1];
