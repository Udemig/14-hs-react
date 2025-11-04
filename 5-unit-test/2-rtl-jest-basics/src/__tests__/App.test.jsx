import { render, screen } from "@testing-library/react";
import App from "../App";

/*
 ! Unit Test
 * Yazdığımız *dinamik* olan bütün bileşenlerin testlerini yazarız
 * Uni test yazmamız sayesinde kod değişikliği yapıldığında, yaptığımız değişiklikleri githuba göndermden önce projede hata olup olmadığını kontrol etmemizi sağlar
 * Projelerde her işlevi el ile kontrol etmek çok fazla zaman alıcağından ve bir şeylerin gözden kaçma ihitmali yüksek olduğundan test yazmak önemlidir.
 * Bu yüzden unit test ile bilşenlerin doğru çalışıp çalışmadığını kontrol eden testler yazarız
*/

/*
 ! Dosyalama
 * testlerimizi .test.js / .test.jsx dosyları içerisine yazarız
 * projedeki testlerin tek bir klasör içerisinde tutulması faydaldırır (__test__)
*/

/*
 ! Test Nasıl Yazılır
 * test yazarken *test* veya *it* methodlarından birini kulanırız.
 * test fonksiyonu 2 parametre ister
 * 1) string: testin adı
 * 2) function: testin yapıldığı yer
*/

test("ekranda merhaba dünya yazar", () => {
  // test edilecek component render edilir (virtual - sanal ortam - ram)
  render(<App />);

  // renderlanan component içerisindeki test edilecek elementi çağıralım
  // eğer component taratıcıda ekrana basılıyor olsaydı document.querySelector() / getElementById() gibi bir method kullanırdık
  // ram'de render edildiğinden `document` yerine `screen` ve `querySelector` yerine farklı methodlar kullanırız
  const h1 = screen.getByText("MERHABA DÜNYA");

  // çağrılan elementten beklentimizi söyleriz
  // beklentimiz: ekranda içinde Merhaba Dünya yazan bir eleman vardır
  expect(h1).toBeInTheDocument();
});
