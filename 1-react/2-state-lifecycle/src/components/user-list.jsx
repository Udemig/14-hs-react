import { useEffect, useState } from "react";

const UserList = () => {
  // yüklenme / hata / veri'nin state'ini tutuyoruz
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState(null);

  // componentDidMount
  useEffect(() => {
    // api isteği atılmadan hemen önce loading state'ini güncelle
    setLoading(true);

    // api isteğini atı
    fetch("https://dummyjson.com/users")
      // json formatındaki verileri js formatına çevir
      .then((res) => res.json())
      // kullanıcı verisini state'e aktar
      .then((data) => setUsers(data.users))
      // hata geldiğinde hata açıklamasını state'e aktar
      .catch((err) => setError(err.message))
      // yüklenme bitince loading state'ini güncelle
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Kullanıcı Listesi</h1>

      {/*
       * Yüklenme devam ediyorsa: loader bas
       * API'dan hata geldiyse: hata mesajını bas
       * API'dan veri geldiyse: verileri ekrana bas
       */}
      {loading ? (
        <div>Yükleniyor....</div>
      ) : error ? (
        <div>Hata! {error}</div>
      ) : (
        users?.map((user) => (
          <div>
            <img src={user.image} />
            <h1>
              {user.firstName} {user.lastName}
            </h1>
            <h1>{user.age}</h1>
            <i>{user.email}</i>

            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;
