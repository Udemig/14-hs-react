import type { FC } from "react";
import Hero from "./hero";
import Title from "./title";
import List from "./list";

const Home: FC = () => {
  return (
    <div>
      <Hero />

      <Title />

      <List />
    </div>
  );
};

export default Home;
