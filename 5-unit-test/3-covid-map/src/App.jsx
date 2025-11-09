import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Header from "./components/header";
import TestPage from "./pages/test-page";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:country" element={<Detail />} />
            <Route path="/test-ui" element={<TestPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
