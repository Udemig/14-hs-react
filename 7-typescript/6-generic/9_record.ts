// Record<Keys,Type>
// Belirli anahtarlara sahip bir nesne tipi oluşturur

// Örnek 1: Basit Kullanım
type Rol = "admin" | "kullanici" | "ziyaretci";

type SahipOlunanRoller = Record<Rol, boolean>;

const yetkiler: SahipOlunanRoller = {
  admin: true,
  kullanici: true,
  ziyaretci: false,
};

// Örnek 2: Key değerini string yapma
// Key'lerini bilmediğimiz/dinamik olduğu nesnelerde kullanırız
type KullanciSkorlari = Record<string, number>;

const skorlar: KullanciSkorlari = {
  ahmet: 95,
  mehmet: 97,
  ayse: 56,
};

// Örnek 3: HTTP Status Kodları
type HttpStatusCode = 200 | 423 | 404 | 500;
type StatusMessages = Record<HttpStatusCode, string>;

const messages: StatusMessages = {
  200: "Başarılı",
  423: "Yetersiz Yetki",
  404: "Bulunamadı",
  500: "Sunucu Hatası",
};
