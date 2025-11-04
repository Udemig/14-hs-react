# 🧪 React Unit Testing Öğrenme Projesi

Bu proje, React uygulamalarında **unit test** yazmayı öğrenmek isteyenler için hazırlanmış minimal bir başlangıç şablonudur. Jest ve React Testing Library kullanarak test yazma pratikleri yapabilirsiniz.

## 📚 İçerik

- ✅ Jest test framework'ü kurulumu
- ✅ React Testing Library entegrasyonu
- ✅ Örnek Button komponenti
- ✅ 10+ kapsamlı test örneği
- ✅ Coverage raporu desteği
- ✅ Mock konfigürasyonları

## 🚀 Başlangıç

### Gereksinimler

- Node.js 16+
- npm veya yarn

### Kurulum

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev

# Tarayıcıda açın
# http://localhost:5173
```

## 🧪 Testleri Çalıştırma

### Temel Test Komutu

```bash
npm test
```

### Watch Modunda Testler

Dosyalar değiştikçe testler otomatik çalışır:

```bash
npm run test:watch
```

### Coverage Raporu ile Testler

Test kapsama raporunu görmek için:

```bash
npm run test:coverage
```

Coverage raporu `coverage/` klasöründe oluşturulur. HTML raporunu görmek için:

```bash
coverage/lcov-report/index.html
```

## 📁 Proje Yapısı

```
src/
├── components/
│   ├── Button.jsx          # Örnek test edilebilir component
│   └── Button.css          # Component stilleri
├── __tests__/
│   └── Button.test.jsx     # Kapsamlı test örnekleri
├── App.jsx                 # Ana uygulama
├── main.jsx               # Entry point
└── index.css              # Global stiller

__mocks__/
├── fileMock.cjs           # Dosya mock'ları (resim, font vb.)
└── styleMock.cjs          # CSS mock'ları

jest.config.mjs            # Jest konfigürasyonu
jest.setup.mjs             # Jest setup dosyası
babel.config.js            # Babel konfigürasyonu
```

## 📖 Test Örnekleri

`src/__tests__/Button.test.jsx` dosyasında şu test senaryolarını bulabilirsiniz:

1. ✅ Component'in render edilmesi
2. ✅ Custom props ile render
3. ✅ onClick event handler'ının çalışması
4. ✅ Disabled state kontrolü
5. ✅ Farklı variant class'larının kontrolü
6. ✅ Multiple click senaryoları
7. ✅ Accessibility (aria-label) kontrolü
8. ✅ Snapshot testi

## 🎯 Öğrenme Hedefleri

Bu projede şunları öğrenebilirsiniz:

- **Jest** test framework'ünün temel kullanımı
- **React Testing Library** ile component testleri
- `render`, `screen`, `fireEvent` gibi temel metodlar
- Mock fonksiyonlar (`jest.fn()`)
- Test matchers (`expect`, `toBeInTheDocument`, `toHaveBeenCalled` vb.)
- Snapshot testleri
- Test coverage ölçümü
- CSS ve dosya mock'lama

## 🔧 Yapılandırma Dosyaları

### jest.config.mjs

Jest'in temel ayarlarını içerir:

- Test environment (jsdom)
- Transform ayarları (babel-jest)
- Module name mapping (CSS ve dosya mock'ları)

### jest.setup.mjs

Her test öncesi çalıştırılan setup dosyası:

- @testing-library/jest-dom matcher'larını import eder

### babel.config.js

JavaScript transpiler ayarları:

- React JSX desteği
- Modern JavaScript özelliklerinin dönüştürülmesi

## 📝 Yeni Test Ekleme

1. Yeni bir component oluşturun:

```jsx
// src/components/Card.jsx
export const Card = ({ title, content }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);
```

2. Test dosyası oluşturun:

```jsx
// src/__tests__/Card.test.jsx
import { render, screen } from "@testing-library/react";
import { Card } from "../components/Card";

test("renders card with title and content", () => {
  render(<Card title="Test" content="Content" />);
  expect(screen.getByText("Test")).toBeInTheDocument();
  expect(screen.getByText("Content")).toBeInTheDocument();
});
```

3. Testi çalıştırın:

```bash
npm test
```

## 🎨 UI Geliştirme

Geliştirme sunucusu çalışırken yapılan değişiklikler otomatik olarak tarayıcıda güncellenir:

```bash
npm run dev
```

## 🤝 Katkıda Bulunma

Bu proje öğrenme amaçlıdır. Yeni test örnekleri, component'ler veya iyileştirmeler eklemekten çekinmeyin!

## 📚 Kaynaklar

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [React Documentation](https://react.dev/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## 📄 Lisans

MIT

---

**Mutlu Testler! 🎉**

# Yazılım Neden Test Edilmeli

- Çünkü hatalı çalışan bir yazılım , kullanıcıya, şirekete, geliştiriciye zaman / para / itibar kaybettir.
- Testler ise bu tarz hataların son kullanıcıya ulaşmadan farkına varılmasını sağlar.

1. Hataları erken yakalırız
2. Yazılım kalitesini arttırır
3. Otomasyon süreçlerinde fayda sağlar

Bu yüzden sektördeki neredeyse bütün projeşerde çeşitli test yöntemlleri ile test edilir.

## Selectors - Seçici Methodlar

- Screen nesnesi aracılığıyla erişilen methodlardır.
- Test içerisinde renderlanan jsx elementlerini çağırmaya yarar
- https://testing-library.com/docs/queries/bytestid

## HTML Element Rolleri

- Çoğu html elementinin görevini temsil eden bir rolü vardır.
- Bazen etiket ismi ile aynı bazen farklı olaiblir.
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles

## Matchers- Kontrol Methodları

- Matcherlar exprext ile birlikte kulllanılan ve bir elementi veya değişkeni kontrol etmek için kullanılır

- İki çeşit matcherlar vardır:
- DOM: https://github.com/testing-library/jest-dom
- Değişkenler: https://jestjs.io/docs/using-matchers
