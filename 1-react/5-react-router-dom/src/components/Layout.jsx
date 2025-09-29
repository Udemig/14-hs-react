import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="page">
      <Header />

      <main>
        {/* sayfa içeriğinin yerleşeceği konum */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
