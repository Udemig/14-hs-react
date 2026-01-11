import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import Products from "@/components/home/products";
import { FC, Suspense } from "react";
import Loading from "./loading";

const Page: FC = () => {
  return (
    <div className="page">
      <Hero />

      <Features />

      <Suspense fallback={<Loading />}>
        <Products />
      </Suspense>
    </div>
  );
};

export default Page;
