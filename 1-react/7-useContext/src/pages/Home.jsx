import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import Card from "../components/Card";

const Home = () => {
  // useContext yapısına parametre olarak abone olmak istediğimiz context yapısını veririz
  const { loading, error, products } = useContext(ProductContext);

  if (loading) return <h2>Yükleniyor..</h2>;

  if (error) return <h3>{error}</h3>;

  return (
    <div className="container d-flex flex-column gap-5 p-5">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
