import { useLocation, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <h1>404</h1>
      <h2>Aradığınız Sayfa Bulunamadı</h2>
      <h3>{location?.state}</h3>
      <button onClick={() => navigate("/")} className="btn btn-primary">
        Anasayfa'ya Git
      </button>
    </div>
  );
};

export default NotFound;
