import configureStore from "redux-mock-store";
import Content from "../pages/detail/content";
import { thunk } from "redux-thunk";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockCountryData } from "../utils/constants";

// sahte stor oluşturmaya yarayan fonksiyonun kurulumu
const createMockStore = configureStore([thunk]);

it("store yüklenme durumundayken ekrana loader gelir", () => {
  // test seneryosuna uygun mockStore oluştur
  const mockStore = createMockStore({ isLoading: true, error: null, data: null });

  // component'ı renderla
  render(
    <Provider store={mockStore}>
      <Content />
    </Provider>
  );

  // ekrana loader geldi mi
  screen.getByTestId("loader");
});

it("store hata durumundayken ekrana hata mesajı gelir", () => {
  // test seneryosuna uygun mockStore oluştur
  const mockStore = createMockStore({ isLoading: false, error: "Ülke bulunamadı", data: null });

  // componentı renderla
  render(
    <Provider store={mockStore}>
      <Content />
    </Provider>
  );

  // hata mesajı ekrana geldi mi kontrol et
  screen.getByText("Ülke bulunamadı");
});

it("store'a veri geldiğinde her bir değer ekrana basılır", () => {
  // bu test seneryosuna uygun mockStore oluştur
  const mockStore = createMockStore({ isLoading: false, error: false, data: mockCountryData });

  // component'ı renderla
  render(
    <Provider store={mockStore}>
      <Content />
    </Provider>
  );

  // data nesnesini diziye çevir
  const arr = Object.entries(mockCountryData).filter(([key]) => key !== "flag");

  // dizideki her bir key ve valu değeri ekrana basılıyor mu
  arr.forEach((item) => {
    // ekrana item'ın key değeri basılıyor mu
    screen.getByText(item[0]);

    // ekrana item'ın value değeri basılıyor mu
    screen.getByText(item[1]);
  });
});
