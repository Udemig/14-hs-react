import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import PageLoader from "../loader/page-loader";
import { toast } from "react-toastify";

const Protected = () => {
  // oturumu açık olan kullanıcının state'i
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    // oturum verisine abone ol
    const unsub = onAuthStateChanged(auth, (activeUser) => setUser(activeUser));

    // kullanıcı sayfadan ayrılınca aboneliği sonlandır
    return () => unsub();
  }, []);

  // oturum versi gelene kadar loader bas
  if (user === undefined) return <PageLoader />;

  // kullanıcı oturumu kapalıysa veya emaili doğrulamamışsa logine yönlendir
  if (user === null || user.emailVerified === false) {
    if (user && user.emailVerified === false) toast.info("Mailinizi doğrulayın");

    // anasayfaya yönllendir
    return <Navigate to="/" replace />;
  }

  // kullanıcının oturum açıksa sayfayı göster
  return <Outlet context={user} />;
};

export default Protected;
