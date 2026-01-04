# Next.js Routing

- Bir next.js projesinde routing (sayfalama) için 2 farklı yöntem vardır.
- App router (Modern yöntem): v14 ile birlikte geldi
- Pages router (Eski yöntem): v13 öncesinde kullanılıyordu

# App Router (Önerilen)

- Dosya dizinine göre klasör tabanlı sayfalama yapar
- Bütün sayfalar `/src/app` klasörü içerisinde olmalıdır
- `/src/app` klasörü içerisinde tanımlanan ve içerisinde `page.jsx` dosyası olan bütün klasörler sayfa olarak algılanır
- `page.jsx` dosyası içerisinde bir react component'ı tanımlayıp export ederiz
- `page.jsx` dosyasını kapsayan klasörün aında sahip yeni bir route oluşur.
- Next.js bu sayfayı tespit edip otomatik olarak kendi router'ına ekler

## Nested Routes - İç İçe Yollar

- Örn:
- /profile > profilini görüntüle
- /profile/friends > arkadaşlarını görüntüle
- /profile/edit > profilini düzenele

## Dynamic Routes - Dinamik Yollar

- Url'deki parametreye göre sayfa içeriğini değiştiği detay sayfaları
- `/products/10` `/videos/oejg2376` `/cars/tesla`
- Bir dinami ksayfa tanımlamak için klasör oluştururken [] içerisindeparametrenin adını yazarız
- `/products/[id]` `/videos/[videoId]` `/cars/[brand]`
- Component içerisinde bu parametreye erişmek için component'a otomatik olarak gelen propu kullanırız

## Link

- Next.js'in kendi Link component'ı vardır.
- a etiketi yerine kullanırız.
- `href` prop'u ile yönlendireceğimiz adresi söyleriz.

## Catch All Segments

- Birden fazla parametreye erişme ve tanımlama
- Bu yöntemde parametre sayısı birden fazla olduğu için parametreler bir dizi içerisinde gelir

- /docs/belge-1
- /docs/belge-1/sayfa-10
- /docs/belge-1/sayfa-10/satir-20
- `/docs/[...slug]`

## Route Group

- Çok fazla route olduğu bu route'ları erişimi kolaylaştırmak ve layout özelliklerini kullanabilmek amacıyla gruplandırmak isteyebiliriz.

- Route'ları normal bir klasör içerisine aldığımızda klasör ismi url'e etki eder ama eğer kapsayıcı klasörünün ismini `()` içersine yazarsak url'e herhangi bir etkisi olmaz

## Layout

- Bir uygulamanın veya sayfa grubunun genel dizaynını / ortak elementlerini / yetkilendirme durmunu belirlemek için kullandığımız bileşendir

- Bir sayfa grubunu veya projedeki bütün sayfaları kapsayabiliriz.

- Layout dosyasını oluşturduğumuz konuma bağlı olarak etkileceği sayfalar değişir.
- - Eğer app klasörü içerisinde oluşturursak bütün sayfaları etkiler
- - Eğer layout bir route grubunun içerisine oluşturursak sadece o gruptaki sayfaları etkiler

## Template

- Layout ile aynı özelliklere sahiptir.
- Layout'lardan farklı olarak sayfa geçişlerinde template'de tutulan state sıfırlanır

## 404 Sayfası

- Next.js in kendi varsayılan bir 404 sayfası vardır
- Eğer bu 404 sayfasını özelleştirmek istersek not-found.jsx isminde bir dosya oluşturup kendi 404 sayfamızı dizayn edebiliriz.

# Özel Dosyalar

- `page.jsx` > sayfa tanımlamak için kullanılır
- `layout.jsx` > sayfa gruplarının ortak özelliklerini tanımlamak için
- `template.jsx` > sayfa gruplarının ortak özelliklerini tanımlamak için
- `not-found.jsx` > 404 sayfasını özelleştirmek için

- `loading.jsx`
- - bir bileşen asenkron bir işlemi beklediği süre boyunca otomatik olarak ekrana gelir
- - loading dosyasını oluşturduğumuz klasöre göre etki ettiği sayfalar değişir

- `error.jsx`
- - bir bileşen içerisinde hata olduğunda otomatik olarak ekrana gelir
- - örneğin bir api isteği başarısız olduğunda error componentını görürüz
- - error dosyasını oluşturduğumuz klasöre göre etki ettiği sayfalar değişir
- - sayfanın üst kısmına `use client` yazmak zorunlu
- - error ve reset propları alır

# Metadata

- Klasik react projelerinde bütün sayfalara ortak metadata tanımı yapabiliyorduk index.html üzerinden ama her sayfaya ayrı metadata tanımı söz konusu değildi bundan dolayı seo anlamında - yazıyordu.

- Next.js'de react'dan farklı olarak her sayfaya ayrı bir metadata tanımlama şansımız var bundan dolayı SEO anlamında klasik bir react projesine göre çok daha iyi bir puan elde ederiz.

- Bir sayfanın metadatasını tanımlamak istiyorsak o sayfada bir `metadata` isminde nesne tanımlayıp export ederiz
