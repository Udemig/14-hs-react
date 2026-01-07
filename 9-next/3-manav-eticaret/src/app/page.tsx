import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import { FC } from "react";

const Page: FC = () => {
  return (
    <div className="page">
      <Hero />

      <Features />
    </div>
  );
};

export default Page;
