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
    <BrowserRouter>
      <div className="page">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ürünler" element={<Products />} />
            <Route path="/detay/:bookId" element={<Detail />} />

            <Route path="/kategori" element={<Category />}>
              <Route path="hikaye" element={<Story />} />
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
