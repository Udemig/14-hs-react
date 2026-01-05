# Parallel Routes

- Parallel Routes, aynı anda birden fazla bağımsız sayfaı aynı layou içerisinde render etmeye yarar.

- `@slot` formatında tanımlanır (örn: `@notification`, `@revenue`)
- slot'lar layout'a prop olarak gönderilir
- layout içerisinde biden fazla sayfayı parallel olarak ekrana basabiliyoruz

# Neden Component Oluşturmak Yerine Parallel Routes ile Sayfa Oluştururuz?

| Normal Component | Sayfa Component |
| ---------------- | --------------- |
| SSR desteği yok  | SSR desteği var |
| SSG desteği yok  | SSG desteği var |
| Metadata yok     | Metadata var    |
| Middleware yok   | Middleware var  |
| Loading/Err yok  | Loading/Err var |

# Intercepting Routes

- Intercepting routes, kullanıcı deneyimini arttırmak amacıyka modal tabanlı navigasyon sağlar.
- Bu sayede farklı bir içeriğini kullanıcının bulunduğu sayfada bir modal olarak gösterebiliriz.

# Image

- Next.js'de resimleri ekrana basarken `<img />` elementi kullanmak yerine `<Image />` component'ını kullanırız.
- Image component'ı görseli optimize eder, klasitesini düşürür, pixel oranını ayarlar, resim formatını tarayıcıya uyumlu webp formatına çevirir ve ekrana basar

# Imports

## Relative Import

- dosya konumuna bağlı olarak `../../` ifadeleriyle kullandığımız yöntem

## Absolute Import

- İmport yolunda `@` kullandığımızda yol olarak src'ye gideriz
- bu yöntemle yapılan importlar sayesinde dosya konumunu değiştirsek bile import yolunu değiştirmeye gerek kalmaz.

# Font

## Remote Font

- Next.js'de google fonts'dan alıcağımız fontları `next/fonts/google` adresinden import eder ve kurulumunu yapabiliriz

## Local Font

- Projemize dahil ettiğimiz bir otf/ttf dosyasını `LocalFont()` fonksiyonu ile kurulumunu yapıp kullanabiliriz.

- Fonyların kurulumunu yaptıktan sonra kullamak için en iyi yol variable'larını projeye tanıtmak ardından `@theme` ile tailwind entegrasyonu yaptıktan sonura istediğimiz yerde fontu kullanabiliriz

# Rendering Yöntemleri

## Server Side Rendering (SSR)

- Bu yöntemde kullanıcı sayfaya girdiğinde, js kodu `sunucuda` çalışır ve html içeriğini sunucu oluşturur ve kullanıcı sadece `dolu html dosyası` indirir ve sayfa içeriğini görür

## Client Side Rendering (CSR)

- Bu yöntemde, kullanıcı sayfaya girdiğinde `boş html dosyası` ve `javascript dosyası` indirir, indirdiği js kodları `kullanıcının cihazında` çalışır, html dosyasını doldurur ve kullanıcı sayfa içeriğini görür

- Bu iki yöntemi karşılaştırdığımızda SSR, hem SEO hem Performans açısından daha iyidir

# Component Çeşitleri

## Server Component

- Next.js'de varsayılan component çeşidir
- Yeni bir component oluşturduğumuzda direkt server component olarak oluşur.
- Bu component'un içerikleri `SSR` ile render olur
- Hem SEO hem perforormans açısından daha iyidir
- Kullanıcı etkileşimleri takip edilemez ve hook kullanılamaz

## Client Component

- Bir component'ın en üst satırına `use client` ifadesini yazarsanız client component olur.
- Bu component'ın içerikleri `CSR` ile render olur
- Kullanıcı etkileşimleri izlenebilir ve hook'lar kullanılabilir

### Özetle

- Sonuç olarak: server component'lar daha performanslı olduğu için projelerimizde olabildiğince çok server component kullanmaya çalışıcaz sadece zorunda kaldığımız durumlarda (kullanıcı etkileşemini izleyeceksek veya hook kullanıcaksan) client component kullanırız

- Not: Next.js bizden olabildiğince çok server component kullanmamızı istediği için eğer bir sayfa içerisinde kullanıcı etkileşmi veya hook kullanımı gereken bir yer varsa bütün sayfayı client component'a çevirmek yerine ilgili kısmı ayrı bir client component yaparız ve sayfa server component kalmaya devam eder

## İç İçe Kullanım

- `Aynı tüden` iki component'ı iç içe kullanmakta bir problem

- Bir `server component` içerisinde `client component` kullanmakta bir problem yok

- Bir `client component` içerisinde `server component` kullanırsak server component özelliklerini kaybeder ve client component'a dönüşür

- Bir HOC `client component` içerisinde `server component` kullanırsak server component özelliklerini kaybetmez

## Data Fetching

- Next.js'de çekilen veriyi belirli bir süre boyunca cache'de tutar ve api isteği atan fonksiyonu kısa süre içerisinde tekrar çalıştırdığımızda api'a tekrar istek atmak yerine cache'de tutulan veriyi kullanır

- Bu sayede,
- - ilk isteğin ardından api'dab cevap beklemeye gerek kalmaz > daha hızlı
- - api'a gereksiz istekler gitmez > daha az maaliyet
- - asenkron state'ler için context redux tanstack gibi yöntemlere gerek kalmaz

## TODO: CACHE SÜRESİ AYARLAMA
