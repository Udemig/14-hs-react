import { useSelector } from "react-redux";

const Home = () => {
  const { isLoading, error, restaurants } = useSelector((store) => store.restaurant);

  console.log(isLoading, error, restaurants);

  return <div>Home</div>;
};

export default Home;
