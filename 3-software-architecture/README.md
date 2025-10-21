# Yazılım Mimarisi

- Yazılım mimarisi, bir yazılımın (uygulama, web sitesi, api, oyun) yapı taşlarını, bu yapı taşlarının birbirlye olan etkileşimlerini, sistemdeki akışları, karar noktalrını ve performans sürdürelebilirlik gereksinimlerini kapsayan bir disiplindir.

## Yapı Taşları

### 1) Bileşenler (Component)

- Mimarinin işlevsel birimlerini temsil eder.

### 2) Bağlantıları (Connections)

- Bileşenlerin bibirleriyle olan etkileşimlerini temsil eder.
- Frontend: state yönetim araçları: Redux, Context, Zustand
- Backend: kimlik doğrulama / oturum yönetimi: JWT, Session, Cookie
- Backend: iletişim araçları: RabbitMQ, Kafka

### 3) Kalite Nitelikleri

- Sistemden beklenen performans, ölçeklenebilirlik, güvenlik, erişlebilirlik gibi gereksinimleri ifade eder.

### 4) Teknoloji Kısıtlamaları

- Teknolojik veya işlevsel kısıtlamalar.
- Kullanılacak olan teknolojiler, diller, frameworkler, veritabanı, işletim sisitlemleri.
- Bulut platofrmları: AWS, Azure, Google Cloud, Firebase

### 5) Tasarım Desenleri (Design Patterns)

