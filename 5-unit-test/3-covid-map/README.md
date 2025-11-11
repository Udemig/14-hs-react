# Gerekli Kütüphaneler

- axios
- react-router-dom
- react-icons
- tailwindcss
- millify
- react-simple-maps
- react-teting-library
- jest
- @reduxjs/toolkit
- react-redux

# Kaynaklar

- Toplam İstatistikleri API:
- - https://rapidapi.com/axisbits-axisbits-default/api/covid-19-statistics/playground/apiendpoint_191c58c7-a995-4024-a5ee-41043d79e542

### TDD (Test Driven Development) Süreci

- Test güdümlü geliştirme, yazılım geliştirme sürecinde testlerin koddan önce yazıldığı bir tekniktir.
- Red-to-Green test olarak geçer.

### TDD Süreci

1. Test Yaz: İstenen özellikler için önce testler yazılır
2. Test Çalıştır: Testler başarısz olur
3. Kod Yaz: Testleri geçicek minimum kodu yaz
4. Test Çalıştır: Tüm testler başarılı olmalı
5. Refactor: Kodu iyileştir, testlerin hala geçmesi gerekir.

### TDD Avantajları

- Daha temiz ve sürdürülebilir kod
- Erken hata tepiti
- Değişiklik yaparken güven sağlar

# Selector Anatomisi

- Selector, test ortamında renderlanan elementleri almak için kullandığımız methodlardır.
- Seçiciler temelde 3 anaa parçadan oluşur.

1. Yöntem

- Get: Ekrandaki elementi alır, bulamazsa hata verir
  Bir elementin ekranda olduğunu kontrol etmek için kullanabiliriz.
- Query: Ekrandaki elementi alır, bulamazsa hata vermez null döndürür.
  Ekranda olmadığını düşündüğümüz bir elementi almak için kullanabilir
- Find: Ekrana asenkron olarak basılan elementleri almak için kullanılır.
  Eğer api isteğinin ardından ekrana asenkron olarak basılan bir element varsa bu yöntemi kullanırız.

2. All İfadesi (Opsiyonel)

- Eğerki ekranan aynı koşula uyan birden fazla element almak istiyorsak kullandığımız yöntemin devamına `All` ifadesini ekleriz
- All ifadesi kullanırsak dönen cevap her zaman bir dizi içerisinde olur.
- `getAllBy` | `queryAllBy` | `findAllBy`

3. Sorgu

- Hangi yöntemle elementi seçiceğimizi belirleyen methodlar
- ByRole
- ByText
- ByTestId
- ByAltText
- ByTitle
- ByDisplayValue
- ByPlaceholderText
- ByLabel

- Artık yukarıdaki 3 parçayı istediğiniz gibi birleştirebilirsiniz
- `queryByTitle()` | `findAllByText()` | `getAllByTestId()`

# 100% Test Covarage

- Projenin dimaik olan bütün özelleklerinin test edilmiş olma durumuna.
