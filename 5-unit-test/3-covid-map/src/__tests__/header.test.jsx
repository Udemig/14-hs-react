import { queryByTestId, render, screen } from "@testing-library/react";
import Header from "../pages/detail/header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { mockCountryData } from "../utils/constants";

// sahte store oluşturma fonksiyonunu elde ettik
const createMockStore = configureStore([thunk]);

it("store yüklenme durumundayken ekrana loader gelir", () => {
  // bu teste özel loading durumunda sahte bir store oluştur
  const mockStore = createMockStore({ isLoading: true, data: null });

  // component içerisinde react-router-dom ve react-redux özellikleri kullanıldığı için component'ı renderlarken sağlayıcılar ile sarmaladık
  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  // ekrana loader geliyor mu?
  screen.getByTestId("loader");
});

it("store'a veri geldiğinde ekrana ülke ismi ve bayrağı gelir", () => {
  // bu teste özel detay verilerine sahip sahter store oluştur
  const mockStore = createMockStore({
    isLoading: false,
    data: mockCountryData,
  });

  // component'ı renderla
  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  // loader'ın ekranda olmadığından emin ol
  const loader = screen.queryByTestId("loader");
  expect(loader).toBeNull();

  // ülke ismi ekranda mı - v1
  const title = screen.getByRole("heading");
  expect(title).toHaveTextContent("Türkiye");

  // ülke ismi ekranda mı - v2
  screen.getByRole("heading", { name: "Türkiye" });

  // ülke bayrağı ekranda mı
  const img = screen.getByAltText(mockCountryData.flag.alt);

  // ülke bayrağının kaynağı(src) doğru mu
  expect(img).toHaveAttribute("src", mockCountryData.flag.png);
});
