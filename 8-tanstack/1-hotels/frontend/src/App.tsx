import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Detail from "./pages/detail";
import Home from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 container my-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/place/:id" element={<Detail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
