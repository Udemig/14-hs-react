import UserModal from "@/components/modal/user-modal";
import UserTable from "@/components/table/user-table";
import { FC, Suspense } from "react";
import Loading from "../loading";

interface Props {
  searchParams: Promise<{ userId?: string }>;
}

const Users: FC<Props> = async ({ searchParams }) => {
  const { userId } = await searchParams;

  return (
    <div className="page">
      <h1 className="title">Kullanıcılar</h1>

      <Suspense fallback={<Loading styles="my-40" />}>
        <UserTable />
      </Suspense>

      {/*
       * Url'de bir userId parametresi varsa modalı göster
       * Bu sayede hiçbiyeri client compoenent'a çevirmeden modalı gizle/gösteri halledebildik
       */}
      {userId && <UserModal userId={userId} />}
    </div>
  );
};

export default Users;
