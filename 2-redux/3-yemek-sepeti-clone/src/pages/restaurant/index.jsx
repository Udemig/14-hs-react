import RestaurantDetail from "./restaurant-detail";
import RestaurantProducts from "./restaurant-products";

const Restaurant = () => {
  return (
    <div>
      <div className="shadow">
        <div className="container">
          <RestaurantDetail />
        </div>
      </div>
      <div className="shadow">
        <div className="container">
          <RestaurantProducts />
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
