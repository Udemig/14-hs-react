# React Nedir ?

- React, facebook tarafından geliştirilen bir javascript kütüphanesidir.
- Daha performanslı uyguamaları oluşturması, component mimarisi ve geniş bir kütüphane desteğine sahip olması sebeiyle çok popülerdir.

# React Projesi Nasıl Oluşturulur ?

- Projeyi oluşturma için terimale `npx create-react-app proje_ismi` yazarız

# React Projesi Nasıl Ayağa Kaldırılır ?

- Terminale `npm start` komutunu yazarız

# React Dosya/Klasör Yapısı

1. `node_modules`: Projenin bağımlılıklarının depolandığı klasördür. Projeye bir paket indirildiğinde o pakedin bütün kodları node_modules içerisine kaydedilir. Bu klasöre kesinlikle el ile müdahele etmeyiz terminale yazıcağımız komutlarla paketleri indirip/kaldırabiliriz.

2. `package.json`: Proje kullanılan kütüphanelerin sürümlerinin vs scripts tutulduğu dosyadır

3. `package-lock.json`: Proje bağımlıklarının daha detaylı bir şekilde (vesiyon bilgisi/ bğaımlıkların biribiriyle olan ilişkileri) tutan dosyadır

4. `.gitignore`: Proje githuba gönderilirken githuba pushlanmayacak olan dosyaların isimlerini yazarız

5. `src`: src yani source (kaynak) dosyası proje geliştirilmesi yazılacak bütün kodları bu klasör içerisinde yazarız.
   app.css/index.css ===> stillendirme
   app.js ==> Bir component'dır. Projenin ana sayfasının bileşendir. Proje ilk yüklendiği anda kullanıcnın karşısına çıkan içerik buradan gelir
   index.js ==> React uygulmasının başlangüç noktasıdır. App component'ını alır ve html dosyasındaki id'si root olan divin içerisine renderlar

# Component

- React'ın temel yapı taşıdır.
- React uygulması yadığımız component'ların birleştirilimesiyle oluşur.
- Herhangi bir projeyi yapboz olarak düşündüğümüzde yapbozun her bir parçası bizim bir bileşenimize denk gelir

### Component'ın Temel Özellekleri

- Her component aslında bir javascript fonksiyonudur
- Her component JSX (HTML benzeri) kod return eder
- Aynı component'ı birden fazla yerde kullanabiliriz
- Her compeonent kendi dosyası olur

### Bir fonksiyonun component olması için

- JSX kodu return etmeli
- İsmi büyük harfle başlamlı
- Component kullanmak için export ederiz

# JSX

- JSX (Javascript XML), react'a özel syntax'dır. Javascript kodu içerisinde HTML benzeri kod yazmamıza olanak sağlar

### JSX vs HTML - Temel Farklar

- Attribute isimleri farklı
  class -> className
  for -> htmlFor

- JSX içerisinde Javascript kodu yazabiliriz
  jsx kodu içerisinde {} içerisinde istediğimiz js kodunuz yazabiliyoruz
  bunun sayesinde olayları addEventListenera gerek kalmadan izleyebiliyoruz
  değişkenkleri kolay bir şekilde html kodu içerisine çağırabiliyoruz

- Component kullanımına olanak sağlar
  `<Header/>` ifadesiyle component'ları çağırabiliyoruz

- Tüm etiketler self-closing olmalı

- jsx içerisinde boş fragment kullanbiliyoruz
  dom'da boşuna alan kaplamıyor
  tek parent element kuralına uyum sağlıyor

# Çoklu Renderlama

- Ekrana basmamız gereken eleman sayısı fazla olduğunda hepsini tek tek yazmak kod tekrarını sebep olucağından bu yöntemi kullanırız
- Map işleminden sonra maplediğimiz her eleman benzersiz bir key değeri yazmamız gerekir
- React her elemanın benzersiz keyi olması sayesinde ekrana basılan elementleri birbirinden ayır edebilir. Daha sonrasında güncelleme / silme / ekleme gibi durumlarda spesifik olarak hangi elementin güncellendiği tespit ederk onu günceller ve daha performanslı çalışır. Key verilmediği seneryoda güncellenme anında react hangi elementin güncellendiğini ayır edemez ve hepsini yeniden render olur

# Koşullu Renderlama

- Render: Ekrana bir içeriğin basılması
- Koşullu Renderlama: Renderlama işlemninin koşula bağlı durumudur
- Koşullu renderlama iki farklı şekilde yapılabilir
- jsx içerisinde if else / switch case gibi bir yapıyı doğrudan kullanılamaz

1. Terneray Operator (? :)

- Koşulun hem gerçekleştiği hem de gerçekleşmediği durumda ekrana basılacak içeriği belirleriz
- `?` koşulun gerçekleştiği durumu ifade eder
- `:` koşulun gerçekleşmediği durumu ifade eder

2. Ve Operatörü (&&)

- Sadece koşulun gerçekleştiği seneryoda ekrana basılacak içeriği belirleriz
- Koşulun gerçekleşmediği seneryoda ekrana hiçbir şey basılmaz

# NPM Komutları

- NPM (Node Package manager)
- Nodejs ile birlikte gelen paket yöneticisidir ve Javascript ekosistemindeki en büyük açık kaynak kütüphane deposudur.
- Paket/kütüphane yükleyebilir
- Bağımlılık yönetimdir: Projedeki hangi paketlerin hangi sürümde olduğu package.json dosyada tutar.

- `npm install`: package.json'daki bütün paketleri indirir
- `npm install paket_ismi`: ismimi yazdığımız pakedi indirir
- `npm install paket_ismi@1.0.0`: pakedin istediğimiz sürümünü indiririz
- `npm uninstall paket_ismi`: ismini yazdığımız pakedi siler
- `npm start`: projeyi ayağa kaldırır
- `npm run build`: react projesini derleyerek yayınlamaya hazır hale getirir

# Component Props

- Bir veri aktarma yöntemidir
- Veri aktarımı her zaman yukarıdan aşşağıya gerçekleşir
- Component'lar prop'lar olmadan statik içeriği ekrana basar
- React'da component'ların içeriiklerinin dinamik hale gelmesi için propları kullanırız

# React Virtual DOM ?

- Virtual DOM (Sanal DOM), react'ın yüksek perfonslı arayüzler oluşturmasını saplayan bir tekniktir. Gerçel DOM üzeründe doğrudan işlem yapmak yerine, sanal kopyasını bellekte tutat ve değişiklikleri önce bu sanal yapı üzerinde uygular. Ardından minimum sayıda gerçek dom güncellemesi yapar.

### Neden VDOM Kullanılır ?

- Gerçek DOM üzerinden yapılan işlemler yavaştır. Sayfadaki en küçük bir dğeişiklik bile ağaç yapısının yeniden render olmasında neden olabilir. Virtual DOM bu sorunu çözer:

1. **Perfromansı Arttır**
2. **Gereksiz DOM Manipülasyonlarını Önler**
3. **Daha iyi kullanıcı deneyimi sağlar**
