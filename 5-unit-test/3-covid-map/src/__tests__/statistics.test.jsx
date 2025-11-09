//1) mock'lamak istediğimiz değişkeni import ederiz
import { render } from "@testing-library/react";
import { totalApi } from "../utils/api";
import Statistics from "../pages/home/statistics";

//2) api isteğini atana get fonksiyonun yerine sahte bir fonksiyon koy (mock)
jest.mock("../utils/api", () => ({
  totalApi: { get: jest.fn() },
}));

/*
 ! Mock
 * Yazığımız testler kesinlikle api istekleri gibi dış etkenlerden tamamen bağımsız olmalı, yani api'dan gelicek olan cevap testin sonucunu etkilememeli.

 * Yani api'dan yanıt geliyor mu testi değil, o yanıt gelince arayüz doğru şekilde güncelleniyor mu testleri yapıcaz

 * API isteği atan fonksiyonu "mock'layıp" api'ın döndüreceği cevabı biz belirleyeceğiz. Bu sayede test ortamında gerçek api isteği atmandan sahte verilerle arayüz güncellemelerini test edebileceğiz.
*/

test("bileşen render olduğunda ekrana loader gelir", () => {
  // sahte fonksiyonun çağrılınca promise (yükleniyor) döndürmesini istedik
  totalApi.get.mockReturnValue(new Promise(() => {}));

  // bileşeni renderla
  render(<Statistics />);

  // ekranda loader component'ı var mı?
});

test("api'dan hata gelirse ekrana hata mesajı gelir", () => {});

test("api'dan veri gelirse ekrana istatistikler gelir", () => {});
