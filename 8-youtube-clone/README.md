# Kütüphaneler

- react
- axios
- tailwindcss
- react-router-dom
- react-icons

# Kaynaklar

- API: https://rapidapi.com/ytjar/api/yt-api

# Enviroment Variables

- Ortam değişkenleri, projenizde kullanmanız gereken ama herkesle paylaşmak istemeyiceğiniz ve githuna gönderilmesini engelliyeceğiniz değişkenlerdir.
- Projeyi yeniden yayınlamadan bu değerleri değiştirebiliriz.
- (api key, varitabanı url, admin variables, project variables)

- proje içerisinde bir `.env` isimli dosya aç
- `VITE_DEĞİŞKEN_İSMİ=değişkenin değeri` formatıyla tanımlanır
- proje içerisinde `import.meta.env.VITE_DEĞİŞKEN_İSMİ` ifadesyile env değişkenlere erişebiliriz.
- .env klasörünü .gitignore'a ekleyerek githuba gönderilmesiini engelleriz
- daha sonra projeyi indirip başlatıcak kişilere yardımcı olma amacıyla `.env.example` dosyası oluşturup hangi değişkenlerin tanımlanması egerektiğini belirtebiliriz
