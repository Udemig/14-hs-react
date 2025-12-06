import type { FC } from "react";
import Hero from "../../components/hero";
import Filter from "../../components/filter";
import List from "../../components/list";

const Home: FC = () => {
  return (
    <div>
      <Hero />

      <Filter />

      <List />
    </div>
  );
};

export default Home;
