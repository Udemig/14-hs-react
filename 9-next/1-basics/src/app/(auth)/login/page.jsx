import delay from "../../../utils/delay";

const Register = async () => {
  // sayfaya girilince 2 saniye süren api isteği attık
  await delay(2000);

  // yüklenme bitince api'dan hate geldiğini simüle edilim
  throw new Error("İnternetin yavaş");

  return (
    <div className="page">
      <h1>Giriş Yapma Sayfası</h1>
    </div>
  );
};

export default Register;
