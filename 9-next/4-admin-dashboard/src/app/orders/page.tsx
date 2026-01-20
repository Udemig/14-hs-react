import OrderTable from "@/components/table/order-table";
import { FC } from "react";
import { Suspense } from "react";
import Loading from "../loading";

const Page: FC = async () => {
  return (
    <div className="page">
      <h1 className="title">Siparişler</h1>

      <Suspense fallback={<Loading styles="my-50" />}>
        <OrderTable />
      </Suspense>
    </div>
  );
};

export default Page;
