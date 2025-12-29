import { useState, type FC } from "react";
import { useLogout, useProfile } from "../../service/auth";
import { Search, User } from "lucide-react";
import { Link } from "react-router-dom";

const UserInfo: FC = () => {
  const { user, isLoading, error } = useProfile();
  const { isPending, mutate } = useLogout();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex items-center gap-6 xl:gap-10">
      <button className="cursor-pointer max-md:hidden">
        <Search />
      </button>

      <button onClick={() => setIsOpen(!isOpen)} className="relative cursor-pointer">
        <User />

        {isOpen && user && (
          <div className="absolute top-13 -left-30 bg-white shadow-lg rounded-md z-50 overflow-hidden border border-zinc-200">
            <button className="font-semibold header-button">
              <span>{user?.firstName}</span>
              <span className="ms-1">{user?.lastName}</span>
            </button>

            {user.role === "admin" && (
              <button className="header-button">
                <Link to="/admin/dashboard">Admin Paneli</Link>
              </button>
            )}

            <button disabled={isPending} onClick={() => mutate()} className="header-button">
              Çıkış Yap
            </button>
          </div>
        )}
      </button>
    </div>
  );
};

export default UserInfo;
