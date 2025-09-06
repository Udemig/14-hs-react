import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();

  /*
   * Bu kapsayıcı route'ları kullanıcı yetkilendirme sisteme içerisinde kullanrıız.
   * Örneğin bu kapsayıcı route içerisinde yer alan sayfalara sadece admin rolündeki kullanıcıların girişine izin vermek isteyebiliriz.
   * Bu noktada her sayfayay gidip ayrı ayrı koşul yazmak yerine bu sayfaları kapsayıcı route içerisine alıp ortak bir koşul yazabiliriz
   */
  if ("rolü admin değilse") {
    // anasayfaya yönlendir
    // navigate("/");
  }

  return (
    <div className="row g-5">
      <div className="col-sm-4">
        {/* sadece kategori route'larına özel ortak aside elementi tanımladık */}
        <aside className="card shadow-sm">
          <div className="card-header">
            <h5>Kategoriler</h5>
          </div>

          <div className="card-body">
            <NavLink to="/kategori/hikaye">Hikaye</NavLink>
            <br />
            <br />
            <NavLink to="/kategori/roman">Roman</NavLink>
          </div>
        </aside>
      </div>

      {/* Outlet: Kapsayıcı route içerisinde alt route'un elementini ekrana basmaya yarar */}
      <div className="col-sm-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Category;
