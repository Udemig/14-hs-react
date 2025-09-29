# Memorization

- React'taki performans açıklarıın kağatmak için kullandığımız hook'lar.
- Genellikle gereksiz renderları veya büyük hesaplamaların tekrar yapılmasını engellemek için kullanırız

# useMemo()

- Bir hesaplamanın her render sırasında yeniden yapılmasının önüne geçer
- İlk hesaplama sonucu önbelleğe atarak sonra her aynı hesaplmaya yapıcalıcağı zaman hesaplamayı baştan yapmak yerine önbellekte tuttuğu önceki hesaplamanını sonucuna getirir.

# React.memo()

- Component'ların aldığı prop değişmediği müddetçe render olmasının önüne geçer
- Kapsayıcı elementlerin render olmasından dolayı, alt elementin renderını engellemek için kullanılır

# useCallback()

- Normal şartlarda bir fonksiyon her render sırasında yeniden oluşturulur buda bellekte farklı bir referansa sahip olmasına sebep olur.
- Bundan dolayı bu fonksiyonu react.memo kullanana bir component'a prop olarak gönderdiğimizde fonksiyon her defasında farklı bir referansa sahip olucağından react.memo görevini yapamaz
- useCallback ile bağımlılık dizisindeki değer değişmediği müddetçe her render sırasında fonksiyonun yeniden oluşmasının önüne geçiyyoruz

# Javascripte ver türleri ikiye ayrılır

- 1. Primite Types
- Değer üzerinde saklanır ve kopyalanır
- Hafızada sabit bir alana kaplar
- Bellekte değişkenin kendisi saklanır
- Bir değişkene farklı bir değişkenin değeri atanırsa, kopyası alınır ve yeni değişken değişiklik yapılması orjinalini etkilemez.
- string, numberi boolean, null, undefined

```jsx
let x = 10;
let y = x;
y = 20;

console.log(x); // 20
```

- 2. Non Primitive (Refferance) Types
- Referans üzerinde saklanır ve değerlerleri değiştirlebilir
- Bellekte değişkenin referansı saklanır
- Bir değişkene farklı bir değişkenin değeri atanırsa ....
- object, array, function, class

```jsx
let obj1 = { name: "Furkan" };
let obj2 = obj1;
obj2.name = "Ahmet";

console.log(obj1); // Ahmet
```
