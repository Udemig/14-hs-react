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
