import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container my-5">
      <div className="justify-content-center">
        <div className="welcome-container text-center">
          <div className="mb-4">
            <i className="bi bi-book display-1 text-primary mb-4"></i>
            <h1 className="display-4 fw-bold text-primary mb-3">Kitap Kurdu'na Hoş Geldiniz</h1>
            <p className="lead  mb-4">Binlerce kitap arasından favorilerinizi keşfedin</p>
          </div>

          <div>
            <img src="/welcome.webp" style={{ maxWidth: "500px", width: "100%" }} />
          </div>

          <div className="d-grid gap-3 d-md:flex justify-content-md-center">
            <Link to="/ürünler" className="btn btn-primary btn-lg px-4 py-2">
              <i className="bi bi-journal-text me-2"></i>
              Kitaplara Göz At
            </Link>
            <Link to="/kategori" className="btn btn-outline-primary btn-lg px-4 py-2">
              <i className="bi bi-grid me-2"></i>
              Kategorileri İncele
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
