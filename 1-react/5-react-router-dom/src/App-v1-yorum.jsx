import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import Novel from "./pages/Novel";
import Story from "./pages/Story";

const App = () => {
  return (
    // BrowserRouter: Uygulamanın router (yönlendirme) sistemini başlatır.
    <BrowserRouter>
      <div className="page">
        <Header />

        <main>
          {/* Routes: Tüm route bileşenlerini kapsar, her url değiştiğinde uygun route'u bulup gösterir. Sadece ilk işleşen route'u gösterir */}
          <Routes>
            {/* Route: bir url ile eşleştiğinde hangi bileşnin gösterileceğini belirler */}
            <Route path="/" element={<Home />} />
            <Route path="/ürünler" element={<Products />} />

            {/* Dynamic Route */}
            <Route path="/detay/:bookId" element={<Detail />} />

            {/* Nested Route */}
            <Route path="/kategori" element={<Category />}>
              {/* child route */}
              <Route path="hikaye" element={<Story />} />
              {/* child route */}
              <Route path="roman" element={<Novel />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
