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

- Next.js varsayılan olarak bütün api isteklerini cache'ler ama bazen biz cachelemesini önlemek isteyebiliriz. Bu durumda fetch methodunun ayarlarını buna göre yaparız.

# Next.js Methdoları

## useRouter

- sadece `client` component'larda kullanabilirsiniz
- proje içerisinde yönlendirme yapmak için kullanılır
- back() | forward() | push() | reload() methodları vardır

## redirect

- sadece `server` component'larda kullanabilirsiniz
- proje içerisinde yönlendirme yapmak için kullanılır
- genelde yetkilendirme için kullanırız

## notFound

- hem `client` hem de `server` component'larda kullanabilirsiniz
- ekrana 404 sayfasını basar

## usePathname

- sadece `client` component'larda kullanabilirsiniz
- url'deki kullanıcnın bulunduğu yolu getirir

## useParams

- sadece `client` component'larda kullanabilirsiniz
- url'deki parametrelere erişmemizi sağlar
- server component'larda ise parametreleri zaten prop olarak alıyoruz.

## useSearchParams

- sadece `client` component'larda kullanabilirsiniz
- url'deki query parametrelerine erişmemizi sağlar
- server component'larda ise query parametreleri zaten prop olarak alıyoruz.

# Form

- Normal şartlarda formlarda bolca kullanıcı etkileşmi izlmemiz gerektiğinden form'ları client component olarak oluşturmamız gerekir.
- Ama server component client component'lara göre daha avantajlı olduğundan dolayı server action yöntemini kullanarak form içerisindeki veriye erişme ve orm gönderilince fonksiyon çalıştırma işini server component'lardada yapabiliyoruz.
- Eğer formda hata yönetimi istiyorsanız server action kullanma şansınız yok o zaman mutalaka client component olmalı

# Static Site Generation (SSG)

- SSG, next.js'in build (derleme) sırasında sayfaları önceden html olarak üretip sunucuda saklamasıdır.

- Kullanıcı siteyi ziyaret ettiğinde sayfalar anında ve çok hılzı bir şekilde sunulur çünkü önceden hazırlanmıştır

## Static Sayfa

- Build anında html'i hazırlanıp sunucuda saklanır, kullanıcı sayfaya girdiği anda tekrar hazırlanmadan direkt kullanıcıya sunulur
- Varsayılan olarak url parametresi olmayan bütün sayfalar statik sayfa olur

## Dinamik Sayfa

- Kullanıcı sayfaya girdiği anda html'i hazırlanıp sunulan sayfalardır.
- Varsayılan olarak url'de parametresi olan sayfalar dinamik sayfa olur

## Static Bir Sayfayı Dinamik Hale Getirme (revalidate | dynamic)

- Next.js varsayılan olarak parametreye sahip olmayan bütün sayfaları statik yapar.
- Ama bazen biz bu sayfaların içeriklerinin güncelleniceğinden tamamen statik olmasını istemeyiz.
- Bu durumda revalidate aracılığıyla static sayfayı belirli aralıklara yeniden oluşturabilir veya dynamic aracılığı ile tamamen dinamik hale getirebiliriz

## Dinamik Bir Sayfayı Statik Hale Getirme (generateStaticParams)

- generateStaticParams, dinamik bir sayfaı statik hale getirir.
- build sırasında çağrılan dinamik route'lar için bir parametre listesi return ederiz ([{id:"1"},{id:"2},{id:"3"}])
- Next.js'de bu listedeki herbir parametre için o detay sayfasının statik bir versiyonunu oluşturur
- Genelde içeriği çok değişmeyen detay sayfalarında (blog detay, portfolya projesi, tarif detay) veya bir çok ürüne sahip bir sitenin sadece popüler ürünleri için kullanabiliriz.

# Fullstack Framework

- Next.js ile hem frontend hem backend kodlarını tek bir proje içerisinde yazabiliyoruz.
- Backend route'u oluşturmak için api isminde bir klasör oluşturmak yeterlidir.