- Yazılım mimarisinin yapısının tasarımında kullanılan desenlerdir.
- Projeyi geliştirirken sistimleri / servisleri / component'ları neye göre ayırıcağımız belirller.
- [Tasarım Desenleri](https://github.com/yusufyilmazfr/tasarim-desenleri-turkce-kaynak?tab=readme-ov-file#-factory)

# Mimari Türleri

1. Monolothic Architecture

- Tüm sistemin tek bir kod tabanında yazılıdğı ve tek bir yerden dağıltıldğı mimari.
- Örn: Bütün amazon webssitesinin tek bir react projesinde yazılması
- Örn: Bütün amazon backendinin tek bir node.js projesinde yazılması

2. Microservice Architecture

- Sistemin küçük, bağımsız servislerden oluştuğu mimari.
- Örn: Amazon websistenin (Kullanıcların giriceği kısım, Adminlerin gireceği kısım, Satıcıların gireceği kısım) birer ayrı react projesinde yazılması

3. MVC (Model,View,Controller) Architecture

- - Model: Veri yapısı ve veri yönetimi kodlarını içeririr
- - View: Kullanıcı arayüzü kodlarını içeririr
- - Controller: İş mantığı ile alakalı kodları içerir.

4. Component Based Architecture

- Yazılımı, bileşenlerin oluşturduğu modal.
- örn: React, Vue, Angular frameworklerde kullanılır.

## Doğru Yazım Mimarisinin Faydaları

1. Performans: İyi tasarlanmış bir miari ile sistemin, kaynakları verimli kullanmasıs sağlanabilir
2. Ölçeklenebilirlik
3. Bakım ve Geliştirilebilirliği kolaylaştırır.
4. Ekipler arası iş birliği ve vermilik artar
5. Maaliyet
6. Yeniden Kullanılabilirlik
7. Eseneklik

# S.O.L.I.D Prensipleri

- S - Single Responsibility Principle (Tek Sorumluluk Prensebi)
- O – Open/Closed Principle (Açık/Kapalı Prensibi)
- L - Liskov Substitution Principle (Liskov Yerine Geçme Prensibi)
- I - Interface Segregation Principle (Arayüz Ayrımı Prensibi)
- D – Dependency Inversion Principle (Bağımlılıkların Tersine Çevrilmesi Prensibi)

# 12 Factor Uygulama

**12 Factor Uygulama İlkeleri** (12 Factor App), **bulut tabanlı modern uygulamaların** nasıl yazılması gerektiğine dair bir rehberdir. Bu ilkeler, **Heroku**’nun kurucularından **Adam Wiggins** tarafından 2011’de tanımlanmıştır.

Amaç:
Uygulamaların **taşınabilir**, **ölçeklenebilir**, **geliştirilebilir** ve **sürdürülebilir** olmasını sağlamak.

---

## ✅ 12 Factor App İlkeleri (Detaylı Açıklama)

### 1. **Codebase (Kod Tabanı)**

> Her uygulama tek bir kod tabanına (repository) sahip olmalı.
> Birden fazla dağıtım (deployment) olabilir, ama tek kod tabanı üzerinden.

🟢 **Doğru**: Tek Git repo → Production, Staging, QA gibi farklı ortamlar
🔴 **Yanlış**: Ortak kod için birçok repo kullanmak

---

### 2. **Dependencies (Bağımlılıklar)**

> Uygulama, ihtiyaç duyduğu tüm bağımlılıkları açıkça belirtmeli.
> Sisteme kurulu şeylere güvenmemeli.

🛠 Örnek:

- Node.js için `package.json`
- Python için `requirements.txt`

---

### 3. **Config (Yapılandırma)**

> Konfigürasyonlar (API anahtarları, veritabanı bilgileri vs.) koddan ayrılmalı, **ortam değişkenleriyle** yönetilmeli.

🟢 **Doğru**: `process.env.DB_URL`
🔴 **Yanlış**: `const DB_URL = "hardcoded-string"`

---

### 4. **Backing Services (Bağlı Servisler)**

> Veritabanı, kuyruk sistemleri, e-posta servisleri gibi dış servisler, uygulamaya bağlı kaynaklar gibi görülmeli ve kolayca değiştirilebilmeli.

🛠 Örnek:
PostgreSQL → MongoDB’ye geçiş, kodda çok az değişiklikle mümkün olmalı

---

### 5. **Build, Release, Run**

> Uygulama yaşam döngüsü üç ayrı aşamadan oluşmalı:

- **Build:** Kaynak koddan çalıştırılabilir paket oluşturulur
- **Release:** Build + Config birleştirilir
- **Run:** Uygulama çalıştırılır

Bu ayrım sayesinde sürümler daha yönetilebilir olur.

---

### 6. **Processes**

> Uygulama bir veya daha fazla stateless işlem (process) olarak çalışmalı.
> **Durum (state)**, bellekte değil; dış servislerde (veritabanı, cache vs.) tutulmalı.

🛠 Yani uygulama her yeniden başlatıldığında sıfırdan çalışabilmeli.

---

### 7. **Port Binding**

> Uygulama kendi HTTP sunucusunu başlatmalı (örneğin Express.js ile).
> Harici web sunucusuna (Apache, Nginx) bağlı olmamalı.

🛠 Örnek:

```js
app.listen(process.env.PORT);
```

---

### 8. **Concurrency (Eş Zamanlılık)**

> Uygulama, işlevlerini farklı işlemler veya iş parçacıkları (thread) ile yönetebilmeli.
> Yatay ölçeklemeye açık olmalı.

🛠 Örnek:

- Web işlemleri (HTTP server)
- Worker işlemleri (Background jobs)

---

### 9. **Disposability (Kolay Kapatılabilirlik)**

> Uygulama hızlı başlatılabilir ve güvenli bir şekilde durdurulabilir olmalı.
> Bu, ölçekleme, dağıtım ve hata kurtarma için kritiktir.

🛠 Örnek: SIGTERM sinyali geldiğinde işlemi düzgün şekilde sonlandırmak

---

### 10. **Dev/Prod Parity (Geliştirme ve Üretim Uyumu)**

> Geliştirme, test ve üretim ortamları birbirine mümkün olduğunca benzer olmalı.

🛠 Yani:

- Aynı veritabanı türü
- Aynı bağımlılık sürümleri
- Benzer konfigürasyonlar

---

### 11. **Logs (Loglama)**

> Uygulama, logları kendi yönetmemeli; sadece standart çıktıya (stdout) yazmalı.
> Log yönetimi, harici sistemlere (ELK, Datadog, CloudWatch) bırakılmalı.

🛠 Örnek:

```js
console.log("Kullanıcı oluşturuldu");
```

---

### 12. **Admin Processes (Yönetim Komutları)**

> Veri migrasyonu, debug komutları gibi idari işler **uygulamadan ayrı işlemler** olarak çalıştırılmalı.

🛠 Örnek:

```bash
node scripts/migrate-users.js
```

---

## 🎯 Neden 12 Factor?

- CI/CD'ye uygun
- Bulut (cloud-native) mimariye hazır
- Mikroservis geliştirmeye zemin hazırlar
- Taşınabilir (vendor lock-in olmadan çalışabilir)
