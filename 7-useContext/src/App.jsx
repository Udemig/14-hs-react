import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="vh-100 d-flex flex-column">
        <Header />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
