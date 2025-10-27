import { BrowserRouter, Route, Routes } from "react-router-dom";
import Room from "./pages/room";
import Login from "./pages/login";
import Chat from "./pages/chat";
import Protected from "./components/protected";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Oturumu kapalı kullanıcılar giremeyecek */}
        <Route element={<Protected />}>
          <Route path="/" element={<Room />} />
          <Route path="/chat/:room" element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
