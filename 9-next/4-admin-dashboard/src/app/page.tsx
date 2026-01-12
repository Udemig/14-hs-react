import { FC } from "react";
import icon1 from "@/assets/images/icon-1.webp";
import icon2 from "@/assets/images/icon-2.webp";
import icon3 from "@/assets/images/icon-3.webp";
import icon4 from "@/assets/images/icon-4.png";
import Card from "@/components/home/card";
import SalesChart from "@/components/home/sales-chart";
import CategoryChart from "@/components/home/category-chart";

const Home: FC = () => {
  const cards = [
    {
      icon: icon1,
      label: "Toplam Kullanıcı",
      value: 1576,
    },
    {
      icon: icon2,
      label: "Toplam Sipariş",
      value: 312,
    },
    {
      icon: icon3,
      label: "Toplam Satış",
      value: (73486236).toLocaleString(),
    },
    {
      icon: icon4,
      label: "Toplam Ürün",
      value: 1453,
    },
  ];

  return (
    <div className="page">
      <h1 className="title">Admin Paneli</h1>

      <section className="grid lg:grid-2 gap-5 my-10">
        {cards.map((i, key) => (
          <Card item={i} key={key} />
        ))}
      </section>

      <section className="grid lg:grid-cols-14 gap-5 my-10">
        <div className="lg:col-span-9">
          <SalesChart />
        </div>

        <div className="lg:col-span-5">
          <CategoryChart />
        </div>
      </section>
    </div>
  );
};

export default Home;
