import type { FC, ReactNode } from "react";
import { useProfile } from "../../service/auth";
import Loader from "../loader";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
  allowedRoles?: ("user" | "admin")[];
}

const Protected: FC<Props> = ({ children, allowedRoles }) => {
  // oturumu açık kullanıcnın profil bilgilerini al
  const { user, isLoading } = useProfile();

  // kullanıcı verisi yüklenene kadar loader göster
  if (isLoading) return <Loader />;

  // oturumu açık değilse login sayfasına yönlendir
  // replace: x sayfasından y'ye geçerken replace kullandıysa x'i geçmişten siler
  if (!user) return <Navigate to="/login" replace />;

  // eper rolü yetrsize ise anasayfaya yönlendir
  if (allowedRoles && !allowedRoles?.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  // yetkisi olan kullanıcı sayfa içeriğini görebilir
  return children;
};

export default Protected;
