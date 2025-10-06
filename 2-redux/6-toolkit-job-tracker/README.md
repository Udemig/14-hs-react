# Kütüphaneler

- react-router-dom
- @reduxjs/toolkit
- react-redux
- react-toastify
- json-server
- axios
- lucide-react
- days
- sass

# Module CSS/SCSS

### Scoped (Bileşen Özel)

- `*.module.css` ile tanımlanan class'lar otomatik olarak scope'a alaınır. Yani yalnızca import edildiği bileşende geçerlidir
- bu sayede proje genelinde class'ların çakışma olmaz

### Global CSS Karmaşasını Önler

- Global css dosyalarında her class globaldir. Bu da büyük projelerde isim çakışmaların, istenemeyen override'lara neden olabilir
- Module yapısı sayesinde daha düzenli ve kontrollü yazarız aynı zamanda bu çakışma ihtimali tamamen önllenir

### İzole

- Her bileşenin stili ayrı dosyalarda tutulduğu için
- Yeni bir class tanımlarken "bu isim başka bir yerde kullanıldı mı?" derdi kalmaz

### Kullanım

- `*.module.scss` isimli dosya oluşturup stilleri yazarız
- kullanılacak component'da `import styles from "*.module.scss"` şeklinde stilleri bir nesne formatında import ediyoruz
- styles nesnesi içerisindeki class isimlerini elementler üzerinde kullanırız
