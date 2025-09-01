import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";

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
            <Route path="/kategori" element={<Category />} />
            <Route path="/detay/:bookId" element={<Detail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
