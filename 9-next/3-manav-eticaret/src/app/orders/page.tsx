import { getOrders } from "@/service/basket-service";

const Orders = async () => {
  const data = await getOrders();
  console.log(data);

  return <div>Orders</div>;
};

export default Orders;
